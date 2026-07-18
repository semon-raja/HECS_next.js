import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";

export default function CSRPageHeader() {
  return (
    <UnifiedPageHeader
      title="CSR"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "CSR" },
      ]}
    />
  );
}
