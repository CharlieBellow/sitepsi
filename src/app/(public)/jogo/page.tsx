import PainelGame from "@/app/(public)/jogo/components/PainelGame"

export default function gamePage() {
  return (
    <div className='bg-ciano-2/20 rounded-lg p-8 m-4 h-full'>
      <p className='bg-ciano-2/70 text-center lg:text-2xl font-bold p-4 rounded-lg'>
        O jogo consiste em tentar clicar nos emojis que representam sentimentos ruins, como
        tristeza, raiva e medo, enquanto evita clicar nos emojis de sentimentos bons, como alegria e
        amor. Quando você clica nos emojis ruins eles diminuem de tamanho. Quanto mais você clicar
        nos emojis ruins, mais pontos você ganha. É uma forma divertida de praticar a atenção plena
        e a regulação emocional.
      </p>
      <PainelGame />
    </div>
  )
}

// No final do jogo exibir a mensagem: Viu como foi difícil diminuir a tristeza? Com a ajuda de um
//       psicólogo, você consegue diminuir a tristeza muito mais rápido e de forma mais eficaz.
