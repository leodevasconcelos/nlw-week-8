import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { Logo, LogoAlt } from './Logo';

export const menuLinks =[
    {
      name:"Início",
      link:"/"
    },
    {
      name:"Sobre",
      link:"/"
    },
    {
      name:"Serviços",
      link:"/"
    },
    {
      name:"Depoimentos",
      link:"/"
    },
    {
      name:"Contato",
      link:"/"
    },
  ];

export type MenuLinks = keyof typeof menuLinks;

export function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className='container px-4'>
        <div className='md:flex items-center justify-between bg-transparent py-4'>
          <div className='cursor-pointer flex items-center'>
            {open ? <LogoAlt/> : <Logo/>}
          </div>
          
          <div onClick={()=>setOpen(!open)} className='absolute right-4 top-4 cursor-pointer md:hidden'>
            <button name={open ? 'close':'menu'}>
              {open ? <X className="w-6 h-6 text-white"/> : <List className="w-6 h-6"/>}
            </button>
          </div>
          <ul className={`bg-brand-500 md:h-auto text-center md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-0 pt-20 h-screen':'top-[-490px]'}`}>
            { Object.entries(menuLinks).map(([key, value]) => {
              return (
                <li key={key} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={value.link} className='text-brand_alt-500 md:text-brand-500 hover:text-brand_alt-900 transition-all block font-bold md:font-normal'>{value.name}</a>
                </li>
              )
            }) }
            <button className="bg-white md:hidden md:bg-main-500 md:hover:bg-brand_alt-900 rounded-full text-brand-500 md:text-white gap-2 uppercase items-center px-8 py-4 text-sm">
              Agendar consulta
            </button>
          </ul>
          <button className="bg-white hidden md:block md:bg-main-500 md:hover:bg-brand_alt-900 rounded-full text-brand-500 md:text-white gap-2 uppercase items-center px-8 py-4 text-sm">
              Agendar consulta
            </button>
        </div>
      </div>
    </div>
  )
}