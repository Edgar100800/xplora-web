import React from "react";
import Image from "next/image";
import { Store } from "@/app/lib/definitions";
import testImage from "../../../public/images/test-image.jpg";

interface CardProps {
    store: Store;
}

const Card: React.FC<CardProps> = ({ store }) => {
    return (
        <div key={store.id}>
            <div className="relative w-full aspect-square  overflow-hidden rounded-2xl">
                <Image
                    src={testImage}
                    alt="Banner Image"
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="pt-3">
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
            </div>
        </div>
    );
};

export default Card;
