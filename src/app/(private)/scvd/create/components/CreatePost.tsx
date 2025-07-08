"use client"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import ReactQuillEditor from "@/components/ui/QuillEditor/ReactQuillEditor"

const createSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  content: Yup.string()
    .min(100, "Pelo menos 100 caracteres")
    .required("O conteúdo é obrigatório"),
})

type CreateFormValues = Yup.InferType<typeof createSchema>


export default function CreatePost() {

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<CreateFormValues>({
    defaultValues: { title: "", content: "" },
  resolver: yupResolver(createSchema)
  })

  const onSubmit = (data: CreateFormValues) => {
    
    console.log(data);
    
  
reset(data)
  }

  return (
    <div className='bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white h-screen flex flex-col items-center justify-center p-4'>
      <div className="flex flex-col items-center justify-center  p-4 bg-ciano-5/50 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Criar Post</h1>
      <form onSubmit={ handleSubmit(onSubmit)} className="space-y-4 w-full ">
        <Input label="Título" {...register("title")} errorMessage={errors?.title?.message} />
       
        
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
          
        <Button type="submit" className="mt-4">
          Criar  </Button>
    </form>
      </div>
    </div>
  )
}

