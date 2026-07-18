import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function ResourcesPageHeader() {
  return (
    <UnifiedPageHeader
      title="Resources"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Resources" },
      ]}
    />
  );
}
