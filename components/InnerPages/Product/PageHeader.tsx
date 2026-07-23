import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function PageHeader() {
  return (
    <UnifiedPageHeader 
      title="Products & Services" 
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Products & Services" }
      ]} 
    />
  );
}
