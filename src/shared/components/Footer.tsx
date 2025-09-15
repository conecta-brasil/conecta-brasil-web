"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                  src="/LOGO.jpg"
                  width={32}
                  height={32}
                  alt="Logo"
                  className="h-8 w-8 rounded-full"
                />
              <span className="text-xl font-bold">
                ConectaBrasil
              </span>
            </div>
            <p className="text-gray-300 mb-4">Connecting Brazil with affordable satellite internet powered by Stellar blockchain technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              PACKAGES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  1 Hour
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  2 Hours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  1 Day
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  15 Days
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Monthly
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Quarterly
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Annual
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Social Impact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>contact@conectabrasil.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>+55 11 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>São Paulo, Brazil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 ConectaBrasil. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
