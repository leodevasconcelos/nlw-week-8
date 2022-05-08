import iconCheck from '../../assets/images/check.svg'
export function Services() {
  return (
    <section className="bg-brand-100 pb-40">
      <div className="container px-4">
        <div className="pt-48 pb-16 flex flex-col items-center">
          <p className="text-center text-brand-500 font-bold pb-4">SERVIÇOS</p>
          <h1 className="text-center font-bold text-[40px] lg:w-[500px] sm:w-auto leading-[52px]">Como podemos ajudá-lo a se sentir melhor?</h1>
        </div>
        <div className="gap-10 columns-1 md:columns-3">
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
          <div className="mb-10 w-full p-6 border-[1px] border-brand-200 bg-white rounded-md flex flex-col">
            <span className="bg-brand-200 w-6 h-6 rounded-full flex justify-center items-center">
              <img src={ iconCheck } alt="Icone de confirmação" />
            </span>
            <h5 className="py-4 font-bold text-2xl text-zinc-800">Titulo</h5>
            <p className="text-zinc-600">lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </section>
  )
}