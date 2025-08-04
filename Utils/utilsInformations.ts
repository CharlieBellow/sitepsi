import ansiedade1 from "@/assets/ansiedade/ansiedade1.png"
import ansiedade2 from "@/assets/ansiedade/ansiedade2.png"
import ansiedade3 from "@/assets/ansiedade/ansiedade3.png"
import ansiedade4 from "@/assets/ansiedade/ansiedade4.png"
import ansiedade5 from "@/assets/ansiedade/ansiedade5.png"
import ansiedade6 from "@/assets/ansiedade/ansiedade6.png"
import ansiedade7 from "@/assets/ansiedade/ansiedade7.png"
import ansiedade8 from "@/assets/ansiedade/ansiedade8.png"
import terapia1 from "@/assets/consultorio/preço social.jpg"
import terapia2 from "@/assets/consultorio/clinica sao paulo rio de janeiro guarulhos psicologa.jpg"
import terapia3 from "@/assets/consultorio/faça terapia em um lugar aconchegante e sigiloso.jpg"
import terapia4 from "@/assets/consultorio/psicologo charlie pimentel alagoas.jpg"
import terapia5 from "@/assets/consultorio/psicologo que cobra barato.jpg"
import terapia6 from "@/assets/consultorio/psicotarapia gratis barato.jpg"
import terapia7 from "@/assets/consultorio/psicoterapia.jpg"
import terapia8 from "@/assets/consultorio/terapia gratis.jpg"


export const myBirthDate = "1994-01-16"
export const utilsInformations = {
  age: {
    getAge: (birthDate: string): number => {
      const today = new Date()
      const birth = new Date(birthDate)
      let age = today.getFullYear() - birth.getFullYear()
      const monthDiff = today.getMonth() - birth.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--
      }
      return age
    },
  },
  name: "Charlie",
  fullName: "Charlie Bellow de Oliveira Pimentel Silva",
  crpProfession: "Psicólogo - CRP 15/5997",
  price: 200,
  contact: {
    phone: "+5582996008552",
    email: "charlieb.psicologo@gmail.com",
  },
}

export const consultorioCards = [
  {
    src: terapia1,
    alt: "terapia 1",
  },
  {
    src: terapia2,
    alt: "terapia 2",
  },
  {
    src: terapia3,
    alt: "terapia 3",
  },
  {
    src: terapia4,
    alt: "terapia 4",
  },
  {
    src: terapia5,
    alt: "terapia 5",
  },
  {
    src: terapia6,
    alt: "terapia 6",
  },
  {
    src: terapia7,
    alt: "terapia 7",
  },
  {
    src: terapia8,
    alt: "terapia 8",
  },
]
export const ansiedadeCards = [
  {
    src: ansiedade1,
    alt: "Ansiedade 1",
  },
  {
    src: ansiedade2,
    alt: "Ansiedade 2",
  },
  {
    src: ansiedade3,
    alt: "Ansiedade 3",
  },
  {
    src: ansiedade4,
    alt: "Ansiedade 4",
  },
  {
    src: ansiedade5,
    alt: "Ansiedade 5",
  },
  {
    src: ansiedade6,
    alt: "Ansiedade 6",
  },
  {
    src: ansiedade7,
    alt: "Ansiedade 7",
  },
  {
    src: ansiedade8,
    alt: "Ansiedade 8",
  },
]

export const socialMediaLinks = [
  { label: "whatsapp", href: "https://wa.me/+5582996008552" },
  { label: "instagram", href: "https://www.instagram.com/mestrecharliepsi/" },
  {
    label: "crp",
    href: "http://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf",
  },
  { label: "youtube", href: "https://www.youtube.com/@MestreCharliePsi" },
]

export const nextBank = {
  name: "Banco Next (Bradesco)",
  agency: "7320",
  account: "270955-4",
  type: "Conta Corrente",
}

