import TablePosts from "@/app/(private)/scvd/(pages)/posts/components/TablePosts"
import { auth } from "../../../../../../auth"
import { redirect } from "next/navigation"
import { getNeonData } from "../../../../../../Utils/getData"

export default async function ListPostsPage() {
  const session = await auth()

  if (!session) {
    redirect("/scvd")
  }

  const posts = await getNeonData()

  return (
    <div className=' relative flex justify-center'>
      <TablePosts posts={posts} />
    </div>
  )
}
