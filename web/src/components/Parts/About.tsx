import about from '../../assets/images/sobre.png';

export function About() {
  return (
    <section className="bg-brand_alt-500">
      <div className="container px-4">
        <div className="gap-10 flex flex-col-reverse md:flex-row md:items-center py-24 md:py-40">
          <div>
            <img src={about} alt="Médico e uma mãe segurando seu filho no colo enquanto sorriem" />
          </div>
          <div className="flex-1">
            <p className="text-brand-500 font-bold pb-4 uppercase">Sobre nós</p>
            <h1 className="font-bold text-[40px] lg:w-[500px] sm:w-auto leading-[52px] pb-6">Entenda quem somos e por que existimos</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
      </div>
    </section>
  )
}