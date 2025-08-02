"use client"
import Image from "next/image"
import { useState } from "react"

import alegria from "../../../../../assets/alegria.png"
import tristeza from "../../../../../assets/tristeza.png"

export default function PainelGame() {
  const [tristezaCount, setTristezaCount] = useState(0)
  const [alegriaCount, setAlegriaCount] = useState(0)

  const handleTristezaClick = () => {
    setTristezaCount(tristezaCount + 1)
    if (tristezaCount >= 15) {
      alert("Você teve uma overdose de tristeza! Excesso de cortisol também é prejudicial para saúde mental. Lamento, você perdeu o jogo!")
    }
    if (tristezaCount == 16) {
      alert("Você ganhou! Parabéns! Você conseguiu diminuir a tristeza e aumentar a alegria!")
    }
    console.log(`Tristeza count: ${tristezaCount + 1}`)
  }
  const handleAlegriaClick = () => {
    setTristezaCount(tristezaCount + 1)
    setAlegriaCount(alegriaCount + 1)
    if (alegriaCount >= 18) {
      alert("Você teve uma overdose de alegria! Excesso de dopamina também é prejudicial para nossa saude mental. Lamento, você perdeu o jogo!")
      return
    }
     console.log(`Tristeza count: ${tristezaCount + 1}`)
    console.log(`Alegria count: ${alegriaCount + 1}`)
  }

  const newSizeSadness = 100 - (tristezaCount * 5)
  const newSizeHappiness = 10 + (tristezaCount * 5)
  return (
    <div className='size-full h-[70vh] relative overflow-hidden '>
      {newSizeSadness > 15 && (
        <Image
          src={tristeza}
          alt='tristeza'
          width={newSizeSadness}
          height={150}
          onClick={handleTristezaClick}
        />
      )}
      <Image
        src={alegria}
        alt='alegria'
        width={newSizeHappiness}
        height={150}
        onClick={handleAlegriaClick}
      />
    </div>
  )
}

// quando clicar na alegria a tristeza deve aumentar, se ela chegar a um tamanho muito alto, perde o jogo
// quando clicar na tristeza a alegria deve aumentar, se ela chegar a um tamanho muito alto, perde o jogo

// ganha quando a tristeza ta em < 10 e a alegria tá em < 20
// perde quando a tristeza tá em > 15 e a alegria tá em > 20 ou < 10
