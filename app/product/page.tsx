import type { Metadata } from "next";
import PageHeader from "@/components/InnerPages/Product/PageHeader";
import ProductHero from "@/components/InnerPages/Product/ProductHero/ProductHero";
import ProductGrid from "@/components/InnerPages/Product/ProductGrid/ProductGrid";

export const metadata: Metadata = {
  title: "Our Products & Services — HECS | India's Leading Environmental Solutions Provider",
  description:
    "Explore HECS's comprehensive range of environmental products and services: Turnkey Solutions, Laboratory Services, Consultancy, O&M, Packaged STPs, and more.",
};

export default function ProductPage() {
  return (
    <>
      <PageHeader />
      <ProductHero />
      <ProductGrid />
    </>
  );
}
