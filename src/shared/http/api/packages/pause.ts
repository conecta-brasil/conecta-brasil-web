import { api } from "..";

type Params = {
    ownerAddress: string;
    orderId: string;
}

export const pause = async ({ ownerAddress, orderId }: Params) => {
    await api.post("/packages/pause-order", {
        ownerAddress,
        orderId,
    });
}
