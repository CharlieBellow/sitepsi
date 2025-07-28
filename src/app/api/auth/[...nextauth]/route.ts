import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const allowedEmails = ["charliebftm@gmail.com"]

const handler = NextAuth({
  // O adapter está desligado para este teste final.
  // adapter: DrizzleAdapter(db),

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
      console.log("!!! TENTATIVA DE SIGNIN !!! Email do usuário:", user.email)

      if (!user.email) {
        console.error("Login rejeitado: Usuário do GitHub sem email público.")
        return false // Rejeita o login se não houver email
      }

      // LÓGICA CORRIGIDA:
      // Se o email estiver na lista, permita o login.
      if (allowedEmails.includes(user.email)) {
        console.log(`Login permitido para: ${user.email}`)
        return true // PERMITE o login
      } else {
        console.warn(`Login REJEITADO para email não permitido: ${user.email}`)
        return false // REJEITA o login
      }
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: true, // Força o debug em todos os ambientes
})

export { handler as GET, handler as POST }