export const depoiments = [
  {
    name: "L. S. B.",
    text: "A terapia com o Charlie me ajudou a entender melhor meus sentimentos e a lidar com a ansiedade. Ele é um profissional incrível!",
  },
  {
    name: "M.A.A.S.",
    text: "Cheguei muito tensa e ele me acalmou, muito respeitoso e competente no que faz.",
  },
  {
    name: "S.B.S.",
    text: 'Quando pedi a Deus pra ser uma mulher pra me atender, ele fez melhor, mandou um ser humano incrível e que, talvez, sofra muito mais preconceito que eu, que possivelmente, tenha situações bem desafiadoras no seu cotidiano, mas, que mesmo assim consegue ser suave, leve e muito profissional. Obrigada por tudo que vc vinha fazendo por mim, às vezes, eu quase não "deixava" vc falar, mas, é que eu me sentia tão segura em conversar com vc que eu tinha que aproveitar o momento.Obrigada mesmo, desejo que vc seja ainda mais feliz.',
  },
  {
    name: "A.D.A.G.",
    text: "Antes nem ligava para terapia, achava que não precisava. Mas depois de me consultar com o Charlie eu indico a todo mundo que conheço porque é bom demais!",
  },
  {
    name: "M.S.N.C.",
    text: "Ótimo profissional! Me ajudou muito com minha ansiedade.",
  },
  {
    name: "K.A.P.G",
    text: "Sofro de depressão e ansiedade e ele tem me ajudado a superar isso. Cheguei na sessão sem visão de futuro, e ele me ajudou a ver de um jeito diferente. Não dormia há dias e hoje consigo ter uma noite de sono.",
  },
]

