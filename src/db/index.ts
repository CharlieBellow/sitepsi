// import { neon } from "@neondatabase/serverless"
// import { drizzle } from "drizzle-orm/neon-http"
// import * as schema from "./schema"
// // LOG DE DEBUG 1: Verificar se a variável de ambiente está sendo lida.
// // eslint-disable no-console
// console.log("Tentando conectar ao banco de dados com a URL:", process.env.DATABASE_URL ? "URL Encontrada" : "URL NÃO ENCONTRADA");
// let sql
// try {
//   sql = neon(process.env.DATABASE_URL!)
//   // eslint-disable no-console
//   console.log("Conexão com o Neon (SQL object) criada com sucesso.")
// } catch (error) {
//   // eslint-disable no-console
//   console.error("ERRO CRÍTICO AO CRIAR A CONEXÃO COM O NEON:", error)
//   throw new Error("Não foi possível conectar ao banco de dados.")
// }

// export const db = drizzle(sql, { schema })
export const db = {}