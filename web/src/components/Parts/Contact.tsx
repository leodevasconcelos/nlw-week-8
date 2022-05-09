import contact from '../../assets/images/contato.png';
import pin from '../../assets/images/map-pin.svg';
import mail from '../../assets/images/mail.svg';
import { ButtonDefault } from './Buttons';

export function Contact() {
  return (
    <section>
      <div className="container px-4">
        <div className="gap-10 flex flex-col-reverse md:flex-row-reverse md:items-center py-24 md:py-40">
          <div>
            <img src={contact} alt="Médico e uma mãe segurando seu filho no colo enquanto sorriem" />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-[40px] lg:w-[500px] sm:w-auto leading-[52px] pb-6">Entre em contato com a gente!</h1>
            <div className="flex pb-4 gap-2">
              <img src={pin} alt="Icone de localização" />
              <span>R. Amauri Souza, 346</span>
            </div>
            <div className="flex pb-10 gap-2">
              <img src={mail} alt="Icone de envelope de carta" />
              <span>contato@beautysalon.com</span>
            </div>
            <ButtonDefault/>
          </div>
        </div>
      </div>
    </section>
  )
}