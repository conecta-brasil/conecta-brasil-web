"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
const packages = [
  {
    id: "1h",
    name: "1 Hour",
    price: "2,50",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
  {
    id: "2h",
    name: "2 Hours",
    price: "4,50",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
  {
    id: "1d",
    name: "1 Day",
    price: "9,90",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: true,
  },
  {
    id: "15d",
    name: "15 Days",
    price: "49,90",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
  {
    id: "1m",
    name: "Monthly",
    price: "89,90",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
  {
    id: "3m",
    name: "Quarterly",
    price: "239,90",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
  {
    id: "1y",
    name: "Annual",
    price: "799,90",
    features: [
      "Unlimited internet",
      "Speed up to 100 Mbps",
      "Payment via Stellar (XLM)",
    ],
    popular: false,
  },
];

export function Packages() {
  const [selectedTab, setSelectedTab] = useState("todos");
  const filteredPackages =
    selectedTab === "todos"
      ? packages
      : selectedTab === "curtos"
      ? packages.slice(0, 3)
      : packages.slice(3);

  return (
    <section id="pacotes" className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl stellar-heading mb-4 text-black">
            OUR PACKAGES
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Choose the ideal plan for your needs. All packages include full access to satellite internet.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-amber-400 gap-2 rounded-full">
            <button
              onClick={() => setSelectedTab("todos")}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedTab === "todos"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-700 hover:bg-yellow-400"
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setSelectedTab("curtos")}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedTab === "curtos"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-700 hover:bg-yellow-400"
              }`}
            >
              Short Packages
            </button>
            <button
              onClick={() => setSelectedTab("longos")}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedTab === "longos"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-700 hover:bg-yellow-400"
              }`}
            >
              Long Packages
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg overflow-hidden border ${
                pkg.popular
                  ? "border-black ring-2 ring-black"
                  : "border-transparent"
              } bg-white shadow-xl`}
            >
              {pkg.popular && (
                <div className="bg-black text-yellow-400 text-center py-1">
                  <span className="text-sm font-medium uppercase">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-black">
                    R${pkg.price}
                  </span>
                  <span className="text-gray-500 ml-1">/pacote</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-full font-medium ${
                    pkg.popular
                      ? "bg-black text-yellow-400"
                      : "bg-gray-100 hover:bg-yellow-400 hover:text-black text-gray-800"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
