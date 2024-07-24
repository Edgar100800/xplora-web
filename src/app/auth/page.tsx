"use client";

import React, { useState } from "react";
import Image from "next/image";
import AuthLogin from "@/components/auth/login-user";
import AuthRegister from "@/components/auth/register-user";
import "../globals.css";


export default function Login() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="w-full h-auto sm:h-full flex justify-center items-center bg-gray-200">
      <main className="bg-white sm:rounded-lg shadow-2xl relative overflow-hidden w-full sm:w-11/12 md:w-4/5 lg:w-3/5 min-h-[100vh] max-w-full sm:min-h-[500px]">
        <AuthRegister signIn={signIn} />
        <AuthLogin signIn={signIn} />

        <article
          className={`auth-container sm:rounded-lg w-full sm:w-1/2 top-1/2 sm:left-1/2 sm:top-0 overflow-hidden z-20 ${!signIn ? "transform translate-y-[-100%] sm:translate-y-0 sm:translate-x-[-100%] z-20" : ""}`}
        >
          <section
            className={`bg-gradient-radial from-blue-900 to-p-blue text-white absolute left-[-100%] h-full w-[200%] transform transition-transform duration-75 ease-in-out ${!signIn ? "translate-x-1/2" : ""
              }`}
          >
            <div
              className={`auth-overlay ${!signIn ? "translate-x-0" : "translate-x-[-20%]"
                }`}
            >
              <div className="w-1/3 top-10 sm:top-16 mb-10">
                <Image src="/logos/Xplora.svg" alt="Xplora" width={500} height={500} />
              </div>
              <h1 className="auth-title">Es un gusto conocerte!</h1>
              <p className="text-md leading-5 tracking-wide mt-5 mb-8">
                Ingresa tus datos para utilizar todas las características de Xplora
              </p>
              <p className="text-sm font-light mb-3">¿Ya tienes una cuenta?</p>
              <button
                className="auth-button-unfilled"
                onClick={() => toggle(true)}
              >
                Iniciar Sesión
              </button>
            </div>

            <div
              className={`auth-overlay right-0 ${!signIn ? "translate-x-[20%]" : "translate-x-0"
                }`}
            >
              <div className="w-1/3 top-10 sm:top-16 mb-10">
                <Image src="/logos/Xplora.svg" alt="Xplora" width={500} height={500} />
              </div>
              <h1 className="auth-title">Bienvenido de vuelta!</h1>
              <p className="text-md leading-5 tracking-wide mt-5 mb-8">
                Inicia sesión con tus datos personales para mantenerte conectado con Xplora
              </p>
              <p className="text-sm font-light mb-3">¿Eres nuevo?</p>
              <button
                className="auth-button-unfilled"
                onClick={() => toggle(false)}
              >
                Regístrate
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

