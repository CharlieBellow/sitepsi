"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { List, Pencil, Trash } from "lucide-react"
import { Post } from "../../../../../../Utils/Types/types"
import { useCallback, useState } from "react"
import { EditPostDialog } from "@/app/(private)/scvd/posts/components/EditPostDialog"
import { DeleteDialog } from "@/components/ui/DeleteDialog"
import { deletePostApi } from "../../../../../../Utils/api"
type DataTableAction =  Pick<Post, "id" | "title" | "description" | "content"> 
export default function Actions({ id, content, description, title }: DataTableAction) {

  
    const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);

  const hadleRemovePost = async (id: number) => {
    try {
      await deletePostApi(id);
    } catch (error) {
      alert(`Error submitting form:, ${error}`);
    }
  }

  const handleEditDialogOpenChange = useCallback(
    (value?: boolean) => {
      if (dropdownMenuIsOpen) {
        setDropdownMenuIsOpen(false);
      }
      setEditDialogIsOpen((prev) => (value ? value : !prev));
    },
    [dropdownMenuIsOpen],
  );
  

  const handleDeleteDialogOpenChange = useCallback(
    (value?: boolean) => {
      if (dropdownMenuIsOpen) {
        setDropdownMenuIsOpen(false);
      }
      setDeleteDialogIsOpen((prev) => (value ? value : !prev));
    },
    [dropdownMenuIsOpen],
  );

  return (
    <div className='flex w-full justify-end pr-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button  size='sm' className='w-fit text-ciano-4 hover:text-ciano-1'>
            <List className='size-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => handleEditDialogOpenChange()}
              className='flex items-center gap-1'
            >
              <Pencil size={16} />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleDeleteDialogOpenChange()}
              className='flex items-center gap-1'
            >
              <Trash size={16} />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditPostDialog
        post={{ id, description, title, content }}
        isOpen={editDialogIsOpen}
        handleDialogItemOpenChange={handleEditDialogOpenChange}
      />
      <DeleteDialog
        id={id}
        isOpen={deleteDialogIsOpen}
        handleDialogItemOpenChange={handleDeleteDialogOpenChange}
        handleDialogDelete={hadleRemovePost}
        text='Essa ação não poderá ser desfeita. Remova todos os Sub Grupos e serviços antes de deletar o Grupo.'
      />
    </div>
  );
}
