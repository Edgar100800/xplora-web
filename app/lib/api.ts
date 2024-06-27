import axios from "axios";
import { Category, Store } from "./definitions";

export const fetchStores = async (): Promise<Store[]> => {
    try {
        const response = await axios.get("http://localhost:8000/store/");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchStoresByCategory = async (number: number): Promise<Store[]> => {
    try {
        const response = await axios.get("http://localhost:8000/store/?category=" + number);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchCategoriesByPopularity = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(
            "http://localhost:8000/category/?ordering=-popularity"
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};



