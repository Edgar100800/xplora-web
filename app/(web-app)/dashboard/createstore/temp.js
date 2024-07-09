"use client";
import React from "react";

const InputField = ({ label, type, register, required, placeholder, errors, name, step }) => (
  <div className="mb-4">
    <label htmlFor={name} className="text-slate-500 mb-2 block text-sm">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        {...register(name, { required: { value: required, message: `${label} is required` } })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        step={step}
        {...register(name, { required: { value: required, message: `${label} is required` } })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder={placeholder}
      />
    )}
    {errors[name]?.message && typeof errors[name].message === 'string' && (
      <span className="text-red-500 text-xs">{errors[name].message}</span>
    )}
  </div>
);

export default InputField;
