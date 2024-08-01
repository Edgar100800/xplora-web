'use client';

import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from 'react-hook-form';
import { useCounterStoreForm } from '@/hooks/use-new-store-form';
import { useStoreFormNavigationBar } from '@/hooks/use-new-store-navigation-bar';

function StoreName() {
  const { store, updateStore } = useCounterStoreForm();
  const { nextAvailable, setNextAvailable, handleNextButtomChange } = useStoreFormNavigationBar();
  const { register, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

  // Observa los cambios en los campos del formulario
  const storeNameValue = watch('storeName', "");

  useEffect(() => {
    // Actualiza la disponibilidad del botón "Siguiente" basado en la validez del formulario
    if (storeNameValue.trim() !== '') {
      setNextAvailable(true);
      updateStore({ name: storeNameValue });
    } else {
      updateStore({ name: "" });
      setNextAvailable(false);
    }
  }, [storeNameValue, setNextAvailable, updateStore]);

  return (
    <Card className="rounded-lg border-none">
      <CardContent className="p-0">
        <div className="flex flex-col items-center overflow-y-auto h-[calc(100vh-128px)] pt-8">
          <div className="max-w-[640px]">
            <h1 className="text-[26px] leading-[25px] text-left md:text-5xl font-normal text-gray-900 mb-4 px-6">
              ¿Cuál es el nombre de tu tienda?
            </h1>
            
            <form className="px-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nombre de la tienda"
                  value={store.name}
                  {...register("storeName", { required: "El nombre de la tienda es obligatorio" })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.storeName?.message && <span className="text-red-500">{errors.storeName.message.toString()}</span>}
              </div>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StoreName;
