"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "../../globals.css";


export default function Login() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      <div className="bg-white rounded-lg shadow-2xl relative overflow-hidden w-[678px] max-w-full min-h-[400px]">
        {/* Sign Up Container */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out righ w-1/2 ${!signIn ? "transform translate-x-full opacity-100 z-10" : ""
            }`}
        >
          <form className="bg-white flex items-center justify-center flex-col p-12 h-full text-center">
            <h1 className="font-bold">Crear cuenta</h1>
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="password"
              placeholder="Password"
            />
            <button className="rounded-full border border-p-blue bg-p-blue text-white font-bold p-3 px-11 uppercase transition-transform duration-75 active:transform active:scale-95 focus:outline-none">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Container */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 ${!signIn ? "transform translate-x-full opacity-0 z-0" : ""
            }`}
        >
          <form className="bg-white flex items-center justify-center flex-col p-12 h-full text-center">
            <h1 className="font-bold">Iniciar Sesión</h1>
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="password"
              placeholder="Password"
            />
            <a href="#" className="text-gray-800 text-sm my-3">
              Forgot your password?
            </a>
            <button className="rounded-full border border-p-blue bg-p-blue text-white font-bold p-3 px-11 uppercase transition-transform duration-75 active:transform active:scale-95 focus:outline-none">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100 ${!signIn ? "transform translate-x-[-100%]" : ""
            }`}
        >
          <div
            className={`bg-gradient-to-r from-p-blue to-p-blue text-white absolute left-[-100%] h-full w-[200%] transform transition-transform duration-600 ease-in-out ${!signIn ? "translate-x-1/2" : ""
              }`}
          >
            <div
              className={`absolute w-1/2 h-full flex items-center justify-center flex-col p-8 text-center transition-transform duration-600 ease-in-out ${!signIn ? "translate-x-0" : "translate-x-[-20%]"
                }`}
            >
              <h1 className="font-bold">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="rounded-full border border-white bg-transparent text-white font-bold p-3 px-11 uppercase transition-transform duration-75 active:transform active:scale-95 focus:outline-none"
                onClick={() => toggle(true)}
              >
                Sign In
              </button>
            </div>
            <div
              className={`absolute right-0 w-1/2 h-full flex items-center justify-center flex-col p-8 text-center transition-transform duration-600 ease-in-out ${!signIn ? "translate-x-[20%]" : "translate-x-0"
                }`}
            >
              <h1 className="font-bold">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                Enter Your personal details and start journey with us
              </p>
              <button
                className="rounded-full border border-white bg-transparent text-white font-bold p-3 px-11 uppercase transition-transform duration-75 active:transform active:scale-95 focus:outline-none"
                onClick={() => toggle(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

