import Hero from "@/components/Homepage/Hero/Hero";
import About from "@/components/Homepage/About/About";
import Services from "@/components/Homepage/Services/Services";
import Achievements from "@/components/Homepage/Achievements/Achievements";
import Partners from "@/components/Homepage/Partners/Partners";
import RecentWork from "@/components/Homepage/RecentWork/RecentWork";
import News from "@/components/Homepage/News/News";
import Contact from "@/components/Homepage/Contact/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Achievements />
    <Partners />
    <RecentWork />
    <News />
    <Contact />
    </>
  );
}