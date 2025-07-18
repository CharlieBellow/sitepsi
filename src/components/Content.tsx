import CardBlog from "@/components/CardBlog";
import Grid from "@/components/Grid";

import { Plus } from "lucide-react";
import Link from "next/link";

import { getData } from "../../Utils/api";
import { Post } from "../../Utils/Types/types";

export async function Content() {
  const posts = await getData();

  return (
    <div className='grid grid-cols-1 pt-10 h-full my-5'>
      <Grid title='Blog'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center gap-4'>
          {posts.map(
            (post: Post, index: number) =>
              index < 6 && (
                <Link key={post.id} href={`/post/${post.id}`} className='w-full'>
                  <CardBlog key={post.id} title={post.title} description={post.description}>
                    {post.description}
                  </CardBlog>
                </Link>
              ),
          )}

          <span className='flex items-center  text-ciano-3 hover:underline-offset-1 hover:underline hover:text-ciano-1 cursor-pointer w-fit'>
            <Link href='/bloglist' className='flex items-center gap-2'>
              <Plus className=' cursor-pointer' size={18} />
              veja mais
            </Link>
          </span>
        </div>
      </Grid>

      {/* <Grid title="Videos" /> */}
    </div>
  );
}
