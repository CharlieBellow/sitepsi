
import { Post } from "./Types/types"

// const baseURL = 'http://localhost:3001/'

const baseURL = "https://script.google.com/macros/s/AKfycbwNAG8EYCqXav99Pp2Ye9tZiE6XTe9MJeE-aZ-wabqQgZn3DUiT3xld0yoYBnKMcBx1FA/exec"

export async function getData() {
  const data = await fetch(`${baseURL}`)

  const posts = await data.json()

  
  return (posts)
  
}
export async function getPost(id: string) {
  const data = await fetch(`${baseURL}?id=${id}`)

  const posts = await data.json()

  
  return (posts.saida)
  
  
}


type PostData = Omit<Post, 'id' | 'views' | 'comments'> 

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
  return (data)

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
    

