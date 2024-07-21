"use client";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputTextField } from "@/components/forms/input-forms-field";


function CreateStorePage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    setError("");
    setMessage("");
    console.log(data);
    const res = await fetch('/api/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      setMessage("Store created successfully!");
      router.push('/dashboard'); // Redirect to the stores list or wherever appropriate
    } else {
      setError(result.error || "Something went wrong");
    }
  });

  return (
    <div className="h-full flex justify-center items-center bg-slate-800">
      <form onSubmit={onSubmit} className="w-1/4">
        {error && (
          <p className="bg-red-500 text-sm text-white p-3 rounded mb-2">{error}</p>
        )}
        {message && (
          <p className="bg-green-500 text-sm text-white p-3 rounded mb-2">{message}</p>
        )}
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Create Store</h1>
        
        <InputTextField 
          label="Name"
          register={register}
          required={true}
          placeholder="Store Name"
          errors={errors}
          name="name"
        />

        <InputTextField 
          label="Description"
          register={register}
          required={true}
          placeholder="Store Description"
          errors={errors}
          name="description"
          size={3}
        />

        <label htmlFor="categoryId" className="text-slate-500 mb-2 block text-sm">
          Category ID:
        </label>
        <input
          type="number"
          {...register("categoryId", { required: { value: true, message: "Category ID is required" } })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Category ID"
        />
        {errors.categoryId?.message && typeof errors.categoryId.message === 'string' && (
          <span className="text-red-500 text-xs">{errors.categoryId.message}</span>
        )}

        <label htmlFor="rating" className="text-slate-500 mb-2 block text-sm">
          Rating:
        </label>
        <input
          type="number"
          step="0.1"
          {...register("rating", { required: { value: true, message: "Rating is required" } })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Rating"
        />
        {errors.rating?.message && typeof errors.rating.message === 'string' && (
          <span className="text-red-500 text-xs">{errors.rating.message}</span>
        )}


        <InputTextField 
          label="User ID:"
          register={register}
          required={true}
          placeholder="User id"
          errors={errors}
          name="userId"
        />


        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Create Store
        </button>
      </form>
    </div>
  );
}

export default CreateStorePage;
