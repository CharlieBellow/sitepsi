import NextAuth from "next-auth"

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitHubProvider from "next-auth/providers/github"

import { db } from "@/db/index"

// Cria a "piscina" de conexões com o banco de dados
const allowedEmails = ["charliebftm@gmail.com"]

const handler = NextAuth({
  // Usa o adaptador do Postgres, que é mais direto
  adapter: DrizzleAdapter(db),
 
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("DADOS RECEBIDOS DO GITHUB:", { user, account, profile }) // LOG PARA DEBUG
      if (!user.email) {
        // eslint-disable-next-line no-console
        console.error("Usuário do GitHub sem email público.")
        return false
      }

      if (allowedEmails.includes(user.email)) {
        return true
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Tentativa de login com email não permitido: ${user.email}`)
        return false
      }
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  pages: {
    signIn: "/",
    error: "/api/auth/error",
  },
  secret: process.env.AUTH_SECRET,
  // debug: process.env.NODE_ENV === "development",
  debug: true,
})

export { handler as GET, handler as POST }
