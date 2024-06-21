"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import MapOutline from "../../../public/logos/map-outline.svg";
import MapSolid from "../../../public/logos/map-solid.svg";
import MapPinOutline from "../../../public/logos/map-pin-outline.svg";
import MapPinSolid from "../../../public/logos/map-pin-solid.svg";
import MagnifyingGlass from "../../../public/logos/magnifying-glass.svg";
import UserCicleSolid from "../../../public/logos/user-circle-solid.svg";
import UserCircleOutline from "../../../public/logos/user-circle-outline.svg";

const links = [
    {
        name: "Xplora",
        href: "/home/explore",
        icon: MagnifyingGlass,
        icon_selected: MagnifyingGlass,
    },

    {
        name: "Mapa",
        href: "/home/map",
        icon: MapOutline,
        icon_selected: MapSolid,
    },
    {
        name: "Navigation",
        href: "/home/navigate",
        icon: MapPinOutline,
        icon_selected: MapPinSolid,
    },
    {
        name: "Perfil",
        href: "/home/profile",
        icon: UserCircleOutline,
        icon_selected: UserCicleSolid,
    },
    
];

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-p-white border-t-2 p-4 text-center">
            <nav className="flex justify-around">
                {links.map((link) => {
                    const Icon = (pathname === link.href)?link.icon_selected:link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx("flex flex-col  items-center w-12", {
                                "text-p-blue": pathname === link.href,
                                "text-p-grey": pathname !== link.href,
                            })}
                        >
                            <Icon className="h-7 w-7" />
                            {/* <span className="text-xs">{link.name}</span> */}
                        </Link>
                    );
                })}
            </nav>
            {/* <p>Footer</p> */}
        </footer>
    );
}
