"use client"
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { useRouter } from "next/navigation";
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
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  })

  // const onSubmit = (data: LoginFormValues) => {
  //   signIn("github", { callbackUrl: "/scvd/posts" });
  //   reset(data)
  // }

const router = useRouter();
 
  const onSubmit = async (data: LoginFormValues) => {
    const result = await signIn("credentials", {
      redirect: false, // Importante: não redireciona a página automaticamente
      email: data.email,
      password: data.password,
    });


    if (result?.error) {
      // Se houver um erro (ex: senha errada), ele virá aqui
      alert(result.error);
      // Você pode mostrar uma mensagem de erro para o usuário aqui
      alert("Email ou senha inválidos!"); // Exemplo simples
    } else {
      // Se o login for bem-sucedido, result.error será null
      // Redireciona para a página de posts
      router.push("/scvd/posts");
    }
  };
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

          <Button  type="submit" className="mt-4 text-ciano-6" >
          Entrar
        </Button>
      </form>
          </div> 
    </div>
  )
}
