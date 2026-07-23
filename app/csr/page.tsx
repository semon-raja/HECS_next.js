import type { Metadata } from "next";
import PageHeader from "@/components/InnerPages/CSR/PageHeader";
import CSRBanner from "@/components/InnerPages/CSR/CSRBanner/CSRBanner";
import CSRIntro from "@/components/InnerPages/CSR/CSRIntro/CSRIntro";
import CSRMessage from "@/components/InnerPages/CSR/CSRMessage/CSRMessage";
import CSRFocusSection from "@/components/InnerPages/CSR/CSRFocusSection/CSRFocusSection";
import SDGGoals from "@/components/InnerPages/CSR/SDGGoals/SDGGoals";
import CSRProjects from "@/components/InnerPages/CSR/CSRProjects/CSRProjects";
import SectionAnimObserver from "@/components/SectionAnimObserver";
import {
  ceoMessage,
  commitmentMessage,
  educationFocus,
  environmentFocus,
  safeWaterMessage,
} from "@/data/data";

export const metadata: Metadata = {
  title: "CSR - HECS | India's Leading Environmental Solutions Provider",
  description:
    "Explore HECS corporate social responsibility initiatives in education, water sustainability, environmental awareness, and community welfare.",
};

export default function CSRPage() {
  return (
    <>
      <PageHeader />
      <CSRBanner />
      <CSRIntro />
      <CSRMessage {...ceoMessage} />
      <CSRFocusSection {...educationFocus} />
      <CSRMessage {...commitmentMessage} />
      <CSRFocusSection {...environmentFocus} />
      <CSRMessage {...safeWaterMessage} />
      <SDGGoals />
      <CSRProjects />
      <SectionAnimObserver />
    </>
  );
}