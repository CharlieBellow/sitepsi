import TablePosts from "@/app/(private)/scvd/posts/components/TablePosts"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { getNeonData } from "../../../../../Utils/getData"

export default async function ListPostsPage() {
  const session = await getServerSession()

  const posts = await getNeonData()

  if (!session) redirect("/scvd")

  return <TablePosts posts={posts} />
}
