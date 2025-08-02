export type Post = {
  id: number
  title: string
  description: string
  content: string
  views: number
  comments: Comment[]
  // tags: string[]
}
export type Comment = {
  id: string
  content: string
  author: string
  date: string
}
export type User = {
  id: string
  username: string
  email: string
  password: string
}
