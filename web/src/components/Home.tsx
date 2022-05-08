import { Header } from "./Parts/Header";
import { Hero } from "./Parts/Hero";
import { Services } from "./Parts/Services";
import { Stats } from "./Parts/Stats";

export function Home() {
 return (
  <main className="bg-main-300 ">
    <Header/>
    <Hero/>
    <Stats/>
    <Services/>
  </main>
 ) 
}