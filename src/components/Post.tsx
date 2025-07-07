import { mockPosts } from "../../Utils/Mocks";

type PostProps = {
  id: string;
}

export default function Post({ id }: PostProps) {
  
  const post = mockPosts.find((p) => p.id === id);

  
  if (!post) {
    return null; 
  }

  return (
    <div>
      <div>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div>{post.views}</div>
    </div>
  );
}
