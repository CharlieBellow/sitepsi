import CreatePost from "@/src/app/(private)/scvd/(pages)/create/components/CreatePost"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function CreatePage() {
  const session = await getServerSession()
  if (!session) {
    redirect("/scvd")
  }
  return (
    <div className='flex items-center justify-center h-screen m-4 '>
      <CreatePost />
    </div>
  )
}
