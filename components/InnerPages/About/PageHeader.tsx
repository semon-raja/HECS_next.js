import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function PageHeader() {
  return (
    <UnifiedPageHeader 
      title="About Us" 
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" }
      ]} 
    />
  );
}