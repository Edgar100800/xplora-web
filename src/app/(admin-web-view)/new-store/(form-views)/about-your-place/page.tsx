import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
function AboutYourPlace() {
  return (
    <Card className="rounded-lg border-none ">
      <CardContent className="p-0">
        {/* <div className="flex justify-center items-center min-h-[calc(100vh-128px)]"> */}
        <div className="flex flex-col items-center overflow-y-auto h-[calc(100vh-128px)] pt-8 ">
          <div className="flex flex-col md:flex-row items-center px-14 md:px-44 gap-10">
            {/* Message */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-gray-500 text-lg mb-4">Paso 1</h2>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Describe tu tienda
              </h1>
              <p className="text-gray-700 text-lg">
                En este paso, te preguntaremos qué tipo de tienda tienes y si
                los clientes podrán visitar la tienda física, comprar en línea,
                o ambas opciones. A continuación, indícanos la ubicación de la
                tienda, los horarios de atención, y qué tipo de productos
                ofreces.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/coffee-shop.png" // Update this path to the correct image path
                alt="Descripción del espacio"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AboutYourPlace;
