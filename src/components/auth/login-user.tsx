import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { FaGoogle, FaLock } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

function AuthLogin(props: { signIn: boolean }) {

  const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    console.log(data);
  }



  return (
    <article
      className={`auth-container left-0 ${!props.signIn ? "transform translate-y-full sm:translate-y-0 sm:translate-x-full opacity-0 z-0" : ""
        }`}
    >
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="auth-title">Iniciar Sesión</h1>

        <div className='flex justify-center items-center px-2 bg-gray-200 w-full rounded-full mt-3'>
          <div className="w-6 h-6 text-gray-400">
            <MdAlternateEmail className='w-full h-full' />
          </div>
          <input
            className="auth-input"
            type="email"
            placeholder="Correo"
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Correo inválido"
              }
            })}
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm md:text-md">{errors.email.message}</span>}

        <div className='flex justify-center items-center px-2 bg-gray-200 w-full rounded-full mt-3'>
          <div className="w-6 h-4 text-gray-400">
            <FaLock className='w-full h-full' />
          </div>
          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "Este campo es requerido",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            })}
          />
        </div>
        {errors.password && <span className="text-red-500 text-sm md:text-md">{errors.password.message}</span>}

        <a href="#" className="text-gray-800 text-xs my-3">
          ¿Has olvidado tu contraseña?
        </a>

        <button className="auth-button-filled">
          Iniciar Sesión
        </button>

        <button className='mt-4 flex justify-center items-center flex-col'>
          <p className="auth-divider">O inicia sesión con</p>
          <FaGoogle className="auth-icon" />
        </button>
      </form>
    </article>
  )
}

export default AuthLogin