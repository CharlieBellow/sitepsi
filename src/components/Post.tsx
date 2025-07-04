import { mockPosts } from "../../Utils/Mocks";

type PostProps = {
  id: string;
}

export default function Post({ id }: PostProps) {
  
  mockPosts.forEach((post) => {
    if (post.id === id) {
      return (
       <div>
       <div>{ post.title}</div>
       <div>{ post.content}</div>
       <div>{ post.views}</div>
       </div>
  )
    }
  });

  
}
