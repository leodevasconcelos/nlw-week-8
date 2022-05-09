import { About } from "./Parts/About";
import { Contact } from "./Parts/Contact";
import { Header } from "./Parts/Header";
import { Hero } from "./Parts/Hero";
import { Services } from "./Parts/Services";
import { Stats } from "./Parts/Stats";
import { Footer } from "./Parts/Footer";

export function Home() {
 return (
   <>
    <Header/>
    <Hero/>
    <Stats/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
  </>
 ) 
}