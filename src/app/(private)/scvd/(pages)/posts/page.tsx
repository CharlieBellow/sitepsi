import TablePosts from "@/src/app/(private)/scvd/(pages)/posts/components/TablePosts"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { getNeonData } from "../../../../../../Utils/getData"

export default async function ListPostsPage() {
  const session = await getServerSession()

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
