import Section from "./components/avatar/Section";
import Feature from "./components/features/Feature";
import Footer from "./components/footer/Footer";
import GridHero from "./components/gridHero/GridHero";
import Hero from "./components/hero/Hero";
import Main from "./components/howSection/Main";
import Navbar from "./components/navbar/Navbar";
import VoiceSection from "./components/voice/VoiceSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#e6e0f4]">
      <Navbar/>   
      <Hero/>
      <GridHero/>
      <Main/>
      <Section/>
      <VoiceSection/>
      <Feature/>
      <Footer/>
    </main>
  );
}
