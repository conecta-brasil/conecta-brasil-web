"use client";

import { BookOpen, Activity, DollarSign, Users } from "lucide-react";
import Image from "next/image";

export function SocialImpact() {
  return (
    <section id="impacto-social" className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl stellar-heading mb-4 text-black">
            OUR SOCIAL IMPACT
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We believe that internet is a basic right. Each package sold helps expand our network to communities without access.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-black rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Education for All
                </h3>
                <p className="text-gray-700">
                  We provide free internet access to schools in underserved communities, helping thousands of students access educational resources online.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-black rounded-full mr-4">
                <Activity className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Better Healthcare Access
                </h3>
                <p className="text-gray-700">
                  Our network enables telemedicine services in remote areas, connecting patients with healthcare professionals.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-black rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Economic Empowerment
                </h3>
                <p className="text-gray-700">
                  We create local jobs and support small businesses by providing affordable internet access and digital payment solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-black rounded-full mr-4">
                <Users className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Stronger Communities
                </h3>
                <p className="text-gray-700">
                  We work with local leaders to identify and address the specific connectivity needs of each community we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/STELLAR.png"
                alt="Stellar Logo"
                width={632}
                height={192}
                className="h-48 w-158 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-black mb-2">
                POWERED BY STELLAR NETWORK
              </h3>
              <p className="text-gray-600">
                Our blockchain-based payment system makes internet access more accessible and affordable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
