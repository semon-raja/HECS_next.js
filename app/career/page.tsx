import type { Metadata } from "next";
import PageHeader from "@/components/InnerPages/Career/PageHeader";
import CareerOpenings from "@/components/InnerPages/Career/CareerOpenings/CareerOpenings";
import LifeAtHECS from "@/components/InnerPages/Career/LifeAtHECS/LifeAtHECS";
import Testimonials from "@/components/InnerPages/Career/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "Career — HECS | India's Leading Environmental Solutions Provider",
  description:
    "Join HECS — explore current openings, internships, and life at one of India's leading environmental solutions companies with 2000+ professionals worldwide.",
};

export default function CareerPage() {
  return (
    <>
      <PageHeader />
      <CareerOpenings />
      <LifeAtHECS />
      <Testimonials />
    </>
  );
}
