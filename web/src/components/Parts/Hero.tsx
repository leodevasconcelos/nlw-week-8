import foto from "../../assets/images/image.png"
import { ButtonDefault } from "./Buttons"

export function Hero() {
  return (
    <section id="home" className="bg-brand-200">
      <div className="container px-4">
        <div className="md:flex pb-40 md:pb-0">
          <div className="w-full mb-14 flex flex-col items-center md:items-start md:justify-center">
            <p className="text-main-500 pb-4 font-medium mt-10 md:mt-0">BOAS-VINDAS A DOCTORCARE 👋</p>
            <h1 className="text-[34px] text-center md:text-left md:text-5xl font-bold pb-6">Assistência médica simplificada para todos</h1>
            <p className="pb-8 text-center md:text-left text-main-100">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
            <ButtonDefault/>
          </div>
          <div className="w-full mb-16 md:mb-10 md:flex md:justify-center">
            <img src={foto} alt="Mulher negra sorindo" />
          </div>
        </div>
      </div>
    </section>
  )
}