"use client";

import { DashboardStats } from "@/shared/components/DashboardStats";
import { DashboardPackages } from "@/shared/components/DashboardPackages";
import { useCallback, useEffect, useState } from "react";
import { getAccount } from "@/shared/http/horizon/accounts/get-account";
import freighterApi from "@stellar/freighter-api";
import * as orderPackagesApi from "@/shared/http/api/order-packages";
import { getRemainingTime } from "@/shared/http/api/remaining/get-remaining-time";
import { formatSecondsToTime } from "@/utils/time";

export default function DashboardPage() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [packageTime, setPackageTime] = useState("00:00:00");

  const updateAccountBalance = useCallback(async () => {
    if (!publicKey) return;

    try {
      const account = await getAccount({address: publicKey});
      setAccountBalance(Number(account.balances.find((balance) => balance.asset_type === "native")?.balance || 0));
    } catch (e) {
      console.error(e);
    }
  }, [publicKey]);

  const updatePackegeTime = useCallback(async () => {
    try {
      if (!publicKey) return

      const orders = await orderPackagesApi.getAll({userId: publicKey});

      if (!orders.length) return


      const remainingTimes = await Promise.all(orders.filter((order) => order.is_active).map(async (order) => {
        const remainingTime = await getRemainingTime({publicKey, orderId: order.order_id})
        return remainingTime.remaining;
      }));

      const remainingTime = remainingTimes.reduce((acc, time) => acc + time, 0);

      setPackageTime(formatSecondsToTime(remainingTime));
    } catch (e) {
      console.error(e);
    }
  }, [publicKey]);

  useEffect(() => {
    (async () => {
      await updatePackegeTime();
    })()
  }, [updatePackegeTime])

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
        <DashboardStats publicKey={publicKey || ""} balance={accountBalance} packageTime={packageTime} />
        <DashboardPackages publicKey={publicKey || ""} onPurchaseSuccess={async () => {
          await updateAccountBalance();
          await updatePackegeTime();
        }} />
      </main>
    </div>
  );
}
