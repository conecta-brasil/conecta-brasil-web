"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl stellar-heading mb-6">
            SATELLITE INTERNET FOR EVERYONE
          </h1>
          <p className="text-xl text-gray-300 mb-8">Connecting all of Brazil with quality internet, even in the most remote areas, with payments facilitated via Stellar blockchain.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="stellar-button flex items-center">
              View Packages <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="stellar-button stellar-button-outline">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <img
              src="/image.png"
              alt="Stellar network ecosystem"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
