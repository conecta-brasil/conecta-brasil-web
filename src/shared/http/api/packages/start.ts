import { api } from "..";

type Params = {
    ownerAddress: string;
    orderId: string;
}

export const start = async ({ ownerAddress, orderId }: Params) => {
    await api.post("/packages/start-order", {
        ownerAddress,
        orderId,
    });
}
