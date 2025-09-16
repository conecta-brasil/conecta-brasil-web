"use client";

import { FC, useState } from "react";
import { Wallet, Clock, Wifi, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  publicKey: string
  balance: number;
}

export const DashboardStats: FC<Props> = ({ publicKey, balance }) => {
  const [packageTime] = useState("02:00:00"); // Mock package time
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
    }, 3000);
  };

  const handleLogout = () => {
    // Redirect to login page
    router.push("/login");
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Top Navigation with Logout */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/LOGO.jpg"
                alt="ConectaBrasil Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">
                ConectaBrasil
              </span>
            </div>
            {publicKey && (
              <div className="bg-gray-800 px-3 py-1 rounded-lg border border-gray-700">
                <span className="text-sm text-yellow-400 font-mono">
                  {publicKey.slice(0, 8)}...{publicKey.slice(-8)}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/LOGO.jpg"
              alt="ConectaBrasil Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <h1 className="stellar-heading text-3xl md:text-4xl text-white mb-2">
            Welcome to your Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your internet packages
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* XLM Balance Card */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-3 mr-4">
                <Wallet className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300">XLM Balance</h3>
                <p className="text-sm text-gray-500">Available in your wallet</p>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-yellow-400">{balance}</span>
              <span className="text-lg text-gray-400 ml-2">XLM</span>
            </div>
            <div className="mt-4 flex items-center">
              <Image
                src="/STELLAR.png"
                alt="Stellar Network"
                width={80}
                height={24}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Package Time Card */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-3 mr-4">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300">Internet Time</h3>
                <p className="text-sm text-gray-500">Available package time</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-yellow-400 font-mono">{packageTime}</span>
              </div>
              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className={`stellar-button flex items-center space-x-2 ${
                  isConnecting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isConnecting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <Wifi className="h-4 w-4" />
                    <span>Conectar</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-4">
              <div className="bg-gray-800 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% remaining</p>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-900 rounded-full px-6 py-3 border border-gray-800">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Status: Ready to connect</span>
          </div>
        </div>
      </div>
    </section>
  );
}
