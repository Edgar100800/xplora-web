"use client";

import { useState, useEffect, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { text } from "stream/consumers";
import LocationGoogleForms from "@/components/forms/location-google-form";
import LocationStoreInformation from "@/components/forms/location-store-information-form";
import { LOCATION_FORM_STORE_STATUS, LocationFormStoreStatusType } from "@/lib/newstore-form-definitions";


function StoreFormLocation() {
  const [appStatus, setAppStatus] = useState<LocationFormStoreStatusType>(LOCATION_FORM_STORE_STATUS.IDLE);


  return (
    <Card className="rounded-lg border-none ">
      <CardContent className="p-0">
        <div className="flex flex-col items-center overflow-y-auto h-[calc(100vh-128px)] pt-8 ">
          <div className="max-w-[640px]">
            <h1 className="text-[26px] leading-[25px] text-left md:text-5xl font-normal text-gray-900 mb-4 px-6">
              ¿Dónde se encuentra tu espacio?
            </h1>
            
            <LocationGoogleForms setAppStatus={setAppStatus} appStatus={appStatus}/>

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StoreFormLocation;
