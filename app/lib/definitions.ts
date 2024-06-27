// export type Store = {
//     id: number;
//     name: string;
//     address: {
//         street: string;
//         city: string;
//         state: string;
//         zip: string;
//     };
//     contact: {
//         phone: string;
//         email: string;
//     };
//     business_hours: {
//         monday: string;
//         tuesday: string;
//         wednesday: string;
//         thursday: string;
//         friday: string;
//         saturday: string;
//         sunday: string;
//     };
// };

export interface Store {
    id: number;
    name: string;
    description: string;
    category: number;
    rating: number;
    priority: number;
    is_premium: boolean;
    location: {
        coords: {
            latitude: number;
            longitude: number;
        };
        address_reference: string | null;
        country: string;
        address: string;
    };
    close_time: string | null;
    open_time: string | null;
    contact: {
        phone: string;
        email: string;
    };
    images: {
        banner: string;
        logo: string;
        gallery: {
            store: number;
            image: string;
        }[];
    };
}


export type Category = {
    id: number;
    name: string;
    type: string;
    popularity: number;
    amount_of_currency: number;
    icon: string;
};


export type CategoryBarIcons = {
    id: number;
    name: string;
    icon: string;
};
export interface CategoriesBarProps {
    className?: string;
}