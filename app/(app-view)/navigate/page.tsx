"use client";

import { useEffect, useState } from "react";
import { fetchStores } from "@/app/lib/api"; // Adjust the path as needed
import { Store } from "@/app/lib/definitions";

export default function Page() {
    const [stores, setStores] = useState<Store[]>([]);

    useEffect(() => {
        const getStores = async () => {
            try {
                const data = await fetchStores();
                setStores(data);
            } catch (error) {
                // Handle error if needed
            }
        };

        getStores();
    }, []);

    return (
        <div>
            <h1>Store Names</h1>
            <ul>
                {stores.map((store) => (
                    <li key={store.id}>{store.name}</li>
                ))}
            </ul>
        </div>
    );
}
