import CardBlog from "@/components/CardBlog"
import Grid from "@/components/Grid"
import { mockPosts } from "../../Utils/Mocks"
import { Plus } from "lucide-react"
import Link from "next/link"


export default function Content() {
  return (
    <div className="grid grid-cols-1 pt-10 h-full my-5">
      <Grid title="Blog">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center gap-4">
          {mockPosts.map((post, index) => (
            index < 6 &&
            <Link key={post.id} href={`/post/${post.id}`} className="w-full">
          <CardBlog
            key={post.id}
            title={post.title}
            description={post.description}
          >
            {post.content}
          </CardBlog>
                </Link>
          ))}
          <span className="flex items-center gap-2 text-ciano-3 hover:underline-offset-1 hover:underline hover:text-ciano-1 cursor-pointer">

            <Plus className=" cursor-pointer" size={18} />
            veja mais
          </span>
       </div>

        
      </Grid>

      {/* <Grid title="Videos" /> */}
    </div>
  )
}
