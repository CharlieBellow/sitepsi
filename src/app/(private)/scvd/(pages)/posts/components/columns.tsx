"use client"

import Actions from "@/src/app/(private)/scvd/(pages)/posts/components/Actions"
import { ColumnDef } from "@tanstack/react-table"
import { Post } from "../../../../../../../Utils/Types/types"

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
      return (
        <div className='max-w-64 truncate text-sm  hover:overflow-visible hover:whitespace-normal hover:break-words hover:max-w-none hover:line-clamp-none hover:bg-gray-100  p-2 rounded-md transition-all duration-200 ease-in-out overflow-hidden text-ellipsis     hover:text-ellipsis hover:text-sm hover:transition-all hover:duration-200 hover:ease-in-out hover:p-2 hover:rounded-md line-clamp-2'>
          {row.getValue("title")}
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className='max-w-64 truncate text-sm  hover:overflow-visible hover:whitespace-normal hover:break-words hover:max-w-none hover:line-clamp-none hover:bg-gray-100 p-2 rounded-md transition-all duration-200 ease-in-out overflow-hidden text-ellipsis hover:text-ellipsis hover:text-sm hover:transition-all hover:duration-200 hover:ease-in-out hover:p-2 hover:rounded-md line-clamp-2'>
          {row.getValue("description")}
        </div>
      )
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
