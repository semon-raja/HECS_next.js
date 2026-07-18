import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function CareerPageHeader() {
  return (
    <UnifiedPageHeader 
      title="Career" 
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Career" }
      ]} 
    />
  );
}
