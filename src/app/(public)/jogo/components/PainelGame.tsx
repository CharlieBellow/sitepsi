"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

import alegria from "../../../../../assets/alegria.png"
import tristeza from "../../../../../assets/tristeza.png"
import { useIsClient } from "@/Utils/hooks/useIsClient"

export default function PainelGame() {
  const [tristezaPosition, setTristezaPosition] = useState({ x: 0, y: 0 })
  const [alegriaPosition, setAlegriaPosition] = useState({ x: 0, y: 0 })
const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const [tristezaCount, setTristezaCount] = useState(15)
  const [alegriaCount, setAlegriaCount] = useState(5)
  const [gameStatus, setGameStatus] = useState(0)
  const [statusMessage, setStatusMessage] = useState("")

  const [action, setAction] = useState<"aumentar" | "diminuir">("diminuir")

  const getRandomPosition = () => {
    return {
      x: Math.random() * 60 + 20,
      y: Math.random() * 40 + 20,
    }
  }
  const checkGameStatus = (tristeza: number, alegria: number) => {
    if (tristeza <= 12 && tristeza >= 7 && alegria <= 12 && alegria >= 7) {
      setGameStatus(1)
      setStatusMessage("Você ganhou! Parabéns! Você conseguiu equilibrar suas emoções!")
      return
    }
    if (tristeza > 20 || tristeza < 1) {
      setGameStatus(2)
      setStatusMessage(
        tristeza > 20
          ? "Você Teve uma overdose de Tristeza! Muito cortizol é prejudicial para o nosso corpo e mente. Que pena! Você perdeu o jogo."
          : "Você eliminou a tristeza, porém momentos tristes nos ensinam a lidar com a frustração e ser mais tolerantes. A tristeza é uma emoção importante, não acabe com ela. Que pena! Você perdeu o jogo.",
      )
      return
    }
    if (alegria > 20 || alegria < 1) {
      setGameStatus(2)
      setStatusMessage(
        alegria > 20
          ? "Você Teve uma overdose de Alegria! Muita dopamina também é prejudicial para o nosso corpo e mente. Os extremos e excessos nunca são bons. Que pena! Você perdeu o jogo. Busque um equilíbrio da próxima vez"
          : "Você baixou de mais a sua alegria. Tente fazer coisas que gosta para recuperar os ânimos.",
      )
      return
    }
  }

    useEffect(() => {
      // Agora window só é acessado no lado do cliente
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

  const isClient = useIsClient()

  const calculateSize = (count: number) => {
    if (!isClient) return 100 // valor padrão durante SSR

    const baseSize = Math.min(windowSize.width * 0.15, 100)
    return baseSize + count * 2
  }

  useEffect(() => {
    if (gameStatus !== 0) return
    const moveInterval = setInterval(() => {
      setTristezaPosition(getRandomPosition())
      setAlegriaPosition(getRandomPosition())
    }, 1000)

    return () => clearInterval(moveInterval)
  }, [gameStatus])

  const handleTristezaClick = () => {
    const incrementTristeza = action === "aumentar" ? tristezaCount + 1 : tristezaCount - 1
    setTristezaCount(incrementTristeza)
    checkGameStatus(incrementTristeza, alegriaCount)
  }
  const handleAlegriaClick = () => {
    const incrementAlegria = action === "aumentar" ? alegriaCount + 1 : alegriaCount - 1

    setAlegriaCount(incrementAlegria)
    checkGameStatus(tristezaCount, incrementAlegria)
  }

  // Substituir as constantes existentes
  const newSizeSadness = calculateSize(tristezaCount)
  const newSizeHappiness = calculateSize(alegriaCount)

  return (
    <div className='size-full h-[70vh] relative overflow-hidden '>
      <div className='flex justify-center gap-4 mb-4'>
        <button
          onClick={() => setAction("aumentar")}
          className={`px-4 py-2 rounded-lg ${
            action === "aumentar" ? "bg-yellow-400 text-ciano-5" : "bg-gray-200 text-gray-700"
          }`}
        >
          Aumentar
        </button>
        <button
          onClick={() => setAction("diminuir")}
          className={`px-4 py-2 rounded-lg ${
            action === "diminuir" ? "bg-ciano-4 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Diminuir
        </button>
      </div>

      <div className='text-ciano-5 font-bold text-center'>
        Ação selecionada: {action === "aumentar" ? "⬆️" : "⬇️"}
        <br />
        Placar: {`(Alegria: ${alegriaCount} / Tristeza: ${tristezaCount}).`}
        Você ganha ao deixar ambos os níveis entre 7 e 12.
      </div>

      <div
        style={{
          position: "absolute",
          top: `${tristezaPosition.y}%`,
          left: `${tristezaPosition.x}%`,
          transition: "all 1s ease-in-out",
        }}
      >
        <Image
          src={tristeza}
          alt='tristeza'
          width={newSizeSadness}
          height={150}
          onClick={handleTristezaClick}
          className='cursor-pointer'
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: `${alegriaPosition.y}%`,
          left: `${alegriaPosition.x}%`,
          transition: "all 1s ease-in-out",
        }}
      >
        <Image
          src={alegria}
          alt='alegria'
          width={newSizeHappiness}
          height={150}
          onClick={handleAlegriaClick}
          className='cursor-pointer'
        />
      </div>

      {gameStatus !== 0 && (
        <>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50'>
            <h1 className='text-2xl font-bold text-white mb-4'>
              {gameStatus === 1 ? "🎉 Vitória!" : "😔 Fim de Jogo"}
            </h1>
            <p className='mt-4 text-white text-center max-w-md px-4'>{statusMessage}</p>
            <button
              className='mt-8 px-6 py-3 bg-ciano-3 text-white rounded-lg hover:bg-ciano-4 transition-colors'
              onClick={() => {
                setTristezaCount(15)
                setAlegriaCount(5)
                setGameStatus(0)
                setStatusMessage("")
              }}
            >
              Jogar Novamente
            </button>
          </div>
        </>
      )}
    </div>
  )
}
