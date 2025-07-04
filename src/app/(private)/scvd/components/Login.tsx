"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
})

type LoginFormValues = Yup.InferType<typeof loginSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    data.email = ""
  }

  return (
    <div className="bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center  p-4 bg-ciano-5/50 rounded-lg shadow-xl w-full max-w-md">
             <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="email"
          type="email"
          {...register("email")}
          errorMessage={errors?.email?.message}
          />
        <Input
          type="password" label="Senha" {...register("password")} errorMessage={errors?.password?.message}/>

      </form>
        <Button type="submit" className="mt-4 text-ciano-6" >
          Entrar
        </Button>
          </div> 
    </div>
  )
}
