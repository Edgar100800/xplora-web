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
      ref: "/about-your-place",
      prevref: "",
      nextref: "/structure",
    },
    {
      id: 1,
      ref: "/structure",
      prevref: "/about-your-place",
      nextref: "/store-type",
    },
    {
      id: 2,
      ref: "/store-type",
      prevref: "/structure",
      nextref: "/location",
    },
    {
      id: 3,
      ref: "/location",
      prevref: "/store-type",
      nextref: "",
    },
  ];
}
