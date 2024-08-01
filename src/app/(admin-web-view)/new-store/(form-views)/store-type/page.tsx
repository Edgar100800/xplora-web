"use client";
import { use, useState, useEffect } from "react";
import { Category } from "@/lib/definitions";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import { NavigationCategories } from "@/lib/categories-list";
import { Card, CardContent } from "@/components/ui/card";
import { useCounterStoreForm } from "@/hooks/use-new-store-form";
import { useStoreFormNavigationBar } from '@/hooks/use-new-store-navigation-bar';

const CategoryCard = ({icon,title,isSelected,onClick,}: {icon: string; title: string; isSelected: boolean; onClick: () => void;}) => (
  <div
    onClick={onClick}
    className={`flex flex-col w-full items-start p-6 border rounded-lg cursor-pointer transition-colors 
      ${isSelected ? "border-black bg-gray-100 border-2"  : "border-gray-300"
    }`}
  >
    <ReactSVG
      src={`/icons/${icon}.svg`}
      className={clsx(
        "w-[24px] h-[24px] transition-transform",
        isSelected ? "scale-110 drop-shadow-md" : "scale-100 "
      )}
    />
    <div className="text-lg font-medium">{title}</div>
  </div>
);

function StoreType() {
  const { nextAvailable, setNextAvailable, handleNextButtomChange } = useStoreFormNavigationBar();

  const { store, updateStore } = useCounterStoreForm();

  const [selectedCard, setSelectedCard] = useState<null | number>(store.category);
  
  useEffect(() => {
    if (selectedCard !== null) {
      setNextAvailable(true);
      updateStore({ category: selectedCard });
    } else {
      setNextAvailable(false);
      updateStore({ category: null });
    }
  }
  ,[selectedCard, setNextAvailable, updateStore]);

  const categories: Category[] = Object.values(NavigationCategories).map(
    (category) => ({
      id: category.id,
      name: category.name,
      icon: category.icon,
    })
  );
  return (
    <Card className="rounded-lg border-none">
      <CardContent className="p-0">
        <div className="flex flex-col items-center overflow-y-auto h-[calc(100vh-128px)] pt-8 ">
          <div className="max-w-[640px]">
            <h1 className="text-[26px] leading-[25px] text-left md:text-5xl font-normal text-gray-900 mb-4 px-6">
              ¿Cuál de estas opciones describe mejor tu tienda?
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 ">
              <ul className="cards-store-form">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    icon={category.icon}
                    title={category.name}
                    isSelected={selectedCard === category.id}
                    onClick={() => {
                      setSelectedCard(category.id),
                        updateStore({ category: category.id },
                        );
                        setNextAvailable(true);

                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StoreType;
