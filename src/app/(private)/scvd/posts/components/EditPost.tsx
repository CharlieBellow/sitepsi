"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import { Plus } from "lucide-react"

import { yupResolver } from "@hookform/resolvers/yup"
import { updatePostApi } from "../../../../../../Utils/api"

const editPostSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
})

type EditPostFormValues = Yup.InferType<typeof editPostSchema>
export function EditPostDialog(post: {
  id: number
  title: string
  description: string
  content: string
  views: number
}) {
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    defaultValues: { title: "" },
    resolver: yupResolver(editPostSchema),
  })

  // const onSubmit = async (data: EditPostFormValues) => {
  //   await editNeonData({ ...post, title: data.title! });
  //   return
  // };

  const onSubmit = async (data: EditPostFormValues) => {
    try {
      await updatePostApi({
        id: post.id,
        title: data.title,
        description: post.description,
        content: post.content,
      })

      // Opcional: Fechar o dialog após o sucesso
      // document.getElementById('closeDialogButton')?.click(); // Uma forma de fechar, ou usar um state
    } catch (error) {
      alert(`Error submitting form:, ${error}`)
      // Opcional: Mostrar uma mensagem de erro para o usuário
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Editar post</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <form onSubmit={handleSubmit(onSubmit)} className='grid flex-1 gap-2'>
            <Input
              label='title'
              type='text'
              {...register("title")}
              errorMessage={errors?.title?.message}
            />
            <DialogFooter className='sm:justify-start'>
              <DialogClose asChild>
                <Button type='submit' variant='secondary'>
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
