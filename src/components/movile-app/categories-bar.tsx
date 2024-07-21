"use client";

import { Category } from "@/lib/definitions";
import { useState, useEffect, Suspense } from "react";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import { NavigationCategories } from "@/lib/categories-list";
import { CategoriesBarProps } from "@/lib/definitions";
import { useRouter, useSearchParams } from "next/navigation";

import "@/app/globals.css";

function CategoriesBarComponent({ className }: CategoriesBarProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        null
    );

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);
        router.push(`?category=${categoryId}`);
    };

    // useEffect to fetch and set categories
    useEffect(() => {
        const fetchCategories = async () => {
            // Simulate fetching data
            const fetchedCategories = [2, 7, 6, 1, 3, 4, 5].map(
                (id) => NavigationCategories[id]
            );
            setCategories(fetchedCategories);

            if (searchParams.has("category")) {
                const categoryId = Number(searchParams.get("category"));
                setSelectedCategory(categoryId);
                router.push(`?category=${categoryId}`);
            } else {
                setSelectedCategory(fetchedCategories[0].id);
                router.push(`?category=${fetchedCategories[0].id}`);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div
            className={clsx(
                "flex flex-row overflow-x-auto space-x-4 px-6 pt-2 pb-3 snap-x md:items-center md:justify-between md:w-full h-[64px] w-full border-b-2 border-gray-100 shadow-md hide-scrollbar",
                className
            )}
        >
            {categories.map((category, index) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={clsx(
                        "flex flex-col items-center gap-[2px] ",
                        selectedCategory === category.id
                            ? "text-p-blue font-bold "
                            : "text-gray-400",
                        index === 0 ? "mr-3" : ""
                    )}
                >
                    <ReactSVG
                        src={`/icons/${category.icon}.svg`}
                        className={clsx(
                            "w-[24px] h-[24px] transition-transform",
                            selectedCategory === category.id
                                ? "scale-110 drop-shadow-md"
                                : "scale-100 "
                        )}
                    />

                    <p
                        className={clsx(
                            "text-sm h-[16px] whitespace-nowrap ",
                            selectedCategory === category.id ? "" : "text-sm ",
                            index === 0 ? "" : "min-w-20"
                        )}
                    >
                        {category.name}
                    </p>
                </button>
            ))}
        </div>
    );
}

export function CategoriesBar({ className }: CategoriesBarProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoriesBarComponent className={className} />
        </Suspense>
    );
}
