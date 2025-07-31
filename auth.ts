import { db } from "@/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const allowedEmails = ["charliebftm@gmail.com"]

export const config: NextAuth = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      return allowedEmails.includes(user.email)
    },
    // O callback authorized fica aqui nos callbacks, não fora!
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith("/scvd")) {
        return !!auth // Se está na área protegida, precisa estar logado
      }
      return true // Para outras páginas, acesso livre
    },
  },
  pages: {
    signIn: "/scvd",
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
