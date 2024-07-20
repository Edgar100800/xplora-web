
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "./product-card";

function AllStoreProducts() {
  return (
    <Card className="h-1/2 rounded-lg border-none">
        <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col w-full relative">
            <ul className="cards">
              
            <ProductCard /><ProductCard />
            <ProductCard />
            <ProductCard />
            </ul>
            
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AllStoreProducts