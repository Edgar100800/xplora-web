"use client";

import { Button } from "../ui/button";
import { useCounterStoreForm } from "@/hooks/use-new-store-form";
import { useStoreFormNavigationBar } from "@/hooks/use-new-store-navigation-bar";
import { getStoreFormList, Reference } from "@/lib/newstore-form-definitions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FooterFormStore() {
  const router = useRouter();
  // Variables to manage the routes and the store information
  const { counter, store, addToCounter, subtractToCounter, resetCounter } =
    useCounterStoreForm();
  // Variables to manage the next button
  const { nextAvailable, setNextAvailable } = useStoreFormNavigationBar();
  const formroutes: Reference[] = getStoreFormList();
  const actualroute = formroutes[counter];

  const handleNextButtonClick = () => {
    setNextAvailable(!nextAvailable);
    addToCounter();
    router.push("/new-store" + actualroute.nextref);
  };

  const handleBackButtonClick = () => {
    
    if (!nextAvailable){
      setNextAvailable(!nextAvailable);
    }
    subtractToCounter();
    router.push("/new-store" + actualroute.prevref);
  };

  return (
    <div className="z-20 w-full bg-background shadow backdrop-blur">
      <div className="mx-4 md:mx-8 flex h-16 items-center">
        {/* TEST */}
        <p>{actualroute.id}-</p>
        <p>{counter}</p>
        {/* TEST */}

        {/* Back Button */}
        {counter > 0 && (
          <Button
            className="bg-inherit text-black underline hover:bg-slate-100 mr-auto"
            onClick={handleBackButtonClick}
          >
            Atrás
          </Button>
        )}
        
        {/* Next Button */}
        {counter < formroutes.length - 1 && (
          <Button
            onClick={handleNextButtonClick}
            className={cn({
              "bg-pink-500 hover:bg-pink-600 text-white ml-auto": counter === 0,
              "bg-inherit text-black underline hover:bg-slate-100 ml-auto":
                counter !== 0,
            })}
            disabled={!nextAvailable}
          >
            {counter === 0 ? "Comenzar" : "Siguiente"}
          </Button>
        )}

        {/* TEST */}
        <p>{nextAvailable.toString()}</p>
        <button onClick={() => console.log(store)}>TEST</button>
        {/* TEST */}

        {/* Submit Button */}
        {counter === formroutes.length - 1 && (
          <Button onClick={() => console.log("Submit")} disabled={!nextAvailable}>Subir</Button>
        )}
      </div>
    </div>
  );
}

export default FooterFormStore;
