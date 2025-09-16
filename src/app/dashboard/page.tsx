"use client";

import { DashboardStats } from "@/shared/components/DashboardStats";
import { DashboardPackages } from "@/shared/components/DashboardPackages";
import { useCallback, useEffect, useState } from "react";
import { getAccount } from "@/shared/http/horizon/accounts/get-account";
import freighterApi from "@stellar/freighter-api";

export default function DashboardPage() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState<number>(0);

  const updateAccountBalance = useCallback(async () => {
    if (!publicKey) return;

    try {
      const account = await getAccount({address: publicKey});
      setAccountBalance(Number(account.balances.find((balance) => balance.asset_type === "native")?.balance || 0));
    } catch (e) {
      console.error(e);
    }
  }, [publicKey]);

  useEffect(() => {
    (async () => {
      try {
        const { address } = await freighterApi.requestAccess();
        setPublicKey(address);
        console.log(address)
      } catch (e) {
        console.error(e);
      }
    })()
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await updateAccountBalance();
      } catch (e) {
        console.error(e);
      }
    })()
  }, [updateAccountBalance]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      <main className="flex-grow">
        <DashboardStats publicKey={publicKey || ""} balance={accountBalance} />
        <DashboardPackages publicKey={publicKey || ""} onPurchaseSuccess={updateAccountBalance} />
      </main>
    </div>
  );
}
