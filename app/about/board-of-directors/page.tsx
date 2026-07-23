import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";
import BoardOfDirectors from "@/components/InnerPages/About/BoardOfDirectors/BoardOfDirectors";

export default function BoardOfDirectorsPage() {
  return (
    <>
      <UnifiedPageHeader
        title="Board of Directors"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Board of Directors" },
        ]}
      />
      <BoardOfDirectors />
    </>
  );
}
