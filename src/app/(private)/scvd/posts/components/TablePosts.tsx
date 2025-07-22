"use client";

import { DataTable } from "@/app/(private)/scvd/posts/components/DataTable";
import { columns } from "@/app/(private)/scvd/posts/components/columns";
import { Post } from "../../../../../../Utils/Types/types";
type TableProps = {
  posts: Post[];
};

export default function ListPostsPage({ posts }: TableProps) {

  
  return (
    <div className='bg-ciano-3/10 rounded-lg shadow-xl w-1/2 items-center justify-center p-4 flex flex-col gap-4'>
      <DataTable columns={columns} data={posts} />
    </div>
  );
}
