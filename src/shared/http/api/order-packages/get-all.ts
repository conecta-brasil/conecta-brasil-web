import { api } from "..";
import { OrderPackage } from "../types/order-package";

type Params = {
    userId: string;
}

export const getAll = async ({userId}: Params) => {
    const response = await api.get<OrderPackage[]>(`/packages/user/${userId}`);

    return response.data;
}