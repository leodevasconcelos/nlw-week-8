import iconCheck from '../../assets/images/check.svg'
export function Services() {
  return (
    <section id="servicos" className="bg-brand-100 pb-24 md:pb-40">
      <div className="container px-4">
        <div className="pt-[calc(17rem+100px)] md:pt-48 pb-16 flex flex-col items-center">
          <p className="text-center text-brand-500 font-bold pb-4 uppercase">SERVIÇOS</p>
          <h1 className="text-center font-bold text-[40px] lg:w-[500px] sm:w-auto leading-[52px]">Como podemos ajudá-lo a se sentir melhor?</h1>
        </div>
        <div className="gap-10 columns-1 md:columns-3">
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Problemas Digestivos</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Saúde Hormonal</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Bem-estar Mental</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Cuidados Pediátricos</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Autoimune e Inflamação</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-5 md:mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Saúde do Coração</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </section>
  )
}