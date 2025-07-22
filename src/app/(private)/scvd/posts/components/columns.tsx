"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Post } from "../../../../../../Utils/Types/types"
import Actions from "@/app/(private)/scvd/posts/components/Actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return row.getValue("id")
    }
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return row.getValue("title")
    }
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return row.getValue("description")
    }
  },
  {
    accessorKey: "content",
    header: "Conteúdo",
    cell: ({ row }) => {
      return row.getValue("content")
    }
  },
  {
    accessorKey: "",
    header: "Ações",
    cell: ({ row }) => {
      <Actions row={ row.original}
      />
    }
  },
]