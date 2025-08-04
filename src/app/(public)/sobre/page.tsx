import SocialMediaButtons from "@/src/components/ui/SocialMediaButtons"
import Subtitle from "@/src/components/ui/Subtitle"
import Title from "@/src/components/ui/Title"
import Image from "next/image"
import Link from "next/link"
import charlie from "@/assets/charlie.jpg"
import {
  myBirthDate,
  socialMediaLinks,
  utilsInformations,
} from "@/Utils/utilsInformations"
export default function aboutMePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 m-8 md:m-24'>
      <Title className='text-ciano-5'>A pessoa por trás do profissional</Title>
      <div className='flex lg:flex-row flex-col items-center gap-4'>
        <Image src={charlie} alt='Imagem de Charlie' width={200} height={200} />
        <div>
          <Subtitle>Sobre Mim</Subtitle>
          <p className='text-base lg:text-xl text-justify'>
            Eu sou o Charlie, tenho {utilsInformations.age.getAge(myBirthDate)} anos e além da
            psicologia minhas outras paixões são os aprender coisas novas, a tecnologia, cozinhar,
            receber meus amigos e jogar um Play. Quem me conhece me define como workaholic. Sou
            muito engraçado e expressivo quando tenho intimidade, mas pra gravar vídeos, sou tímido
            e quando se trata de trabalho, eu fico sério... mas não se preocupe, eu não mordo! 😄
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-screen lg:items-center bg-ciano-1/20 py-8 '>
        <div className='px-14'>
          <Subtitle>Currículo</Subtitle>
          <ul className='list-disc  lg:pl-12 text-base lg:text-xl'>
            <li>
              Mestre em Psicologia pelo Programa de Pós-graduação em Psicologia da Universidade
              Federal de Alagoas (2021-2023);
            </li>
            <li>
              Pós-Graduado em Acessibilidade,Diversidade e Inclusão pela FACULDADE UNISE
              (2022-2023);
            </li>
            <li>Graduado em Psicologia pela Universidade Federal de Alagoas (2014-2020);</li>
          </ul>
        </div>
      </div>

      <div>
        <Subtitle>O Psicólogo</Subtitle>
        <p className='text-base lg:text-xl text-justify'>
          Como psicólogo, e entendendo que a tecnologia e o mundo globalizado pode produzir
          principalmente a ansiedade, meu foco é trabalhar com pessoas (de 16 a 49 anos) que queiram
          diminuir a ansiedade e ter mais calma e tolerância diante das situações. Atendo também
          jovens que queiram diminuir o uso excessivo de eletrônicos (como por exemplo: computador,
          celular, internet, aplicativos, games, entre outros) afim de ter hábitos mais saudáveis.
          Minha atuação é com base na orientação psicanalítica que tem como objetivo investigar os
          processos mentais reprimidos pelo inconsciente do paciente que geram angústia e ansiedade.
          O foco principal é interpretar as ações, pensamentos e sonhos do indivíduo. Também ofereço
          serviços de avaliação psicológica e para saber mais sobre esses serviços você pode acessar
          essa{" "}
          <Link
            href='/myservices'
            title='Página de Serviços'
            className='text-ciano-5 hover:underline'
          >
            página
          </Link>{" "}
          ou ficar a vontade para entrar em contato comigo caso fique com alguma dúvida em relação a
          preços e horários! Vamos agendar?
        </p>
      </div>
      <div className='flex w-screen  justify-center bg-ciano-1/20 py-8'>
        <SocialMediaButtons socialMediaLinks={socialMediaLinks} />
      </div>
    </div>
  )
}
