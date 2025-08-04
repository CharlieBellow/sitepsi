import { db } from "@/src/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const allowedEmails = ["charliebftm@gmail.com"]

const handler = NextAuth({
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
      // Este é o único log que importa agora.

      if (!user.email) {
        return false // Rejeita o login se não houver email
      }

      // LÓGICA CORRIGIDA:
      // Se o email estiver na lista, permita o login.
      if (allowedEmails.includes(user.email)) {
        return true // PERMITE o login
      } else {
        return false // REJEITA o login
      }
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: true, // Força o debug em todos os ambientes
})

export { handler as GET, handler as POST }
