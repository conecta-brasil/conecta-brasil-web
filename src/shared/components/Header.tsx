"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/LOGO.jpg"
            width={32}
            height={32}
            alt="Logo"
            className="h-8 w-8 rounded-full"
          />

          <span className="text-xl font-bold text-white">
            ConectaBrasil
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#inicio"
            className="text-gray-300 hover:text-yellow-300 font-medium"
          >
            Home
          </a>
          <a
            href="#pacotes"
            className="text-gray-300 hover:text-yellow-300 font-medium"
          >
            Packages
          </a>
          <a
            href="#beneficios"
            className="text-gray-300 hover:text-yellow-300 font-medium"
          >
            Benefits
          </a>
          <a
            href="#como-funciona"
            className="text-gray-300 hover:text-yellow-300 font-medium"
          >
            How It Works
          </a>
          <a
            href="#impacto-social"
            className="text-gray-300 hover:text-yellow-300 font-medium"
          >
            Social Impact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <Link href="/login" className="hidden md:block stellar-button">
            Buy Now
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#inicio"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-300 font-medium"
            >
              Home
            </a>
            <a
              href="#pacotes"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-300 font-medium"
            >
              Packages
            </a>
            <a
              href="#beneficios"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-300 font-medium"
            >
              Benefits
            </a>
            <a
              href="#como-funciona"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-300 font-medium"
            >
              How It Works
            </a>
            <a
              href="#impacto-social"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-300 font-medium"
            >
              Social Impact
            </a>
            <Link href="/login" className="mt-4 w-full stellar-button block text-center">
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
