"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination"
import { Table } from "@tanstack/react-table"

interface PaginationTableProps<TData> {
  table: Table<TData>
}

export default function PaginationTable<TData>({ table }: PaginationTableProps<TData>) {
  return (
    <div className='flex items-center justify-between px-2 mt-4 flex-col md:flex-row'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} de{" "}
        {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
      </div>
      <div className='flex flex-col justify-center md:flex-row items-center '>
        <div className='flex items-center space-x-2 flex-col md:flex-row'>
          <p className='text-sm font-medium'>Página</p>
          <p className=' w-11 text-sm font-medium'>
            {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
          </p>
        </div>
        <Pagination>
          <PaginationContent className='flex flex-col md:flex-row'>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
