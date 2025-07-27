"use client"

import Actions from "@/app/(private)/scvd/posts/components/Actions"
import { ColumnDef } from "@tanstack/react-table"
import { Post } from "../../../../../../Utils/Types/types"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return row.getValue("id")
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className='w-96 truncate line-clamp-1 '>{row.getValue("title")}</div>
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className='line-clamp-2 max-w-none'>{row.getValue("description")}</div>
    },
  },
  {
    accessorKey: "content",
    header: "Conteúdo",
    cell: ({ row }) => {
      const value = row.getValue("content")
      return (
        <div
          className='prose line-clamp-2 max-w-none'
          dangerouslySetInnerHTML={{ __html: value as string }}
        />
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Actions
          key={row.original.id}
          id={row.original.id}
          content={row.original.content}
          description={row.original.description}
          title={row.original.title}
        />
      )
    },
  },
]
