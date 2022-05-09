export function Stats() {
  return (
    <section>
      <div className="container px-4">
        <div className="relative">
          <div className="w-full bg-brand_alt-500 border-[1px] border-brand-200 columns-1 md:columns-3 gap-5 py-14 px-28 rounded-md absolute -mt-[14rem] md:-mt-[5.5rem] mx-auto">
            <div className="mb-10 md:mb-0 mx-auto text-center">
              <h4 className="text-4xl font-bold">+3.500</h4>
              <p className="text-main-500">Pacientes atendidos</p>
            </div>
            <div className="mb-10 md:mb-0 mx-auto text-center border-opacity-50 md:border-l-[1px] md:border-r-[1px] md:border-main-500">
              <h4 className="text-4xl font-bold">+15</h4>
              <p className="text-main-500">Especialistas disponíveis</p>
            </div>
            <div className="mb-10 md:mb-0 mx-auto text-center">
              <h4 className="text-4xl font-bold">+10</h4>
              <p className="text-main-500">Anos de mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}