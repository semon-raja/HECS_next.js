import TurnkeySolutions from "@/components/InnerPages/Product/TurnkeySolutions/TurnkeySolutions"
import UnifiedPageHeader from "@/components/UI/PageHeader/PageHeader";
export const metadata = {
  title: "Turnkey Solutions | HECS",
  description: "HECS Turnkey Solutions",
};

export default function TurnkeySolutionsPage() {
    return (
        <>
            <UnifiedPageHeader
                title="Turnkey Solutions"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/product" },
                    { label: "Turnkey Solutions" },
                ]}
            />
            <TurnkeySolutions />
        </>
    );
}