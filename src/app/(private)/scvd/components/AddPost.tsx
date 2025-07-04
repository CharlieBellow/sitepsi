"use client"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"



const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
})

type LoginFormValues = Yup.InferType<typeof loginSchema>


export default function AddPost() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormValues) => {
    data.email = ""
  }

  return (
    <div className='bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white h-screen'>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <Input label="fdfd" {...register("email")} errorMessage={errors?.email?.message} />
        <Input label="fdfd" {...register("password")} />
        
        <Button type="submit" className="mt-4">
          Entrar  </Button>
    </form>
    </div>
  )
}

