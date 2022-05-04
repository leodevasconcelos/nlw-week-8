import { WhatsappLogo } from "phosphor-react";
import logo from "../assets/images/Logo.svg";
import foto from "../assets/images/image.png"
export function Home() {
 return (
  <main className="bg-main-300 ">
    <header className="container mx-auto">
        <nav className="flex justify-between items-center py-4">
          <div>
            <img src={logo} alt="Logotipo DoctorCare" />
          </div>
          <div>
            <ul className="flex gap-5">
              <li className="text-main-500 py-4 cursor-pointer font-medium border-b-2 border-main-500">Home</li>
              <li className="text-main-500 py-4 cursor-pointer opacity-70 hover:border-b-2 hover:text-main-500">Serviços</li>
              <li className="text-main-500 py-4 cursor-pointer opacity-70 hover:border-b-2 hover:text-main-500">Sobre</li>
              <li className="text-main-500 py-4 cursor-pointer opacity-70 hover:border-b-2 hover:text-main-500">Depoimentos</li>
            </ul>
          </div>
          <div>
            <button className="border border-main-500 hover:bg-main-500 hover:text-white hover:brightness-90 rounded-full text-main-500 gap-2 uppercase flex items-center px-8 py-4 text-sm font-medium">
              Agendar consulta
            </button>
          </div>
        </nav>
      </header>
      <section className="container mx-auto">
        <div className="flex items-center gap-5">
          <div className="w-3/6">
            <p className="text-main-500 pb-4 font-medium">BOAS-VINDAS A DOCTORCARE 👋</p>
            <h1 className="text-5xl font-bold pb-6">Assistência médica simplificada para todos</h1>
            <p className="pb-8 text-main-100">Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
            <button className="bg-main-500 hover:brightness-90 rounded-full text-white gap-2 uppercase flex items-center px-8 py-4 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z" fill="rgba(255,255,255,1)"/></svg>
              Agendar consulta
            </button>
          </div>
          <div className="w-3/6">
            <img src={foto} alt="Mulher negra sorindo" />
          </div>
        </div>
        <div className="bg-main-200 flex items-center justify-center gap-5 py-14 px-28 rounded-md -mt-16 z-10 relative mx-auto">
          <div className="mx-auto text-center">
            <h4 className="text-4xl font-bold">+3.500</h4>
            <p className="text-main-500">Pacientes atendidos</p>
          </div>
          <div className="mx-auto text-center border-l-2 border-r-2 border-main-500 px-24">
            <h4 className="text-4xl font-bold">+15</h4>
            <p className="text-main-500">Especialistas disponíveis</p>
          </div>
          <div className="mx-auto text-center">
            <h4 className="text-4xl font-bold">+10</h4>
            <p className="text-main-500">Anos de mercado</p>
          </div>
        </div>
      </section>
  </main>
 ) 
}