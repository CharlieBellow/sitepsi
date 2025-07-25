import { neon } from "@neondatabase/serverless"
import { NextRequest, NextResponse } from "next/server"

// Certifique-se de que a variável DATABASE_URL está definida em seu .env.local (e em produção)
if (!process.env.DATABASE_URL) {
  // Em um ambiente real, você pode querer lançar um erro mais robusto ou parar o processo
}

const sql = neon(process.env.DATABASE_URL!) // '!' afirma que não será nulo

export async function POST(request: NextRequest) {
  try {
    const { title, description, content } = await request.json() // Pega o novo título do corpo da requisição

    if (!title || !description || !content) {
      return NextResponse.json({ error: "Post ID and title are required." }, { status: 400 })
    }

    // Lógica para postar o banco de dados com Neon
    await sql`
      insert into posts (title, description, content)
   values (${title}, ${description}, ${content})
    
    `

    return NextResponse.json({ message: "Post posted successfully" }, { status: 200 })
  } catch (error) {
    console.error(`Error posting post:, ${error}`)
    return NextResponse.json({ error: "Failed to post post" }, { status: 500 })
  }
}
