import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

// Certifique-se de que a variável DATABASE_URL está definida em seu .env.local (e em produção)
if (!process.env.DATABASE_URL) {

  // Em um ambiente real, você pode querer lançar um erro mais robusto ou parar o processo
}

const sql = neon(process.env.DATABASE_URL!); // '!' afirma que não será nulo


export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
  try {
    const postId = (await params).id
    const { title, description, content } = await request.json() // Pega o novo título do corpo da requisição

    if (!postId || typeof( title || description || content) === "undefined") {
      return NextResponse.json({ error: "Post ID and postData are required." }, { status: 400 })
    }

    // Lógica para atualizar o banco de dados com Neon
    await sql`
      UPDATE posts
      SET title = ${title},
      description = ${description},
      content = ${content}
      WHERE id = ${postId}
    `

    return NextResponse.json({ message: "Post updated successfully" }, { status: 200 })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error updating post:, ${error}`)
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
  try {
    const deleteId = (await params).id
    // Pega o novo título do corpo da requisição

    if (!deleteId) {
      return NextResponse.json({ error: "Post ID and postData are required." }, { status: 400 })
    }

    // Lógica para atualizar o banco de dados com Neon
    await sql`
      DELETE FROM posts
      WHERE id = ${deleteId}
    `

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error deleting post:, ${error}`)
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
