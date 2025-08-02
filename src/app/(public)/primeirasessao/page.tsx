import { Button } from '@/components/ui'
import Link from 'next/link'

import React from 'react'

export default function firstSessionPage() {
  return (
    <div>
      <div>
        <h1>Charlie Bellow de Oliveira Pimentel Silva</h1>
        <p>Psicólogo - CRP 15/5997</p>
        <p>Atendimento Online para todo o Brasil</p>
      </div>
      <div>
        <h2>Boas Vindas!</h2>
        <p>
          É com muita alegria que eu lhe dou as boas vindas ao meu consultório! E para garantir que
          sua experiência seja a melhor possível eu preparei um passo a passo para garantir que você
          chegue à nossa sessão na data e horário marcado sem grandes dificuldades. Aqui eu vou lhe
          ensinar quais são os próximos passos que você precisa dar rumo a sua transformação
          emocional. Teremos um tutorial sobre como acessar o Google Meet pelo computador e pelo
          celular além de algumas dicas para facilitar sua rotina de terapia; aqui eu também lhe
          mostro as opções de pagamento disponíveis com todas as informações que você precisa para
          realizar o pagamento e muito mais! Vamos começar?
        </p>
        <h3>Se você ainda não preencheu sua ficha de cadastro, esse é o momento!</h3>
        <p>
          O preenchimento da Ficha de Cadastro e do Contrato Terapêutico é obrigatório. Eles
          garantem que questões relacionadas ao serviço da terapia como sigilo, faltas, remarcações
          possam ser acordadas legalmente entre psicólogo e paciente a fim de evitar maiores
          transtornos. Para preencher, clique no botão abaixo.
        </p>
        <Link href='https://forms.gle/ityHLYywf6XqvfDk8'>
          <Button>Ficha de Cadastro e Contrato Terapêutico</Button>
        </Link>
      </div>
      <div>
        <h4>Formas de Pagamento</h4>
        <p>
          Aceitamos diversas formas de pagamento para facilitar sua experiência. O pagamento deve
          ser efetuado antes de cada sessão acontecer e a sessão só é confirmada mediante o envio do
          comprovante de pagamento no WhatsApp (+5582996008552) ou por email:
          charlieb.psicologo@gmail.com. O pagamento pode ser efetuado de três maneiras: Depósito em
          conta ou Transferência bancária para a conta: Banco Next (Bradesco) - 237 Agência: 7320
          Conta Corrente: 270955-4 ou Caixa Agência: 0057 Operação: 001 Conta: 30157-3 Nome: Charlie
          Bellow de Oliveira Pimentel Silva CPF: solicitar pelo WhatApp Ou se preferir pode usar o
          PIX: Pix (E-mail): charlieb.psicologo@gmail.com ou Pix (Chave aleatória):
          9a1cb922-68fa-44df-a6c5-be2f86a01 (Se preferir outra forma de pagamento como Boleto, entre
          em contato comigo para solicitar. Cartão de Débito ou Crédito não são aceitos no momento)
        </p>
      </div>
      <p>
        Se você já marcou o seu horário comigo, nosso tutorial chega ao fim. É só guardar o dia e
        horário da sessão chegar e acessar o link (do Google Meet) da sua sessão que eu lhe mandei
        no WhatsApp. Te espero lá!
      </p>
      <div>contato</div>
      <div>horario de funcionamento</div>
    </div>
  )
}
