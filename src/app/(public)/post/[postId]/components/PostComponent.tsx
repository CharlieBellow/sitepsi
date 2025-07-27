import { Post } from "../../../../../../Utils/Types/types"

export default function PostComponent({
  post,
}: {
  post: Pick<Post, "title" | "content" | "views">
}) {
  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <div
        className='prose max-w-none'
        dangerouslySetInnerHTML={{ __html: post.content as string }}
      />
      <div className='text-sm text-ciano-6/75'>Views: {post.views}</div>
    </>
  )
}
