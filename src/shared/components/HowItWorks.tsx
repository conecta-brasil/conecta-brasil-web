"use client";

import React from "react";
import { Smartphone, CreditCard, Wifi, CheckCircle } from "lucide-react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Choose Your Package",
      description: "Select the internet plan that best fits your needs from our flexible options.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Pay with Stellar (XLM)",
      description: "Complete your purchase quickly and securely using the Stellar blockchain.",
    },
    {
      icon: <Wifi className="h-8 w-8 text-white" />,
      title: "Connect Instantly",
      description: "Receive your access details immediately after payment confirmation.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Enjoy Your Internet",
      description: "Start browsing with high-speed satellite internet right away.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl stellar-heading mb-4 text-black">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get connected in just a few simple steps. No long-term contracts, no hidden fees.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center z-10 relative">
                    {step.icon}
                  </div>
                  <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 w-full justify-center">
                    <span className="text-xl font-bold text-black">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-black rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-black">
              <Image
                src="/LOGO.jpg"
                alt="Logo"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full"
              />
            </div>
            <div className="md:w-1/2 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 uppercase">
                POWERED BY BLOCKCHAIN
              </h3>
              <p className="mb-4 text-gray-300">
                Our platform leverages Stellar's blockchain technology to provide fast, secure, and transparent transactions. No middlemen, no unnecessary fees.
              </p>
              <p className="mb-6 text-gray-300">
                By using XLM, we're able to offer competitive pricing and instant confirmations, making internet access more accessible to everyone.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/LOGO.jpg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium text-yellow-400">
                  Powered by Stellar Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
