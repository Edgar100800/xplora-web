'use client';
import Image from "next/image";

import patagonia1 from "../../../../public/images/patagonia-1.webp";
import patagonia2 from "../../../../public/images/patagonia-2.webp";
import patagonia3 from "../../../../public/images/patagonia-3.webp";
import patagonia4 from "../../../../public/images/patagonia-4.webp";

import { useState, useEffect } from "react";

const images = [
    patagonia1, // Ruta de tus imágenes
    patagonia2,
    patagonia3,
    patagonia4,
];

export function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full  h-[300px] sm:h-[600px] overflow-hidden brightness-75">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        currentIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}