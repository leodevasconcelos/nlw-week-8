import foto from "../../assets/images/image.png"

export function Hero() {
  return (
    <section className="container px-4">
      <div className="md:flex gap-10 mb-10">
        <div className="w-full mb-14 flex flex-col items-center md:items-start md:justify-center">
          <p className="text-main-500 pb-4 font-medium mt-10 md:mt-0">BOAS-VINDAS A DOCTORCARE 👋</p>
          <h1 className="text-[34px] text-center md:text-left md:text-5xl font-bold pb-6">Assistência médica simplificada para todos</h1>
          <p className="pb-8 text-center md:text-left text-main-100">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
          <button className="bg-main-500 hover:bg-brand_alt-900 rounded-full text-white gap-2 uppercase flex items-center px-8 py-4 text-sm">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8337 10.6667C12.667 10.5833 11.5837 10.0833 11.417 10C11.2503 9.91668 11.0837 9.91668 10.917 10.0833C10.7503 10.25 10.417 10.75 10.2503 10.9167C10.167 11.0833 10.0003 11.0833 9.83366 11C9.25033 10.75 8.66699 10.4167 8.16699 10C7.75033 9.58334 7.33366 9.08334 7.00033 8.58334C6.91699 8.41668 7.00033 8.25001 7.08366 8.16668C7.16699 8.08334 7.25033 7.91668 7.41699 7.83334C7.50033 7.75001 7.58366 7.58334 7.58366 7.50001C7.66699 7.41668 7.66699 7.25001 7.58366 7.16668C7.50033 7.08334 7.08366 6.08334 6.91699 5.66668C6.83366 5.08334 6.66699 5.08334 6.50033 5.08334C6.41699 5.08334 6.25033 5.08334 6.08366 5.08334C5.91699 5.08334 5.66699 5.25001 5.58366 5.33334C5.08366 5.83334 4.83366 6.41668 4.83366 7.08334C4.91699 7.83334 5.16699 8.58334 5.66699 9.25001C6.58366 10.5833 7.75033 11.6667 9.16699 12.3333C9.58366 12.5 9.91699 12.6667 10.3337 12.75C10.7503 12.9167 11.167 12.9167 11.667 12.8333C12.2503 12.75 12.7503 12.3333 13.0837 11.8333C13.2503 11.5 13.2503 11.1667 13.167 10.8333C13.167 10.8333 13.0003 10.75 12.8337 10.6667ZM14.917 3.08334C11.667 -0.166656 6.41699 -0.166656 3.16699 3.08334C0.500325 5.75001 0.000325501 9.83334 1.83366 13.0833L0.666992 17.3333L5.08366 16.1667C6.33366 16.8333 7.66699 17.1667 9.00033 17.1667C13.5837 17.1667 17.2503 13.5 17.2503 8.91668C17.3337 6.75001 16.417 4.66668 14.917 3.08334ZM12.667 14.75C11.5837 15.4167 10.3337 15.8333 9.00033 15.8333C7.75033 15.8333 6.58366 15.5 5.50033 14.9167L5.25033 14.75L2.66699 15.4167L3.33366 12.9167L3.16699 12.6667C1.16699 9.33334 2.16699 5.16668 5.41699 3.08334C8.66699 1.00001 12.8337 2.08334 14.8337 5.25001C16.8337 8.50001 15.917 12.75 12.667 14.75Z" fill="white"/>
</svg>
            Agendar consulta
          </button>
        </div>
        <div className="w-full mb-16 md:mb-10 md:flex md:justify-center">
          <img src={foto} alt="Mulher negra sorindo" />
        </div>
      </div>
    </section>
  )
}