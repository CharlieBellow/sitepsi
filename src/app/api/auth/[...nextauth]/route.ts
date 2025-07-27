import NextAuth from "next-auth"

import { neon } from "@neondatabase/serverless"

import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"

// Cria a "piscina" de conexões com o banco de dados

const handler = NextAuth({
  // Usa o adaptador do Postgres, que é mais direto

  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const sql = neon(process.env.DATABASE_URL!)

        try {
          const userResult = await sql`SELECT * FROM "User" WHERE email = ${credentials.email}`

          const user = userResult[0]
          if (!user) {
            return null
          }

          const passwordMatch = await bcrypt.compare(credentials.password, user.password)

          if (passwordMatch) {
            // Retorna o objeto do usuário para o NextAuth, sem a senha
            return { id: user.id, name: user.name, email: user.email }
          } else {
            // Senha incorreta
            return null
          }
        } catch (error) {
          // eslint-disable-next-line no-console  
          console.error("Erro ao conectar ao banco de dados:", error)
          return null
        }

        // 1. Encontrar o usuário no banco de dados
        // Usando a sintaxe direta do `pg`
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  // debug: true
})

export { handler as GET, handler as POST }
