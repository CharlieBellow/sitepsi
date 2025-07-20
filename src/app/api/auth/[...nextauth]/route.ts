import NextAuth from "next-auth";
import { Pool } from "pg";
import  PgAdapter  from "@auth/pg-adapter"; 
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Cria a "piscina" de conexões com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const handler = NextAuth({
  // Usa o adaptador do Postgres, que é mais direto
  adapter: PgAdapter(pool), // MUDANÇA AQUI
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
          throw new Error("Por favor, forneça seu email e senha.");
        }

        // 1. Encontrar o usuário no banco de dados
        // Usando a sintaxe direta do `pg`
        const userQuery = await pool.query('SELECT * FROM "User" WHERE email = $1', [
          credentials.email,
        ]);

        const user = userQuery.rows[0];

        if (!user || !user.hashedPassword) {
          // Não jogue um erro aqui, apenas retorne null para o NextAuth tratar como "usuário ou senha inválidos"
          return null;
        }

        // 2. Verificar se a senha está correta
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

        if (!passwordMatch) {
          return null; // Senha incorreta
        }

        // 3. Se tudo estiver certo, retorne o objeto do usuário
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  // debug: true
});

export { handler as GET, handler as POST };
