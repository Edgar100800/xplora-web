'use client';

import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from 'react-hook-form';
import { useCounterStoreForm } from '@/hooks/use-new-store-form';
import { useStoreFormNavigationBar } from '@/hooks/use-new-store-navigation-bar';

function ContactInfoStore() {
  const { store, updateStore } = useCounterStoreForm();
  const { nextAvailable, setNextAvailable } = useStoreFormNavigationBar();
  const { register, watch, formState: { errors, isValid } } = useForm({
    defaultValues: {
      storePhone: store.contact?.phone || '',
      storeEmail: store.contact?.email || ''
    },
    mode: 'onChange'
  });

  // Observa los cambios en los campos del formulario
  const storePhoneValue = watch('storePhone');
  const storeEmailValue = watch('storeEmail');

  useEffect(() => {
    // Verifica si ambos campos han sido completados y son válidos
    if (storePhoneValue.trim() !== '' && storeEmailValue.trim() !== '' && isValid) {
      setNextAvailable(true);
      updateStore({ contact: { phone: storePhoneValue, email: storeEmailValue } });
    } else {
      setNextAvailable(false);
    }
  }, [storePhoneValue, storeEmailValue, isValid, setNextAvailable, updateStore]);

  return (
    <Card className="rounded-lg border-none">
      <CardContent className="p-0">
        <div className="flex flex-col items-center overflow-y-auto h-[calc(100vh-128px)] pt-8">
          <div className="max-w-[640px]">
            <h1 className="text-[26px] leading-[25px] text-left md:text-5xl font-normal text-gray-900 mb-4 px-6">
              Datos para ponernos en contacto
            </h1>
            
            <form className="px-6">
              <div className="mb-4">
                <p className="text-gray-500 text-lg mb-2">Número de contacto</p>
              
                <input
                  type="text"
                  placeholder="Número de contacto"
                  {...register("storePhone", {
                    required: "Un número de contacto es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "El número de contacto debe ser válido"
                    }
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.storePhone && <span className="text-red-500">{errors.storePhone.message}</span>}
              </div>
              <p className="text-gray-500 text-lg mb-2">Email de contacto</p>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email de contacto"
                  {...register("storeEmail", {
                    required: "Un email de contacto es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "El email debe ser válido"
                    }
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.storeEmail && <span className="text-red-500">{errors.storeEmail.message}</span>}
              </div>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactInfoStore;
