import Title from "@/src/components/ui/Title"
import Link from "next/link"
import { getNeonData } from "../../../../Utils/getData"

export default async function blog() {
  const posts = await getNeonData()
  return (
    <div className='flex flex-col justify-center items-center p-4 w-full'>
      <Title className=' text-ciano-5/70'>Lista de Publicações</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <Link key={post.id} href={`../post/${post.id}`} className='w-full'>
            <div
              key={post.id}
              className='border p-4 rounded-lg shadow-md bg-ciano-3/20 hover:bg-ciano-2/20 transition-colors duration-300'
            >
              <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
              <p className='text-gray-700 mb-2'>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
