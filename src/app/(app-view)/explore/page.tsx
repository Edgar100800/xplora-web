"use client";
import { useEffect, useState } from "react";
import api from "@/lib/test-api.json";
import { Store } from "../../../lib/definitions";
import { CategoriesBar } from "@/components/movile-app/categories-bar";
import Card from "@/components/movile-app/card";

export default function Page() {
    const [stores, setStores] = useState<Store[]>(api.stores);

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
