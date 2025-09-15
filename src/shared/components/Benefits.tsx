"use client";

import { DollarSign, Zap, Globe, Heart } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-400" />,
      title: "Cheaper",
      description: "Affordable prices with options for all budgets, payments in micro-installments via Stellar blockchain."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Easy Access",
      description: "Connect quickly without bureaucracy or long contracts. Buy only the time you need."
    },
    {
      icon: <Globe className="h-8 w-8 text-yellow-400" />,
      title: "Wide Coverage",
      description: "Our satellite network reaches even the most remote areas of Brazil, where traditional internet doesn't go."
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-400" />,
      title: "Social Impact",
      description: "Part of the profit is reinvested in expanding connectivity to low-income communities."
    },
  ];

  return (
    <section id="beneficios" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl stellar-heading mb-4 text-white">
            WHY CHOOSE OUR SATELLITE INTERNET?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with blockchain payments to offer an accessible service with a social purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mb-4 inline-block p-3 bg-gray-800 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-900 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src="/image.png"
                alt="Stellar global network"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                CONNECTING ALL OF BRAZIL
              </h3>
              <p className="text-gray-300 mb-4">
                Our mission is to connect every corner of Brazil, from the Amazon to the cities, with fast and reliable internet. We believe that connectivity is a right, not a privilege.
              </p>
              <p className="text-gray-300 mb-6">
                Using Stellar&apos;s blockchain technology, we make payments accessible to everyone, even those without traditional bank accounts. Just purchase your internet package with XLM and get connected instantly.
              </p>
              <button className="stellar-button">
                Learn More About Our Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
