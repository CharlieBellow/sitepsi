"use client"

import { DataTable } from "@/src/app/(private)/scvd/(pages)/posts/components/DataTable"
import { columns } from "@/src/app/(private)/scvd/(pages)/posts/components/columns"
import { Post } from "../../../../../../../Utils/Types/types"
type TableProps = {
  posts: Post[]
}

export default function ListPostsPage({ posts }: TableProps) {
  return (
    <div className=' rounded-lg shadow-xl w-3/4 p-4 flex flex-col gap-4 mt-8'>
      <DataTable columns={columns} data={posts} />
    </div>
  )
}
