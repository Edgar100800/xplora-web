export type Store = {
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    contact: {
        phone: string;
        email: string;
    };
    business_hours: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    };
};


export type Category = {
    id: number;
    name: string;
    // description: string;
    icon: string;
};

export interface CategoriesBarProps {
    className?: string;
}