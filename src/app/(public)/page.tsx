import CarouselImage from "@/src/app/(public)/components/CarouselImage"
import Depoiments from "@/src/app/(public)/components/Depoiments"
import CardService from "@/src/app/(public)/meusservicos/CardService"
import { BlogShow } from "@/src/components/BlogShow"
import Subtitle from "@/src/components/ui/Subtitle"
import Title from "@/src/components/ui/Title"
import Link from "next/link"
import { ansiedadeCards, consultorioCards, myBirthDate, socialMediaLinks, utilsInformations } from "../../../Utils/utilsInformations"
import charlie from "@/assets/charlie.jpg"

export default function Home() {
  return (
    <div className='relative overflow-hidden '>
      <div className='max-w-[56rem] mx-auto px-4 py-8'>
        <Title className='text-ciano-4'>
          Conheça as vantagens de se consultar com um psicólogo trans que te entende e é sensível às
          tuas questões
        </Title>
      </div>
      <div className='bg-ciano-1/30'>
        <div className='max-w-[76rem] mx-auto px-4 py-8'>
          <CardService
            title={"Boas vindas!"}
            description={`
          Olá, eu sou o Charlie, tenho ${utilsInformations.age.getAge(myBirthDate)} anos, sou Psicólogo e Mestre em Psicologia pela UFAL e me identifico com homem trans. Nos meus atendimentos, tenho percebido que muitas vezes, as pessoas enfrentam momentos de angústia em suas vidas que as paralisam e dificultam suas reações. Ou podem estar passando por grandes mudanças que requerem delas muita autorregulação e resiliência. Dessa forma, não conseguem lidar sozinhas com as adversidades da vida familiar, pessoal ou profissional. Se você está passando por um momento de sofrimento, ansiedade, insegurança, tristeza, dificuldade nos relacionamentos familiares ou até mesmo uma grande mudança ou perda, eu posso te ajudar. Saiba que todo sofrimento importa e precisa ser trabalhado!

          Na minha atuação clínica, priorizo atender pessoas que sofrem com ansiedade e pessoas com demandas relativas a relacionamentos, problemas familiares ou demandas de sexualidade e identidade de gênero. Você pode me encaminhar uma mensagem via WhatsApp para sanar dúvidas, seja em quesito de novos horários ou valores da sessão. Aguardo seu contato.
          `}
            imageSrc={charlie}
            altText={"Foto de charlie"}
            priority={true} 
            fetchPriority="high"
          />
        </div>
      </div>
      <BlogShow />
      <div className='text-center   '>
        <Subtitle>
          Se você entrou aqui porquê queria saber mais sobre ansiedade, veja esses cads que preparei
          pra você!
        </Subtitle>
        <CarouselImage images={ansiedadeCards} />
      </div>
      <div className='text-center  px-4 py-8 space-y-8'>
        <p>
          Veja alguns depoimentos de quem já se consultou comigo. E se quiser conhecer um pouco mais
          sobre meu trabalho, visite meu{" "}
          <Link
            href={socialMediaLinks[1].href}
            className='text-ciano-4 hover:underline-offset-1 hover:underline'
          >
            {socialMediaLinks[1].label}
          </Link>
          .
        </p>
        <Depoiments />
        <p className='text-center'>
          Por questões de preservação de sigilo, o nome das pessoas foi substituído pelas iniciais.
        </p>
      </div>
      <div className='text-center   '>
        <Subtitle>Fotos do cosultório</Subtitle>
        <CarouselImage images={consultorioCards} />
      </div>
      <div className='max-w-[76rem] mx-auto px-4 py-8 items-center'>
        <Subtitle>
          Ainda está na dúvida se terapia é pra você? Veja essa lista com{" "}
          <Link href='./post/13' className='text-ciano-4 hover:underline-offset-1 hover:underline'>
            10 crenças que te impedem de fazer terapia...
          </Link>
        </Subtitle>
      </div>
    </div>
  )
}