export const frequentlyQuestions = [
  {
    question: "Por que fazer terapia?",
    answer:
      "A terapia pode ajudar em diversos aspectos da vida, como autoconhecimento, superação de traumas, desenvolvimento pessoal e emocional.",
  },
  {
    question: "Quem é você para querer ser meu terapeuta?",
    answer:
      "Sendo sincero com você, depende! O processo de escolha do terapêuta depende muito de cada cliente. Você pode gostar de mim logo de cara e marcar uma consulta direto comigo ou não ir com minha cara desde o início e nada que eu fale vai te convencer a fazer um agendamento. Por outro lado, acredito que parte desse processo de escolha do terapêuta depende de suas qualidades e habilidade profissionais (e pessoais também). E é por isso que eu adoto o hábito da melhoria contínua em tudo que faço, pois estou sempre buscando entregar o melhor serviço de qualidade para meu cliente cobrando o preço justo pelo meu serviço.",
  },
  {
    question: "Porquê eu preciso e preciso agora da sua terapia?",
    answer:
      'Se eu te dissesse que existe a possibilidade de lidar melhor com os problemas do dia a dia, dormir melhor, ter mais autoestima, sentir menos ansiedade, aprender a gerir seus relacionamentos de forma a diminuir ou até mesmo evitar conflitos, se conhecer em um nível que te permitisse tomar decisões melhores além de ser mais produtivo, ter mais tempo pra você e manter hábitos saudáveis e um bem estar físico e emocional na maior parte do tempo; o que você me diria? Provavelmente, iria perguntar "onde compra isso?" ou "me diz o segredo!!" Pois é, a terapia pode fazer tudo isso por você desde que você se permita dar o primeiro passo e passar por essa experiência tão incrível que é fazer terapia! Se algum desses benefícios da psicoterapia citados acima faz parte de seus desejos ou metas, você deveria considerar fazer terapia, basta considerar isso que você tanto deseja em sua vida como uma prioridade!',
  },
  {
    question: "Você é muito jovem, não deve ter muita experiência para entender o meu caso...",
    answer:
      "Pensa comigo, quem você acha que tem mais experiência profissional? Uma pessoa que desde que saiu da faculdade já começou a atender e já está há um ano no mercado ou uma pessoa que se formou em psicologia nos anos 2000 e depois que saiu da faculdade colocou o diploma de psicólogo na gaveta e foi trabalhar em outra área e só agora, depois dos 20 anos de formação resolve começar a atender seus pacientes na clínica? Percebe como idade não é sinônimo de competência ou experiência técnica e prática no assunto? É possível encontrar pessoas que se formaram agora e que tem muito conhecimento atualizado sobre o assunto, tem experiência e competência para te atender; e, da mesma forma, encontrar pessoas que se formaram há 20 anos e estão com o conteúdo desatualizado e sem nenhum preparo ou noção do que está fazendo na clínica. Por isso, sempre que for buscar um profissional, é interessante saber da trajetória profissional dele, ou seja, que caminhos ele percorreu até aqui e não achar que apenas a idade é quem vai definir a competência e preparo técnico-científico do profissional. Eu conto com mais de 5 anos de esperiência profisional atendendo na clínica e em outra áreas também.",
  },
  {
    question: "Como posso agendar uma sessão?",
    answer:
      "O preço da minha sessão está na página de contato, caso queira saber  só conferir por lá. Lembrando que o Código de Ética do Psicólogo não permite que o profissional da Psicologia divulgue seu preço dessão como forma atrativa, nesse sentido,é possível divulgar o valor, mas não pode divulgá-lo como promoção, descontos, entre outros. Para mais informações, entre em contato comigo no WhatsApp. ",
  },
  {
    question: "O que é necessário para realizar o atendimento online?",
    answer:
      "As sessões são realizadas por videochamada, garantindo a mesma qualidade e atenção que o atendimento presencial. Para realizar o atendimento online, você vai precisar de um dispositivo com câmera e microfone, além de uma conexão estável com a internet. 'preferível que use fones de ouvido e disponha de um ambiente adequado para o atendimento, ou seja, um ambiente reservado (com porta fechada) em que só você tenha acesso durante o atendimento e que outras pessoas presentes na casa não escutem o que você está dizendo ou entrem no cômodo durante o atendimento. ",
  },
  {
    question: "Você só atende ansiedade e pessoas LGBTQIA+?",
    answer:
      "Não. Meu foco e trabalhar com essas demandas pois foram demandas que eu mais estudei e me qualifiquei para atender. Mas o psicólogo sai da universidade pronto para atender qualquer demanda desde que ele avalie que tem as competências necessárias para isso. Se você tem outra demanda que não seja ansiedade ou LGBTQIA+ e quer saber se eu posso te atender, entre em contato comigo no WhatsApp e vamos conversar sobre isso.",
  },
  {
    question: "Você atende crianças?",
    answer:
      "No momento não, acredito que da mesma forma que investi na minha preparação para atender adultos, também precisaria de um preparo maior para atender crianças. E no momento não disponho de tempo para esse preparo. Mas tenho alguns profissionais de minha confiança para quem indico os pacientes dessa faixa etária.",
  },
  {
    question: "Não posso ser atendido nos horários disponíveis. É possível agendar outro horário?",
    answer:
      "Sim, é possível. Entre em contato comigo para ver a minha disponibilidade nos melhores horários para você. Se eu tiver disponibilidade, agendamos um horário que seja bom para ambos.",
  },
  {
    question: "Você atende presencial?",
    answer: "Sim, é possível. Entre em contato comigo para ver a minha disponibilidade.",
  },
  {
    question: "O atendimento Online funciona?",
    answer:
      "Claro! Não tem diferença em qualidade ou resultados. O que muda é o formato e os benefícios que cada um proporciona. O atendimento online realmente não é para todo mundo seja por questões de logística da casa ou por falta de adaptação. Tem pessoas que vão continuar preferindo o presencial, e está tudo bem! O importante é manter a terapia em dia. Mas, se você está pensando em fazer terapia online, saiba que funciona sim e é possível ter resultados tão bons quanto o presencial. O importante é que você se sinta confortável com o formato escolhido.",
  },
]
