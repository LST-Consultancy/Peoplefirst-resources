import type { Metadata } from "next";
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
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const siteUrl = "https://peoplefirstresources.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PeopleFirst Resources",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: "info@peoplefirstresources.com",
      sameAs: [
        "https://www.linkedin.com/company/peoplefirstresources/",
        "https://www.instagram.com/peoplefirstresources/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PeopleFirst Resources",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Service",
      serviceType: "Recruitment process outsourcing (RPO)",
      name: "Offshore recruiters and RPO for U.S. staffing firms",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "BusinessAudience", audienceType: "Staffing firms" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
