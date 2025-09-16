import { api } from "..";
import { Purchase } from "../types/purchase";

type Params = {
  packageId: string;
  userId: string;
};

export const createPurchase = async ({ packageId, userId }: Params) => {
  const response = await api.post<Purchase>("/purchases", {
    packageId,
    userId,
  });

  return response.data;
};
