import PostComponent from "@/app/(public)/post/[postId]/components/PostComponent"
import { getPostById } from "../../../../../Utils/api"

export default async function pagePost({ params }: { params: { postId: string } }) {
  const postId = (await params).postId

  const post = await getPostById(Number(postId))

  return (
    <div className='p-12 flex  flex-col w-full  items-center'>
      <div className="w-full max-w-4xl">{post && <PostComponent post={post} />}</div>
    </div>
  )
}
