import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function ProductPageHeader() {
  return (
    <UnifiedPageHeader 
      title="Our Products & Services" 
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Products & Services" }
      ]} 
    />
  );
}
