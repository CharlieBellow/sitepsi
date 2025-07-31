import Link from 'next/link'
import React from 'react'

export default function contactPage() {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <div>
          <p>Público Alvo:</p>
          <span>
            Pessoas que sofrem com ansiedade, problemas familiares ou de relacionamentos ou pessoas
            LGBTQIAP+.
          </span>
          <div>
            <p>Atendimentos:</p>
            <ul>
              <li>
                <p>Online:</p>
                <span>SEG à SEX: 07:00 - 20:00 e SÁB: 07:00 - 12:00</span>
                <span>
                  Para todo o Brasil no Google Meet.{" "}
                  <Link href='https://wa.me/+5582996008552'>É só agendar!</Link>
                </span>
              </li>
              <li>
                <p>Presenciais:</p>
                <span>SEG, QUA, QUI: 08:00 - 18:00 </span>
                <span>
                  na cidade de Arapiraca - AL, no
                  <Link href='https://wa.me/+5582996008552'>endereço</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Dados do Psicólogo:</p>
          <span>Charlie Bellow de Oliveira Pimentel Silva Psicólogo - CRP 15/5997</span>
          <p>Abordagem/Linha Teórica:</p>
          <span>Psicanálise</span>
          <p>Formas de Pagamento:</p>
          <span>Transferência Bancária; Depósito em conta; Pix; e Boleto.</span>
          <p>Contatos:</p>
          <span>Tel / Whats / Telegram: +55 (82) 9 9600-8552</span>
          <span>E-mail: charlieb.psicologo@gmail.com.</span>
        </div>
      </div>
      <div>
        <p>
          Para saber mais, visite minhas redes sociais lincadas abaixo. Lá você pode conhecer um
          pouco mais sobre mim, meus serviços e ficar a vontade para entrar em contato comigo caso
          fique com alguma dúvida em relação a preços e horários! Vamos agendar?
        </p>
        <Button>Whats</Button>
        <Button>Insta</Button>
        <Button>Youtube</Button>
        <Button>Cartão Virtual</Button>
        <Button>Código de Ética</Button>
        <p>
          Para saber mais, visite minhas redes sociais lincadas abaixo. Lá você pode conhecer um
          pouco mais sobre mim, meus serviços e ficar a vontade para entrar em contato comigo caso
          fique com alguma dúvida em relação a preços e horários! Vamos agendar?
        </p>
      </div>
    </div>
  )
}
