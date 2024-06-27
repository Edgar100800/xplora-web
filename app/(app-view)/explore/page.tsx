"use client";
import { useEffect, useState } from "react";
import api from "../../api/test-api.json";
import Image from "next/image";
import testImage from "../../../public/images/test-image.jpg";
import { Store } from "../../lib/definitions";
import { CategoriesBar } from "@/app/ui/movile-app/categories-bar";
import Card from "@/app/ui/movile-app/card";
import { fetchStoresByCategory } from "@/app/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const [stores, setStores] = useState<Store[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchStores = async (categoryId: number) => {
            try {
                const data = await fetchStoresByCategory(categoryId);
                setStores(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (searchParams.has("category")) {
            const categoryId = Number(searchParams.get("category"));
            fetchStores(categoryId);
        }
    }, [searchParams]);

    return (
        <div className="relative">
            <CategoriesBar className="fixed z-10 top-[63px] bg-p-white" />
            <ul className="cards">
                {stores.map((store) => (
                    <Card key={store.id} store={store} />
                ))}
            </ul>
        </div>
    );
}
