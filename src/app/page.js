import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import VideoCard from "./components/video/VideoCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#e6e0f4]">
      <Navbar/>
      <Hero/>
    </main>
  );
}
