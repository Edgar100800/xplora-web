import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Store } from "@/app/lib/definitions";
import LeftArrow from "../../../public/icons/chevron-left.svg";
import RightArrow from "../../../public/icons/chevron-right.svg";
import "../../globals.css"; // Import the custom CSS file

interface CardProps {
    store: Store;
}

const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
];

const Card: React.FC<CardProps> = ({ store }) => {
    const galleryRef = useRef<HTMLAnchorElement | null>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollLeft = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: -255, behavior: "smooth" });
        }
    };

    const scrollRight = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: 255, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        handleScroll(); // Check initial state
        const currentGalleryRef = galleryRef.current;
        if (currentGalleryRef) {
            currentGalleryRef.addEventListener("scroll", handleScroll);
            return () => {
                if (currentGalleryRef) {
                    currentGalleryRef.removeEventListener(
                        "scroll",
                        handleScroll
                    );
                }
            };
        }
    }, []);

    return (
        <div key={store.id} className="group z-0 ">
            {/* Image Gallery */}
            <div className="relative">
                {showLeftArrow && (
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-lg focus:outline-none opacity-0 group-hover:opacity-50 group-hover:hover:opacity-100 transition-opacity duration-300"
                        onClick={scrollLeft}
                    >
                        <LeftArrow />
                    </button>
                )}

                <Link
                    ref={galleryRef}
                    href={"/home/card"}
                    className="flex w-full snap-x overflow-x-scroll hide-scrollbar rounded-2xl space-x-0"
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="object-cover snap-center aspect-square  flex-shrink-0"
                        />
                    ))}
                </Link>

                {showRightArrow && (
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-lg focus:outline-none opacity-0 group-hover:opacity-50 group-hover:hover:opacity-100 transition-opacity duration-300"
                        onClick={scrollRight}
                    >
                        <RightArrow />
                    </button>
                )}
            </div>

            {/* Card Information */}
            <div className="pt-3">
                <Link href={"/home/card"}>
                    <h2 className="text-xl font-semibold">{store.name}</h2>
                    <p className="text-gray-600  mt-1">
                        {store.address.street}, {store.address.city},{" "}
                        {store.address.state} {store.address.zip}
                    </p>
                    <p className="text-gray-600  mt-1">
                        Phone: {store.contact.phone}
                    </p>
                    <p className="text-gray-600 mt-1">
                        Email: {store.contact.email}
                    </p>
                    <p className="text-gray-600 font-semibold mt-2">Price:</p>
                </Link>
            </div>
        </div>
    );
};

export default Card;
