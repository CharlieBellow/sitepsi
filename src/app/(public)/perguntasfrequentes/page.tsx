import ItemAskDrop from "@/src/app/(public)/perguntasfrequentes/ItemAskDrop"
import Title from "@/src/components/ui/Title"
import { frequentlyQuestions } from "../../../../Utils/utilsInformations"

export default function FrequentlyQuestionsPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 max-w-[56rem] mx-auto'>
      <Title>Perguntas Frequentes</Title>
      <div className='w-full flex flex-col gap-4'>
        {frequentlyQuestions.map((item, index) => (
          <ItemAskDrop key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}
