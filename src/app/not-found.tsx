import Image from "next/image"
import Link from "next/link"
import tristeza from "../../assets/tristeza.png"
export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white'>
      <Image src={tristeza} alt='Página não encontrada' width={200} height={200} className='mb-6' />

      <h2 className='mb-4 text-4xl font-bold'>404 - Página Não Encontrada</h2>
      <p className='mb-8 text-lg'>
        Poxa, que chato... não foi possível encontrar o recurso solicitado.
      </p>
      <div className='flex flex-col items-center mt-8 gap-8'>
        <p>
          Relaxe... Você pode clicar aqui para jogar um jogo e diminuir sentimentos que te fazem
          mal!
        </p>
        <Link
          href='/game'
          className='rounded bg-ciano-3 px-4 py-2 text-fundo transition-colors hover:bg-ciano-1'
        >
          Jogo dos Sentimentos
        </Link>
        <p>Ou se preferir, pode voltar para a página inicial.</p>
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
