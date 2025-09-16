import { api } from "../index";
import { Package } from "../types";

export const getAll = async () => {
    const response  = await api.get<Package[]>("/packages");

    return response.data;
}