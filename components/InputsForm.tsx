import React from 'react'
import { FieldErrors, UseFormRegister } from "react-hook-form";


interface InputTextFieldProps {
    label: string;
    register: UseFormRegister<any>;
    required: boolean;
    placeholder: string;
    errors: FieldErrors;
    name: string;
    size ?: number;
  }
export const InputTextField : React.FC<InputTextFieldProps> = ({ label, register, required, placeholder, errors, name, size}) => (
    <div className="mb-4">
      <label htmlFor={name} className="text-slate-500 mb-2 block text-sm">
        {label}
      </label>
      {
        size && size > 0 ? (
          <textarea
            typeof= "text"
            {...register(name, { required: { value: required, message: `${label} is required` } })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder={placeholder}
            rows={size} 
          />
        ) : (
  
          <input
            typeof= "text"
            {...register(name, { required: { value: required, message: `${label} is required` } })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder={placeholder}
          />
        )
      }
      
      {errors[name]?.message && typeof errors[name].message === 'string' && (
        <span className="text-red-500 text-xs">{errors[name].message}</span>
      )}
    </div>
  );

