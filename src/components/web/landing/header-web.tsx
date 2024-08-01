import React from "react";

// import Xplora from "../../../../public/logos/Xplora.svg";
// import Xplora from "/public/logos/Xplora.svg";
// export default function Header() {
//     return (
//         <header className="bg-p-white py-4 px-6 text-center">
//             <div className="h-8 py-2 px-2 w-min rounded-md	 bg-p-blue ">
//                 <Xplora className="h-full w-20" />
//             </div>
//         </header>
//     );
// }

function Header() {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
                <div className="flex items-center">
                    {/* <div className="h-8 py-2 px-2 w-min rounded-md	 bg-p-blue ">
                        <Xplora className="h-full w-20" />
                    </div> */}
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        Events
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        Restaurants
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <a
                        href="/auth/login"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        Login
                    </a>
                    <a
                        href="/auth/register"
                        className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
