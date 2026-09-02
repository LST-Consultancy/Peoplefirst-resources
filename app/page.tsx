import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import RecruitingServices from "@/components/sections/RecruitingServices";
import Industries from "@/components/sections/Industries";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUs from "@/components/sections/WhyUs";
import BuildYourTeam from "@/components/sections/BuildYourTeam";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <RecruitingServices />
      <Industries />
      <HowItWorks />
      <WhyUs />
      <BuildYourTeam />
      <Faq />
      <Contact />
    </>
  );
}
