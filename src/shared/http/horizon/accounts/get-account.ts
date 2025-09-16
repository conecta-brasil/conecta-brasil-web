import { horizon } from "..";
import { Account } from "../types";

type GetAccountParams = {
    address: string;
}

export const getAccount = async ({address}: GetAccountParams) => {
    const response = await horizon.get<Account>(`/accounts/${address}`);
    
    return response.data;
};
