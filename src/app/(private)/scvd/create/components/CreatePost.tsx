"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import ReactQuillEditor from "@/components/ui/QuillEditor/ReactQuillEditor"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import * as Yup from "yup"
import { postData } from "../../../../../../Utils/api"

const createSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  content: Yup.string()
    .min(100, "Pelo menos 100 caracteres")
    .required("O conteúdo é obrigatório"),
  description: Yup.string()
    .min(3, "Pelo menos 3 caracteres")
    .required("O descrição é obrigatório"),
})

type CreateFormValues = Yup.InferType<typeof createSchema>

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateFormValues>({
    defaultValues: { title: "", content: "", description: "" },
    resolver: yupResolver(createSchema),
  })

  const onSubmit = async (data: CreateFormValues) => {
    await postData(data)

    reset(data)
  }

  return (
    <div className="flex flex-col items-center justify-center  p-4 bg-ciano-3/10 rounded-lg shadow-xl w-1/2">
      <h1 className="text-2xl font-bold text-center">Criar Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full ">
        <Input
          label="Título"
          {...register("title")}
          errorMessage={errors?.title?.message}
        />

        <Controller
          name="content"
          control={control}
        
          render={({ field }) => (
            <ReactQuillEditor
              {...field}
              placeholder="Escreva o conteúdo do post aqui..."
              errorMessage={errors?.content?.message}
            />
          )}
        />

        <Input
          label="Descrição"
          {...register("description")}
          errorMessage={errors?.description?.message}
        />

        <Button type="submit" className="mt-4">
          Criar{" "}
        </Button>
      </form>
    </div>
  )
}
