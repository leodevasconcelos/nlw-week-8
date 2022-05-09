import { LogoAlt } from "./Logo";
import { Facebook, Instagram, YouTube } from "./Social";

export function Footer() {
  return (
    <footer className="bg-brand_alt-900 py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 text-white">
          <div className="brand-footer">
            <LogoAlt/>
            <div className="mt-6">
              <span className="text-[14px] pb-4 font-light">2022 - DoctorCare</span>
              <p className="text-[14px] font-light">Todos os direitos reservados.</p>
            </div>
          </div>
          <div className="flex md:justify-end gap-8 items-center">
            <Instagram/>
            <Facebook/>
            <YouTube/>
          </div>
        </div>
      </div>
    </footer>
  )
}