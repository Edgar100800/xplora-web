import { Button } from "../ui/button";
import { useCounter } from "@/hooks/use-new-store-form";
import { getStoreFormList, Reference } from "@/lib/newstore-form-list";
import Link from "next/link";

function FooterFormStore() {
  const { counter, addToCounter, subtractToCounter, resetCounter } = useCounter();
  const formroutes: Reference[] = getStoreFormList();
  const actualroute= formroutes[counter];
  
  return (
    <div className="z-20 w-full bg-background shadow backdrop-blur ">
      <div className="mx-4 md:mx-8 flex h-16 items-center">
        <p>{actualroute.id}-</p>
        <p>{counter}</p>
        {counter > 0 && (
          <Link href={"/new-store" + actualroute.prevref} className="mr-auto">
            <Button
              className="bg-inherit text-black underline hover:bg-slate-100"
              onClick={subtractToCounter}
            >
              Atrás
            </Button>
          </Link>
        )}
        {counter < formroutes.length - 1 && (
          <Link href={"/new-store" + actualroute.nextref} className="ml-auto">
            <Button onClick={addToCounter} disabled={counter!==actualroute.id}>Siguiente </Button>
          </Link>
        )}

        {counter === formroutes.length - 1  && (
            <Button onClick={()=>{console.log("Submmit")}} >Subir </Button>
        )}

      </div>
    </div>
  );
}

export default FooterFormStore;
