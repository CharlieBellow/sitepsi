import Subtitle from "@/components/ui/Subtitle"
import Title from "@/components/ui/Title"

import SocialMediaButtons from "@/components/ui/SocialMediaButtons"
import Link from "next/link"
import { socialMediaLinks, utilsInformations } from "../../../../Utils/utilsInformations"

export default function contactPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 m-4 md:m-20'>
      <Title className='text-ciano-5/70'>Contato</Title>
      <div className='flex flex-col lg:flex-row gap-4 p-4'>
        <div className='flex flex-col gap-4'>
          <Subtitle>Público Alvo:</Subtitle>
          <span className='text-base lg:text-xl'>
            Pessoas que sofrem com ansiedade, vícios em eletronicos, problemas familiares ou de
            relacionamentos e pessoas LGBTQIAP+.
          </span>
          <div>
            <Subtitle>Atendimentos:</Subtitle>
            <ul className='text-base space-y-8 lg:text-xl'>
              <li className='flex flex-col gap-2'>
                <p className='font-bold'>Online:</p>
                <span>SEG à SEX: 07:00 - 20:00 e SÁB: 07:00 - 12:00</span>
                <span>
                  Para todo o Brasil no Google Meet.{" "}
                  <Link href='https://wa.me/+5582996008552'>É só agendar!</Link>
                </span>
              </li>
              <li className='flex flex-col gap-2'>
                <p className='font-bold'>Presenciais:</p>
                <span>SEG, QUA, QUI: 08:00 - 18:00 </span>
                <span>
                  na cidade de Arapiraca - AL, no
                  <Link href='https://wa.me/+5582996008552'>endereço</Link>
                </span>
              </li>
            </ul>
            <div>
              <Subtitle className='font-bold'>Contatos:</Subtitle>
              <div className='flex flex-col gap-2'>
                <span className='text-base lg:text-xl font-bold'>Tel / Whats / Telegram:</span>
                <span className='text-base lg:text-xl'>{utilsInformations.contact.phone}</span>
                <span className='text-base lg:text-xl font-bold'>E-mail:</span>
                <span className='text-base lg:text-xl'>{utilsInformations.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  gap-4 p-4'>
          <Subtitle>Dados do Psicólogo:</Subtitle>
          <span className='text-base lg:text-xl'>{utilsInformations.fullName}</span>
          <span className='text-base lg:text-xl'>{utilsInformations.crpProfession}</span>
          <Subtitle className='font-bold'>Abordagem/Linha Teórica:</Subtitle>
          <span className='text-base lg:text-xl'>Psicanálise</span>
          <Subtitle>Formas de Pagamento:</Subtitle>
          <span>Transferência Bancária; Depósito em conta; Pix; e Boleto.</span>
        </div>
      </div>
      <div>
        <p className='text-base lg:text-xl'>
          Para saber mais, visite minhas redes sociais lincadas abaixo. Lá você pode conhecer um
          pouco mais sobre mim, meus serviços e ficar a vontade para entrar em contato comigo caso
          fique com alguma dúvida em relação a preços e horários! Vamos agendar?
        </p>
        <div className='flex flex-col gap-4 mt-4'>
          <SocialMediaButtons socialMediaLinks={socialMediaLinks} />
        </div>
      </div>
    </div>
  )
}
