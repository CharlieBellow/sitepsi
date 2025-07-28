// filepath: /home/charlie/Documentos/github/sitepsi/next-auth.d.ts
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Retornado pela função `useSession`, `getSession` e recebido como uma prop para o provedor `SessionProvider`
   */
  interface Session {
    user: {
      /** O ID do usuário no banco de dados. */
      id: string
    } & DefaultSession["user"] // Preserva as propriedades padrão: name, email, image
  }
}
