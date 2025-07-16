import { mockPosts } from "../../../../../Utils/Mocks";

export default function pagePost({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const post = mockPosts.find((mock) => mock.id === params.postId);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='p-12 flex flex-col w-full justify-center items-center'>
      <div>
        <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
        <p className='mb-4'>{post.content}</p>
        <div className='text-sm text-ciano-6/75'>Views: {post.views}</div>
      </div>
    </div>
  );
}
