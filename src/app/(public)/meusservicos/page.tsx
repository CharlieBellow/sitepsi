import CardService from "@/src/app/(public)/meusservicos/CardService"
import Subtitle from "@/src/components/ui/Subtitle"
import Title from "@/src/components/ui/Title"
import Image from "next/image"
import orientacao from "../../../../assets/orientacao.jpg"
import parecer from "../../../../assets/parecer.jpg"
import personalidade from "../../../../assets/personalidade.jpg"
import psicoonline from "../../../../assets/pexels-cottonbro-4100661.jpg"
import laudo from "../../../../assets/testes-pexels-kampus-8430313.jpg"
export default function myServicesPage() {
  return (
    <div className='max-w-[66rem] mx-auto space-y-2 p-8 '>
      <Title className='text-center text-ciano-4'>Meus Serviços</Title>
      <div className=''>
        <Subtitle className='text-ciano-6'>Psicoterapia individual (Online)</Subtitle>
        <CardService
          title={"Psicólogo com foco em ansiedade, vício em eletrônicos e pessoas LGBTQIAPN+"}
          description={
            "Como psicólogo, meu foco é trabalhar com pessoas (de 18 a 49 anos) que queiram diminuir a ansiedade e ter mais calma e tolerância diante das situações. Atendo também pessoas LGBTQIAPN+ entendendo que essa população precisa de um espaço de escuta e acolhimento seguro e qualificado para suas demandas. Minha atuação é com base na orientação psicanalítica que tem como objetivo investigar os processos mentais reprimidos pelo inconsciente do paciente que geram angústia e ansiedade. O foco principal é interpretar as ações, pensamentos e sonhos do indivíduo. Atualmente ofereço esse serviço apenas na modalidade online."
          }
          imageSrc={psicoonline}
          altText={"Psicoterapia individual Online"}
        />

        <p className='text-justify text-base lg:text-lg py-6 '>
          A Psicoterapia online funciona da mesma forma da presencial. As sessões são semanais e
          realizadas pelo Google Meet que tem criptografia de ponta a ponta, isso significa que os
          dados não serão armazenados no banco de dados do Google e que você pode se tranquilizar
          pois o seu sigilo será garantido! O resultado e a eficácia do atendimento online também é
          o mesmo do presencial, uma vez que é possível estabelecer uma relação terapêutica com o
          paciente mesmo no ambiente online . O pagamento é efetuado antes de cada sessão, e para
          saber mais sobre formas de pagamento, entre em contato com o psicólogo.
        </p>
        <Subtitle className=' py-6 text-ciano-6'>Avaliação psicológica</Subtitle>

        <Subtitle className=' py-6  text-center'>Precisa fazer teste psicológico?</Subtitle>
        <p className='text-justify text-base lg:text-lg'>
          Outro serviço para o qual sou habilitado é a avaliação psicológica que consiste em um
          conjuntos de técnicas como entrevista, aplicação de teste, observação, entre outros, para
          avaliar o comportamento de alguém. Existem vários tipos de avaliação psicológica e eu vou
          citar algumas das que eu faço e explicar para quê ou para quem é indicado.
        </p>
        <CardService
          title={"Laudo Psicológico"}
          description={
            'Nesse documento, o psicólogo descreve o que observou, os testes que aplicou (se aplicou), as conclusões a que chegou e, se for o caso, as recomendações para a pessoa avaliada ou para quem solicitou o laudo. Ele é usado em diversas situações, como na área jurídica, para processos seletivos, em contextos de saúde, ou para fins de tratamento, sempre com o objetivo de oferecer uma visão profissional e ética sobre aspectos psicológicos. As procuras mais comuns são para cirurgia bariátrica, cirurgias relacionadas ao "processo transexualizador", cirurgia de laqueadura e vasectomia, contestação de laudos psicológicos, avaliação de risco em altura, exame de porte de armas, e muito mais.'
          }
          imageSrc={laudo}
          altText={"Psicoterapia individual Online"}
        />
      </div>

      <div className='flex flex-col lg:flex-row gap-8 justify-center items-center py-6'>
        <div className='flex flex-col items-center gap-2 justify-center'>
          <Image src={orientacao} alt={"Psicoterapia individual Online"} width={480} height={400} />
          <div>
            <Subtitle>Orientação Profissional</Subtitle>
            <p className='text-justify text-base lg:text-lg'>
              A orientação profissional tem o objetivo de ajudar pessoas que têm dúvidas em relação
              a sua carreira profissional tomarem uma decisão. Esse serviço pode ser contratado por
              jovens que estejam com dúvidas sobre qual curso escolher no vestibular. Ou por pessoas
              que queiram mudar de carreira.
            </p>
          </div>
        </div>

        <div className='flex flex-col  items-center gap-2'>
          <Image src={parecer} alt={"Psicoterapia individual Online"} width={380} height={200} />
          <div>
            <Subtitle>Parecer Psicológico</Subtitle>
            <p className='text-justify text-base lg:text-lg'>
              Objetiva dar obter uma opinião do profissional da psicologia a respeito de algum
              serviço psicológico realizado por outro profissional. Pode ser indicado para processos
              judiciais onde deseja-se contestar laudos psicológicos, conduta profissional, entre
              outros.
            </p>
          </div>
        </div>
      </div>

      <CardService
        title={"Teste de Personalidade"}
        description={
          "Consiste em avaliar a personalidade, com testes projetivos e testes de atenção que vão avaliar sua personalidade para descobrir seu nível de ansiedade, estresse, depressão, agressividade e entre outros.. Quando ou para que você precisa desse serviço? É uma avaliação psicológica com a finalidade de chegar a um diagnóstico a respeito da sua personalidade. Então você pode usar esse diagnostico para fins jurídicos questões trabalhistas, criminais, para acompanhamento médico."
        }
        imageSrc={personalidade}
        altText={"Teste de Personalidade"}
      />

      <p className='text-justify text-base lg:text-lg py-8'>
        <strong>Lembrando que a maioria desses serviços são presenciais...</strong> Se ficar alguma
        dúvida, por favor, me mande uma mensagem para que eu possa explicar melhor.
      </p>
    </div>
  )
}
