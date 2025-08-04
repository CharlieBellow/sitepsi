"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"

type ItemAskDropProps = {
  question: string
  answer: string | React.ReactNode
}

export default function ItemAskDrop({ question, answer }: ItemAskDropProps) {
  return (
    <div className='bg-ciano-1/20 p-4 rounded-lg shadow-md'>
      <Accordion type='single' collapsible className=''>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='lg:text-lg font-medium text-base'>
            {question}
          </AccordionTrigger>
          <AccordionContent className='text-base lg:text-lg'>{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
