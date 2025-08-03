import { utilsInformations } from "../../Utils/utilsInformations";

export default function CallToAction() {
  return (
    <div className='px-8 retative text-white space-y-5 sm:space-y-16 md:space-y-16 absolute z-50 text-lg max-w-xs sm:max-w-xl lg:max-w-3xl'>
      <div className='text-lg'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          {utilsInformations.fullName}
        </h1>
        <h2 className='text-lg lg:text-2xl font-bold'>{utilsInformations.crpProfession}</h2>
      </div>
      <p className='max-w-full text-sm md:text-base lg:text-xl'>
        Mestre em Psicologia, especialista em Acessibilidade, Diversidade e Inclusão. Clínica focada
        em lidar com questões LGBTQIAPN+, em especial questões das subjetividades trans e travesti.
      </p>

      <div className='flex justify-around w-full flex-col sm:flex-row gap-4'>
        <button
          type='button'
          className='bg-transparent hover:bg-ciano-4/25 border-2 py-2 px-10 rounded-xl border-primary'
        >
          Agende
        </button>
        <button
          type='button'
          className='bg-primary/30 hover:bg-ciano-4/25 border-2 py-2 px-10 rounded-xl border-primary'
        >
          Youtube
        </button>
      </div>
    </div>
  )
}
