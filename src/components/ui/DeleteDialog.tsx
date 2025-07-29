"use client";

import { useState } from "react";


import { Button } from "@/components/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";



type DeleteDialogProps = {
  isOpen: boolean;
  id: number;
  handleDialogItemOpenChange: (value: boolean) => void;
  handleDialogDelete: (id: number) => void;
  text?: string;
};

export function DeleteDialog({
  id,
  isOpen,
  handleDialogItemOpenChange,
  handleDialogDelete,
  text,
}: DeleteDialogProps) {
  const [isLoading, setIsLoading] = useState(false);



  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await handleDialogDelete(id);
      alert("Deletado com sucesso");
      handleDialogItemOpenChange(false);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogItemOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Excluir</DialogTitle>
            <DialogDescription>Tem certeza que deseja excluir? {text}</DialogDescription>
          </DialogHeader>
          <div className='m-0 bg-transparent p-0 shadow-none'>
            <div className='mt-4 p-0'>
              <div className='ml-auto flex w-2/4 flex-col items-center gap-3 lg:flex-row'>
                <DialogClose asChild>
                  <Button disabled={isLoading} className='bg-ciano-4 hover:bg-ciano-6 text-white'>
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type='submit' onClick={handleDelete}>
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
