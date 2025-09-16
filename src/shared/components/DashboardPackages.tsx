"use client";

import { FC, useEffect, useState } from "react";
import { ShoppingCart, Clock, Zap } from "lucide-react";
import { PaymentModal } from "./PaymentModal";
import { Package } from "../http/api/types";
import * as packagesApi from "../http/api/packages";
import { convertLumenToXlm } from "@/utils/xlm";
import { formatName } from "@/utils/pakage";

const packages = [
  {
    id: 1,
    name: "1 Hour",
    price: "2,50",
    duration: "01:00:00",
    speed: "100 Mbps",
    popular: false,
  },
  {
    id: 2,
    name: "2 Hours", 
    price: "4,50",
    duration: "02:00:00",
    speed: "100 Mbps",
    popular: false,
  },
  {
    id: 3,
    name: "1 Day",
    price: "9,90",
    duration: "24:00:00",
    speed: "100 Mbps",
    popular: true,
  },
  {
    id: 4,
    name: "15 Days",
    price: "49,90",
    duration: "360:00:00",
    speed: "100 Mbps",
    popular: false,
  },
  {
    id: 5,
    name: "Monthly",
    price: "89,90",
    duration: "720:00:00",
    speed: "100 Mbps",
    popular: false,
  },
];

type Props = {
  publicKey: string;
  onPurchaseSuccess?: () => Promise<void>;
}

export const DashboardPackages: FC<Props> = ({ publicKey, onPurchaseSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{id: number, name: string, price: number} | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const packages = await packagesApi.getAll();
        setPackages(packages);
      } catch (e) {
        console.error(e);
      }
    })()
  }, [])

  const handlePurchase = (packageId: number) => {
    const pkg = packages.find(p => p.id === packageId);

    if (pkg) {
      setSelectedPackage({ id: pkg.id, name: pkg.name, price: pkg.price });
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl stellar-heading mb-4 text-white">
            Purchase Internet Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Extend your internet time with our flexible packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gray-800 rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                pkg.is_popular
                  ? "border-yellow-400 ring-2 ring-yellow-400/50"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              {pkg.is_popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {formatName(pkg.name)}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-bold text-yellow-400">
                    {convertLumenToXlm(pkg.price)} xlm
                  </span>
                  <span className="text-gray-400 ml-1">/package</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300">Duration</span>
                  </div>
                  <span className="text-white font-mono font-semibold">
                    {formatName(pkg.name)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300">Speed</span>
                  </div>
                  <span className="text-white font-semibold">
                    {pkg.speed_message}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handlePurchase(pkg.id)}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:transform hover:scale-[1.02] ${
                  pkg.is_popular
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Purchase</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            All packages include unlimited data and high-speed satellite internet
          </p>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPackage && (
        <PaymentModal
          publicKey={publicKey}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          packageId={selectedPackage.id}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          onPurchaseSuccess={onPurchaseSuccess}
        />
      )}
    </section>
  );
}
