import Link from "next/link";

// import PlaceholderContent from "@/components/demo/placeholder-content";
import AllStoreProducts from "@/components/products/all-products-from-store";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Dashboard() {
    return (
        <ContentLayout title="Products">
            <AllStoreProducts />
        </ContentLayout>
    );
}
