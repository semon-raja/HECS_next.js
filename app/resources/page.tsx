import type { Metadata } from "next";
import ResourcesPageHeader from "@/components/InnerPages/Resources/PageHeader";
import News from "@/components/Homepage/News/News";
import Blog from "@/components/InnerPages/Resources/Blog/Blog";


export const metadata: Metadata = {
    title: "Environmental Solutions Provider",
    description: "Explore HECS resources — news, events, blogs, regulations, and more.",
};

export default function ResourcesPage() {
    return (
        <>
            <ResourcesPageHeader />
            <div style={{ background: "#fff", height: "48px" }} />
            <News />
            <Blog />
        </>
    );
}
