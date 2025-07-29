"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as Yup from "yup"

import { Button, Input } from "@/components/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog"

import ReactQuillEditor from "@/components/ui/QuillEditor/ReactQuillEditor"
import { Post } from "../../../../../../../Utils/Types/types"
import { updatePostApi } from "../../../../../../../Utils/getData"

type EditGroupDialogProps = {
  isOpen: boolean
  post: Pick<Post, "id" | "description" | "title" | "content">
  handleDialogItemOpenChange: (value: boolean) => void
}

const formSchema = Yup.object().shape({
  description: Yup.string().min(3, "Pelo menos 3 caracteres").required("Descrição é obrigatória"),
  title: Yup.string().required("Título é obrigatória"),
  content: Yup.string().min(100, "Pelo menos 100 caracteres").required("é obrigatório"),
})

type FormValues = Yup.InferType<typeof formSchema>

export function EditPostDialog({ post, isOpen, handleDialogItemOpenChange }: EditGroupDialogProps) {
  const { id, description, content, title } = post

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      description,
      title,
      content,
    },
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  })

  const handleCancel = () => {
    reset()
    handleDialogItemOpenChange(false)
  }

  const onSubmit = async ({ description, content, title }: FormValues) => {
    try {
      await updatePostApi({ id, description, content, title })

      handleDialogItemOpenChange(false)
    } catch (error) {
      alert(`"Erro ao editar o post: ${error} `)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogItemOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Post</DialogTitle>
            <DialogDescription>Tem certeza que deseja editar o post?</DialogDescription>
          </DialogHeader>
          <div className='m-0 bg-transparent p-0 shadow-none'>
            <div className='mt-8 p-0'>
              <form onSubmit={handleSubmit(onSubmit)} className="max-h-60 lg:max-h-full overflow-y-scroll lg:overflow-hidden">
                <Input
                  type='text'
                  label='Título'
                  {...register("title")}
                  errorMessage={errors.title?.message}
                />
                <Input
                  type='text'
                  label='Descrição'
                  {...register("description")}
                  errorMessage={errors.description?.message}
                />
                <Controller
                  name='content'
                  control={control}
                  render={({ field }) => (
                    <ReactQuillEditor
                      {...field}
                      placeholder='Escreva o conteúdo do post aqui...'
                      errorMessage={errors?.content?.message}
                    />
                  )}
                />
                <div className='ml-auto mt-10 flex w-full justify-end items-center gap-3 lg:flex-row'>
                  <Button disabled={isSubmitting} onClick={handleCancel} className="bg-ciano-4 hover:bg-ciano-6 text-white">
                    Cancelar
                  </Button>
                  <Button type='submit' disabled={isSubmitting || !isValid}>
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
