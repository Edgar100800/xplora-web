import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { FaGoogle, FaLock, FaUser } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

function AuthRegister(props: { signIn: boolean }) {

  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    console.log(data);
  }

  return (
    <article
      className={`auth-container ${!props.signIn ? "transform translate-x-full opacity-100 z-10" : "opacity-0"
        }`}
    >
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="auth-title">Crear cuenta</h1>

        <div className='flex justify-center items-center px-4 bg-gray-200 w-full rounded-full mt-3'>
          <div className="w-6 h-4 text-gray-400">
            <FaUser className='w-full h-full' />
          </div>
          <input
            className="auth-input"
            type="text"
            placeholder="Usuario"
            {...register("username", {
              required: "Este campo es requerido",
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres"
              }
            })}
          />
        </div>
        {errors.username && <span className="text-red-500 text-sm md:text-md">{errors.username.message}</span>}

        <div className='flex justify-center items-center px-4 bg-gray-200 w-full rounded-full mt-3'>
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

        <div className='flex justify-center items-center px-4 bg-gray-200 w-full rounded-full mt-3'>
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

        <button className="auth-button-filled mt-3">
          Registrarse
        </button>

        <button className='mt-4 flex justify-center items-center flex-col'>
          <p className="auth-divider">O regístrate con</p>
          <FaGoogle className="auth-icon" />
        </button>
      </form>
    </article>
  )
}

export default AuthRegister