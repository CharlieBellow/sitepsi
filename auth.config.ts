import type { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db"

const allowedEmails = ["charliebftm@gmail.com"]

// Exportamos apenas o objeto de configuração.
export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnScvd = nextUrl.pathname.startsWith("/scvd")
      if (isOnScvd) {
        return isLoggedIn
      }
      return true
    },
    // O tipo do 'user' será inferido corretamente agora que o módulo é encontrado.
    async signIn({ user }) {
      if (!user.email) return false
      return allowedEmails.includes(user.email)
    },
  },
  pages: {
    signIn: "/scvd",
  },
}