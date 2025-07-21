import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

// Certifique-se de que a variável DATABASE_URL está definida em seu .env.local (e em produção)
if (!process.env.DATABASE_URL) {

  // Em um ambiente real, você pode querer lançar um erro mais robusto ou parar o processo
}

const sql = neon(process.env.DATABASE_URL!); // '!' afirma que não será nulo

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {


  try {
    const postId = params.id;
    const { title } = await request.json(); // Pega o novo título do corpo da requisição

 

    if (!postId || typeof title === "undefined") {
   
      return NextResponse.json({ error: "Post ID and title are required." }, { status: 400 });
    }



    // Lógica para atualizar o banco de dados com Neon
    await sql`
      UPDATE posts
      SET title = ${title}
      WHERE id = ${postId}
    `;

   

    return NextResponse.json({ message: "Post updated successfully" }, { status: 200 });
  } catch (error) {
    alert(`Error updating post:, ${error}`);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}
