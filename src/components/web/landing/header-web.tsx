import React from "react";
import { signIn, useSession } from "next-auth/react";


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
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => signIn(undefined, { callbackUrl: "/explore" })}
                    >
                        Sign In
                    </button>
                    {/* <a
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
                    </a> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
