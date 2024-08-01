export type Reference = {
  id: number;
  ref: string;
  prevref: string;
  nextref: string;
};

export function getStoreFormList(): Reference[] {
  return [
    {
      id: 0,
      ref: "/",
      prevref: "",
      nextref: "/store-name",
    },
    // {
    //   id: 1,
    //   ref: "/about-your-place",
    //   prevref: "",
    //   nextref: "/structure",
    // },
    {
      id: 1,
      ref: "/store-name",
      prevref: "/",
      nextref: "/store-type",
    },
    // {
    //   id: 2,
    //   ref: "/structure",
    //   prevref: "/store-name",
    //   nextref: "/store-type",
    // },
    {
      id: 2,
      ref: "/store-type",
      prevref: "/store-name",
      nextref: "/location",
    },
    {
      id: 3,
      ref: "/location",
      prevref: "/store-type",
      nextref: "/contact",
    },
    {
      id: 4,
      ref: "/contact",
      prevref: "/location",
      nextref: "",
    },
  ];
}

//  ------ Definition for the location parameters from the store form ------
export const LOCATION_FORM_STORE_STATUS = {
  IDLE: "idle", // al ingresar
  ADDRESS_INFORMATION: "address_loading", // cuando se esta buscando la direccion
  COORDINATES_INFORMATION: "address_ready", // cuando la direccion han sido confirmadas
  COORDS_READY: "coords_ready", // cuando las coordenadas han sido confirmadas
  FINISHED: "finished", // cuando se ha terminado de llenar el formulario
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type LocationFormStoreStatusType = typeof LOCATION_FORM_STORE_STATUS[keyof typeof LOCATION_FORM_STORE_STATUS];
