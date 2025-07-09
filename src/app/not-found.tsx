import Image from "next/image"
import Link from "next/link"
import tristeza from "../../assets/tristeza.png"
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-tl from-[#1C1E59] from-10% via-[#181753]  to-[#A3DDCB] to-90% text-white">
      <Image
        src={tristeza}
        alt="Página não encontrada"
        width={200}
        height={200}
        className="mb-6"
      />

      <h2 className="mb-4 text-4xl font-bold">404 - Página Não Encontrada</h2>
      <p className="mb-8 text-lg">
        Não foi possível encontrar o recurso solicitado.
      </p>
      <Link
        href="/"
        className="rounded bg-ciano-3 px-4 py-2 text-fundo transition-colors hover:bg-ciano-1"
      >
        Voltar para a Home
      </Link>
      <p className="flex flex-col items-center mt-8 gap-8">
        Clique aqui para jogar um jogo e diminuir sentimentos que te fazem mal!
        <Link
          href="/"
          className="rounded bg-ciano-3 px-4 py-2 text-fundo transition-colors hover:bg-ciano-1"
        >
          Jogo dos Sentimentos
          {/* 
              O jogo consiste em tentar clicar nos emojis que representam sentimentos ruins, como tristeza, raiva e medo, enquanto evita clicar nos emojis de sentimentos bons, como alegria e amor. Quanto mais rápido você clicar nos emojis ruins, mais pontos você ganha. Quando você clica nos emojis ruins eles diminuem de tamanho. É uma forma divertida de praticar a atenção plena e a regulação emocional.
              
              No final: Viu como foi difícil diminuir a tristeza? Com a ajuda de um psicólogo, você consegue diminuir a tristeza muito mais rápido e de forma mais eficaz.
              */}
        </Link>
      </p>
    </div>
  )
}
