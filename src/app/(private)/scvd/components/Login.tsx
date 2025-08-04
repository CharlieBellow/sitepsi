"use client"
import { Button } from "@/src/components/ui/button"
import { signIn } from "next-auth/react"
import Link from "next/link"

export function Login() {
  const handleGitHubLogin = () => {
    signIn("github", { callbackUrl: "/scvd/posts" })
  }

  return (
    <div className='bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white h-screen flex flex-col items-center justify-center p-4'>
      <div className='flex flex-col items-center justify-center  p-4 bg-ciano-5/50 rounded-lg shadow-xl w-full max-w-md gap-6'>
        <h1 className='text-2xl font-bold text-center'>Login</h1>

        <Button type='submit' className='mt-4 text-ciano-6' onClick={handleGitHubLogin}>
          Entrar com GitHub
        </Button>
        <Link
          href='/'
          className='rounded bg-ciano-3 px-4 py-2 text-fundo transition-colors hover:bg-ciano-1'
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  )
}
