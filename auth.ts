import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db"
import type { NextAuthConfig } from "next-auth"

const allowedEmails = ["charliebftm@gmail.com"]

// A configuração é definida separadamente para melhor organização e tipagem.
export const config: NextAuthConfig = {
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // O callback signIn continua aqui, ele é executado na tentativa de login.
    async signIn({ user }) {
      if (!user.email) return false
      return allowedEmails.includes(user.email)
    },

    // O callback authorized NÃO fica aqui.
  },
  // CORREÇÃO: O callback 'authorized' é uma propriedade de nível superior.
  // Ele é usado pelo middleware para proteger as rotas.
  authorized({ auth, request: { nextUrl } }) {
    const isLoggedIn = !!auth?.user
    const isOnScvd = nextUrl.pathname.startsWith("/scvd")

    if (isOnScvd) {
      return isLoggedIn // Se estiver na área protegida, o acesso depende de estar logado.
    }
    return true // Para todas as outras páginas, o acesso é permitido.
  },
  pages: {
    signIn: "/scvd", // Redireciona para a sua página de login se o 'authorized' retornar false.
  },
}

// Exportamos os handlers, auth, etc., a partir da configuração.
export const { handlers, auth, signIn, signOut } = NextAuth(config)
