"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export function Login() {
  const handleGitHubLogin = () => {
    signIn("github", { callbackUrl: "/scvd/posts" })
  }

  return (
    <div className='bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white h-screen flex flex-col items-center justify-center p-4'>
      <div className='flex flex-col items-center justify-center  p-4 bg-ciano-5/50 rounded-lg shadow-xl w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center'>Login</h1>

        <Button type='submit' className='mt-4 text-ciano-6' onClick={handleGitHubLogin}>
          Entrar com GitHub
        </Button>
      </div>
    </div>
  )
}
