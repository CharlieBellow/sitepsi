import { columns } from "@/app/(private)/scvd/posts/components/columns"
import { getData } from "../../../../../Utils/api"


import { DataTable } from "@/app/(private)/scvd/posts/components/DataTable"

export default async function ListPostsPage() {
  const posts = await getData()
 
  

  return (
    <div className="m-8">

    <div className="bg-ciano-3/10 rounded-lg shadow-xl  items-center justify-center p-4 flex flex-col gap-4">
     <DataTable columns={columns} data={posts} />
    </div>
    </div>
  )
}
