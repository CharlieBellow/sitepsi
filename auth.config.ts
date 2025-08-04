import { db } from "@/src/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import type { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"

const allowedEmails = ["charliebftm@gmail.com"]

// Exportamos apenas o objeto de configuração.
export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          // Solicitando apenas o acesso necessário
          scope: "read:user user:email",
        },
      },
    }),
  ],
  callbacks: {
    // O tipo do 'user' será inferido corretamente agora que o módulo é encontrado.
    async signIn({ user }) {
      if (!user.email) return false
      return allowedEmails.includes(user.email)
    },
    async session({ session, token }) {
      if (session.user) {
        // Adicionando o ID do usuário à sessão
        session.user.id = token.sub!
      }
      return session
    },
  },
  pages: {
    signIn: "/scvd",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
}
