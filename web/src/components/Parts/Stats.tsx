export function Stats() {
  return (
    <section>
      <div className="container px-4">
        <div className="relative">
          <div className="w-full bg-brand_alt-500 border-[1px] border-brand-200 columns-1 md:columns-3 gap-5 py-14 px-28 rounded-md md:absolute -mt-[100px] mx-auto">
            <div className="mb-10 md:mb-0 mx-auto text-center">
              <h4 className="text-4xl font-bold">+3.500</h4>
              <p className="text-main-500">Pacientes atendidos</p>
            </div>
            <div className="mb-10 md:mb-0 mx-auto text-center md:border-l-2 md:border-r-2 md:border-main-500 md:px-24">
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