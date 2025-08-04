import { neon } from "@neondatabase/serverless";
import { Post } from "./Types/types";


// app/actions.ts

export async function getNeonData() {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`select * from posts`;
  return data as Post[];
}
export async function getPostById(id: number) {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`select * from posts where id = ${id}` 
  if (data.length === 0) {
    // eslint-disable-next-line no-console
    // console.error(`Post with id ${id} not found`)
    throw new Error(`Post with id ${id} not found`)
  }
  return  data[0] as Post;
}


export async function updatePostApi(postData: { id: number; title: string, description: string, content: string }) {
  try {
    const response = await fetch(`/api/posts/${postData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: postData.title, description: postData.description, content: postData.content }),
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

export async function postPostApi(postData: { title: string, description: string, content: string }) {
  try {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: postData.title, description: postData.description, content: postData.content }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to post post via API.");
    }

    return await response.json(); // Ou apenas retornar true se não precisar de dados
  } catch (error) {
    alert(`Error calling post post API::, ${error}`);

    throw error; // Re-lança o erro para ser tratado no componente
  }
}

export async function deletePostApi( id: number ) {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete post via API.");
    }

    return true
  } catch (error) {
    alert(`Error calling delete post API::, ${error}`);

    throw error; // Re-lança o erro para ser tratado no componente
  }
}

