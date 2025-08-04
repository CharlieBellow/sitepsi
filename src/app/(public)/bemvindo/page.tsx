import { Button } from "@/src/components/ui"
import Title from "@/src/components/ui/Title"
import Link from "next/link"

import Subtitle from "@/src/components/ui/Subtitle"
import { nextBank, socialMediaLinks, utilsInformations } from "../../../../Utils/utilsInformations"

export default function firstSessionPage() {
  return (
    <div className='max-w-[56rem] mx-auto space-y-2 p-8'>
      <div className='text-center '>
        <Title className='text-ciano-3'>{utilsInformations.fullName}</Title>
        <Subtitle className='text-ciano-6'>{utilsInformations.crpProfession}</Subtitle>
        <p className='text-lg font-semibold text-ciano-2'>Atendimento Online para todo o Brasil</p>
      </div>
      <div>
        <Subtitle className='text-center mt-8'>Boas Vindas!</Subtitle>
        <p className='text-justify text-base lg:text-lg '>
          É com muita alegria que eu lhe dou as boas vindas ao meu consultório! E para garantir que
          sua experiência seja a melhor possível eu preparei um passo a passo para garantir que você
          chegue à nossa sessão na data e horário marcado sem grandes dificuldades. Aqui eu vou lhe
          ensinar quais são os próximos passos que você precisa dar rumo a sua transformação
          emocional. Teremos um tutorial sobre como acessar o Google Meet pelo computador e pelo
          celular além de algumas dicas para facilitar sua rotina de terapia; aqui eu também lhe
          mostro as opções de pagamento disponíveis com todas as informações que você precisa para
          realizar o pagamento e muito mais! Vamos começar?
        </p>
        <h3 className='text-xl text-center font-bold py-8'>
          Se você ainda não preencheu sua ficha de cadastro, esse é o momento!
        </h3>
        <p className='text-justify text-base lg:text-lg '>
          O preenchimento da Ficha de Cadastro e do Contrato Terapêutico é obrigatório. Eles
          garantem que questões relacionadas ao serviço da terapia como sigilo, faltas, remarcações
          possam ser acordadas legalmente entre psicólogo e paciente a fim de evitar maiores
          transtornos. Para preencher, clique no botão abaixo.
        </p>
        <Link
          href='https://forms.gle/ityHLYywf6XqvfDk8'
          target='_blank'
          className='block text-center py-8'
        >
          <Button className='text-sm lg:text-lg p-6  text-wrap  truncate'>
            Ficha de Cadastro e Contrato Terapêutico
          </Button>
        </Link>
      </div>
      <div>
        <h4 className='text-xl font-bold py-8'>Formas de Pagamento</h4>
        <p className='text-justify text-base lg:text-lg '>
          Aceitamos diversas formas de pagamento para facilitar sua experiência. O pagamento deve
          ser efetuado antes de cada sessão acontecer e a sessão só é confirmada mediante o envio do
          comprovante de pagamento no WhatsApp {utilsInformations.contact.phone} ou por email:
          {utilsInformations.contact.email}. O pagamento pode ser efetuado das seguintes formas:
        </p>
        <div className='flex flex-col  gap-8'>
          <p className='pt-6'>
            <strong>Depósito em conta ou Transferência bancária:</strong>
            <div className='pt-6'>
              <p>
                <strong>Conta:</strong> {nextBank.name}
              </p>
              <p>
                <strong>Agência:</strong> {nextBank.agency}
              </p>
              <p>
                <strong>Conta Corrente:</strong> {nextBank.account}
              </p>
            </div>
          </p>

          <p>ou se preferir pode usar o PIX:</p>
          <p className='space-y-4 pb-6'>
            <p>
              <strong>Pix (E-mail):</strong> {utilsInformations.contact.email}
            </p>
            <p>
              <strong>Pix (Chave aleatória): </strong> 9a1cb922-68fa-44df-a6c5-be2f86a01
            </p>
          </p>
        </div>
        <p>
          (Se preferir outra forma de pagamento como Boleto, entre em contato com o psicólogo para
          solicitar. Cartão de Débito ou Crédito não são aceitos no momento)
        </p>
      </div>
      <p className='text-justify text-base lg:text-lg '>
        Se você já marcou o seu horário comigo, nosso tutorial chega ao fim. É só guardar o dia e
        horário da sessão chegar e acessar o link (do Google Meet) da sua sessão que foi enviado por
        email ou whatsApp. Se você ainda não marcou, entre em contato comigo para agendar sua
        sessão. Estou à disposição para tirar suas dúvidas e ajudar no que for necessário. Você pode
        me encontrar por email ou diretamente no{" "}
        <Link className='text-ciano-6' href={socialMediaLinks[0].href}>
          WhatsApp.
        </Link>{" "}
        ou no número {utilsInformations.contact.phone}. Te espero lá!
      </p>

      <div>
        <Subtitle>Horário de Funcionamento</Subtitle>
        <p className='text-base lg:text-lg'>
          Segunda a Sexta-feira: <p className='font-bold'>09:00 às 19:00</p>
          <br />
          Sábado: <p className='font-bold'>08:00 às 12:00</p>
          <br />
          Domingo: <p className='font-bold'>Fechado</p>
        </p>
      </div>
    </div>
  )
}
