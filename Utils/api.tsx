

import { Post } from "./Types/types"
import { neon } from "@neondatabase/serverless";

const baseURL = 'http://localhost:3001/'

/* const baseURL = "https://script.google.com/macros/s/AKfycbwNAG8EYCqXav99Pp2Ye9tZiE6XTe9MJeE-aZ-wabqQgZn3DUiT3xld0yoYBnKMcBx1FA/exec"
*/

// AKfycbx7fbQvNlp-jq8U4-Szt0wND1pjIdzhRL0OpRw6D-mXD73yvFxmggNCm3FXX1PgQET0pQ

// const baseURL = 'https://script.google.com/macros/s/AKfycbw9s0TZp7B71Cm7oP_RGh6BttZeq32Pdb0ufKZZ5LO9P0vxvC1OuJ3Za5TDnxxitrscFQ/exec'

// app/actions.ts


export async function getNeonData() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`select * from posts`;
    return data;
}
// export async function editNeonData(data: {id: string, title: string, description: string, views: number}) {
//     const sql = neon(process.env.DATABASE_URL!);
//     const editData = await sql`update posts set title = ${data.title} where id = ${data.id}`;
//     // const editData = await sql`insert   into posts (title) values (${data.title}) where id = ${data.id}`;
//     return editData;
// }

export async function updatePostApi(postData: { id: number; title: string }) {
  try {
    const response = await fetch(`/api/posts/${postData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: postData.title }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update post via API.");
    }

    return await response.json(); // Ou apenas retornar true se não precisar de dados
  } catch (error) {
    alert(`Error calling update post API::, ${error}`);

    throw error; // Re-lança o erro para ser tratado no componente
  }
}




export async function getData() : Promise<Post[]> {
  const data = await fetch(`${baseURL}posts`)

  const posts = await data.json()

  return posts
  
}
export async function getPost(id: string) {
  const data = await fetch(`${baseURL}?id=${id}`)

  const post = await data.json()

  
  return (post)
  
  
}


type PostData = Post 

export async function postData(post: PostData) {
  const data = await fetch(`${baseURL}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'create',
      data: {
        ...post
      }
    })
  }
  )
   if (!data.ok) {
    // Lança um erro para que o chamador possa tratar a falha.
    throw new Error(`Falha ao criar post, status: ${data.status}`);
  }

  // Retorna a resposta JSON se houver, ou a resposta crua.
  const contentType = data.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return data.json();
  }

  return data;

}
export async function updateData(post: Post) {
  const data = await fetch(`${baseURL}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'update',
      data: {
        ...post
      }
    })
  }
  )
  return(data)
}

  export async function deleteData(id: string) {
    const data = await fetch(`${baseURL}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'delete',
        data: {
          id
        }
      })
    }
    )

    return(data)
  }
    

