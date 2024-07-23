"use client";

import React, { useState } from "react";
import AuthLogin from "@/components/auth/login-user";
import AuthRegister from "@/components/auth/register-user";
import "../globals.css";


export default function Login() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      <main className="bg-white rounded-lg shadow-2xl relative overflow-hidden w-11/12 md:w-4/5 lg:w-3/5 max-w-full min-h-[500px]">
        <AuthRegister signIn={signIn} />
        <AuthLogin signIn={signIn} />

        <article
          className={`auth-container w-1/2 left-1/2 overflow-hidden  z-20 ${!signIn ? "transform translate-x-[-100%] z-20" : ""}`}
        >
          <section
            className={`bg-gradient-radial from-blue-900 to-p-blue text-white absolute left-[-100%] h-full w-[200%] transform transition-transform duration-75 ease-in-out ${!signIn ? "translate-x-1/2" : ""
              }`}
          >
            <div
              className={`auth-overlay ${!signIn ? "translate-x-0" : "translate-x-[-20%]"
                }`}
            >
              <h1 className="auth-title">Es un gusto conocerte!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                Ingresa tus datos para utilizar todas las características de Xplora
              </p>
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
              <h1 className="auth-title">Bienvenido de vuelta!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                Inicia sesión con tus datos personales para mantenerte conectado con Xplora
              </p>
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

