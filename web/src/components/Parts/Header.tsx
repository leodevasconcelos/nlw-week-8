import { List, X } from 'phosphor-react';
import { Logo, LogoAlt } from './Logo';
import { Facebook, Instagram, YouTube } from './Social';
import React, { useEffect, useState } from 'react';
const menuLinks =[
    {
      name:"Início",
      link:"/#home"
    },
    {
      name:"Sobre",
      link:"/#sobre"
    },
    {
      name:"Serviços",
      link:"/#servicos"
    },
    {
      name:"Depoimentos",
      link:"/"
    },
  ];


export function Header() {
  const [open, setOpen] = useState(false);

  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffSet(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 ${offSet ? 'bg-brand-500 scroll-down':'bg-brand-200'}`}>
      <div className='container px-4'>
        <div className='flex items-center justify-between bg-transparent h-[72px]'>
          <div className='cursor-pointer flex items-center'>
            {open || offSet ? <LogoAlt/> : <Logo/>}
          </div>
          
          <div onClick={()=>setOpen(!open)} className='absolute right-4 top-7 w-6 h-6 cursor-pointer md:hidden'>
            <button name={open ? 'close':'menu'}>
              {open ? <X className="w-6 h-6 text-white"/> : <List className={`w-6 h-6 ${offSet ? 'text-white':'text-brand-500'}`}/>}
            </button>
          </div>
          <ul className={`main-menu bg-brand-500 md:h-auto text-center md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-0 pt-20 h-screen':'top-[-33rem]'}`}>
            { Object.entries(menuLinks).map(([key, value]) => {
              return (
                <li key={key} className='md:ml-8 md:my-0 my-7 border-b-2 border-transparent'>
                  <a href={value.link} className='md:py-[calc(1.5rem-1px)] md:px-1 transition-all block font-bold md:font-normal'>{value.name}</a>
                </li>
              )
            }) }
            <button className="bg-white md:hidden md:bg-main-500 md:hover:bg-brand_alt-900 rounded-full text-brand-500 md:text-white uppercase font-bold items-center px-6 py-[10px] text-sm">
              Agendar consulta
            </button>
            <div className="flex justify-center pt-20 md:hidden gap-8">
              <Instagram/>
              <Facebook/>
              <YouTube/>
            </div>
          </ul>
          <button className={`hidden md:block rounded-full uppercase items-center px-6 py-[10px] text-sm md:bg-transparent transition-all border-[1px] ${offSet ? 'hover:bg-white hover:text-brand-500 border-brand-100 text-brand-100' : 'text-brand-500 hover:text-brand-100 hover:bg-brand-500 border-brand-500 '}`}>
              Agendar consulta
            </button>
        </div>
      </div>
    </div>
  )
}