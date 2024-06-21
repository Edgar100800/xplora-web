"use client";

import { Category } from "../../lib/definitions";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import { NavigationCategories } from "@/app/lib/placeholder-data";
import { CategoriesBarProps } from "../../lib/definitions";

export function CategoriesBar({ className }: CategoriesBarProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        null
    );

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);
    };

    // useEffect to fetch and set categories
    useEffect(() => {
        const fetchCategories = async () => {
            // Simulate fetching data
            const fetchedCategories = [2, 7, 6, 1, 3, 4, 5].map(
                (id) => NavigationCategories[id]
            );
            setCategories(fetchedCategories);
            setSelectedCategory(fetchedCategories[0].id);
        };

        fetchCategories();
    }, []);

    return (
        <div
            className={clsx(
                "flex flex-row overflow-x-auto space-x-4 px-6 pt-2 pb-3 snap-x md:items-center md:justify-between md:w-full h-[64px] w-full border-b-2 border-gray-100 shadow-md",
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
