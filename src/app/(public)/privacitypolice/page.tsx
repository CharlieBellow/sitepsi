import Subtitle from "@/components/ui/Subtitle"
import Title from "@/components/ui/Title"

export default function privacyPolicyPage() {
  return (
    <div className='max-w-3xl mx-auto px-4 space-y-5 py-8'>
      <Title>Política de Privacidade</Title>
      <p className='text-justify'>
      
        A sua privacidade é importante para nós. É política do Psicólogo Charlie respeitar a sua
        privacidade em relação a qualquer informação sua que possamos coletar no site psicólogo
        Charlie, e outros sites que possuímos e operamos. Solicitamos informações pessoais apenas
        quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
        legais, conforme a Lei Geral de Proteção de Dados (LGPD), com o seu conhecimento e
        consentimento. Também informamos por que estamos coletando e como será usado. Apenas retemo
        as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
          
        </p>
        <p className='text-justify'>
        Quando
        armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e
        roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. Não
        compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto
        quando exigido por lei. O nosso site pode ter links para sites externos que não são operados
        por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e
        não podemos aceitar responsabilidade por suas respectivas políticas de privacidade. Você é
        livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
        possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será
        considerado como aceitação de nossas práticas em torno de privacidade e informações
        pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
        pessoais, entre em contacto connosco.
      </p>
      <Subtitle>Compromisso do Usuário</Subtitle>
      <p className='text-justify'>
        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site
        Psicólogo Charlie oferece no site e com caráter enunciativo, mas não limitativo:
      </p>
      <ul className='pl-5 pt-4 gap-5 flex flex-col'>
        <li>
          <p className='text-justify'>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem
            pública ou ao Código de Ética do Psicólogo;
          </p>
        </li>
        <li>
          <p className='text-justify'>
            B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
            LGBTQIAPN+fóbica, capacitista ou sobre cassinos, casas de apostas (ex.: Bet.pt), jogos
            de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou
            contra os direitos humanos;
          </p>
        </li>
        <li>
          <p className='text-justify'>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do site
            Psicólogo Charlie, de seus fornecedores ou terceiros, para introduzir ou disseminar
            vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam
            capazes de causar danos anteriormente mencionados.
          </p>
        </li>
        <li>
          <p className='text-justify'>
            D) Não usar as informações obtidas nesse site para se promover como profissional da
            psicologia caso você não seja tenha formação na psicologia nem CRP ativo. Caso seja
            comprovado medidas legais cabíveis serão tomadas. Se tem formação em psicologia e deseja
            utilizar o conteúdo deve citar o site como fonte das informações respeitando os direitos
            autorais do Psicólogo Charlie.
          </p>
        </li>
      </ul>
      <div className='mt-8'>
        <strong>Mais informações</strong>

        <p className='text-justify'>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você
          não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados,
          caso interaja com um dos recursos que você usa em nosso site. Esta política é efetiva a
          partir de <strong>Agosto/2025</strong>.
        </p>
      </div>
    </div>
  )
}
