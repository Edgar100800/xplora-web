"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const router = useRouter();
    const { register, handleSubmit , formState: { errors }} = useForm();
    const [error, setError] = useState("");

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (data.password !== data.confirmPassword) {
                setError("Passwords do not match");
                return;
            }
            const response = await axios.post(
                "/api/auth/register",
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (response.status === 201) {
                
                router.push("/auth/login");
            }
        } catch (err: any) {
            setError(
                err.response?.data?.error ||
                    "An error occurred. Please try again."
            );
            console.error(err);
        }
    });
    return (
        <div className="h-full flex flex-col justify-center items-center bg-slate-900">
            <form
                action=""
                onSubmit={onSubmit}
                className="flex flex-col w-1/4 gap-2"
            >   
                {error && <span className="text-red-500 text-xs">{error}</span>}
                <h3 className="text-3xl text-white"> Register </h3>
                <label htmlFor="username" className="text-gray-400 font-medium text-sm	"> Username </label>
                
                <input
                    type="text"
                    {...register("username", { required: {value:true, message:"Username is required"} })}
                    className="p-3 rounded-md border-2 border-gray-200 bg-slate-700 text-gray-400 w-full"
                    placeholder="Username"
                />
                {errors.username && <span className="text-red-500 text-xs">{String(errors.username.message)}</span>}

                <label htmlFor="email" className="text-gray-400 font-medium text-sm	"> Email </label>
                <input
                    type="email"
                    {...register("email", { required: {value:true, message: "Email is required"} })}
                    className="p-3 rounded-md border-2 border-gray-200 bg-slate-700 text-gray-400 w-full"
                    placeholder="Email"
                />
                {errors.email && <span className="text-red-500 text-xs"> {String(errors.email.message)}</span>}

                <label htmlFor="password" className="text-gray-400 font-medium text-sm	"> Password </label>
                <input
                    type="password"
                    {...register("password", { required: {value:true, message:"Password is required"}, maxLength: 20 })}
                    className="p-3 rounded-md border-2 border-gray-200 bg-slate-700 text-gray-400 w-full"
                    placeholder="*********"
                />
                {errors.password && <span className="text-red-500 text-xs">{String(errors.password.message)}</span>}

                <label htmlFor="confirmPassword" className="text-gray-400 font-medium text-sm"> Validate Password </label>
                <input
                    type="password"
                    {...register("confirmPassword", {
                        required: {value:true, message:"Password is required"},
                        maxLength: 20,
                    })}
                    className="p-3 rounded-md border-2 border-gray-200 bg-slate-700 text-gray-400 w-full"
                    placeholder="*********"
                />
                {errors.confirmPassword && <span className="text-red-500 text-xs">{String(errors.confirmPassword.message)}</span>}

                <button className="p-3 mt-4 w-full text-white font-bold	 bg-sky-700 rounded-md ">
                    
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;
