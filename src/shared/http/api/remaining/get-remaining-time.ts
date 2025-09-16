import { api } from "..";

type Params = {
    publicKey: string;
    orderId: number;
}

export const getRemainingTime = async ({publicKey, orderId}: Params) => {
    const response = await api.get(`/packages/remaining/${publicKey}/${orderId}`);

    return response.data;
}
