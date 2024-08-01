"use client";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputTextField } from "@/components/forms/input-forms-field";
import { Button } from "@/components/ui/button";
import { useCounterStoreForm } from "@/hooks/use-new-store-form";

function CreateStorePage() {

  const {resetCounter} = useCounterStoreForm();

  useEffect(() => {
    resetCounter();
  }
  ,[]);
  return (
    <div className="h-full flex justify-center items-center ">
       <div>
        <p>Empieza a crear tu tienda con Xplora</p>
        {/* <Button>
          Crear tienda
        </Button> */}
       </div>
    </div>
  );
}

export default CreateStorePage;
