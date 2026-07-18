import PageHeader from "@/components/InnerPages/About/PageHeader";
import AboutHero from "@/components/InnerPages/About/AboutHero/AboutHero";
import History from "@/components/InnerPages/About/History/History";
import CEOMessage from "@/components/InnerPages/About/CEOMessage/CEOMessage";
import IMSPolicy from "@/components/InnerPages/About/IMSPolicy/IMSPolicy";
import SectionAnimObserver from "@/components/SectionAnimObserver";

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <AboutHero />
      <History />
      <CEOMessage />
      <IMSPolicy />
      <SectionAnimObserver />
    </>
  );
}
