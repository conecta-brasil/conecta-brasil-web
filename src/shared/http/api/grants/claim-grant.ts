import { api } from ".."

type Params = {
    callerUserId: string,
    ownerUserId: string,
    orderId: string
}

export const claimGrant = async (params: Params) => {
  const response = await api.post("/grants", params);

  return response.data;
}