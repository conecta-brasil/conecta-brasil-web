"use client";

import { useState } from "react";
import { Mail, User } from "lucide-react";
import Image from "next/image";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/LOGO.jpg"
              alt="ConectaBrasil Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h1 className="stellar-heading text-3xl md:text-4xl text-white mb-2">
            ConectaBrasil
          </h1>
          <p className="text-gray-300 text-lg">
            Connect to satellite internet
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email or Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email or username"
                  required
                />
              </div>
            </div>

            {/* Connect Button */}
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className={`w-full stellar-button text-lg py-4 rounded-xl font-semibold transition-all duration-200 ${
                isLoading || !email.trim()
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:transform hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <User className="h-5 w-5 mr-2" />
                  Connect
                </div>
              )}
            </button>
          </form>

          {/* Stellar Network Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/STELLAR.png"
                alt="Stellar Network"
                width={100}
                height={30}
                className="opacity-80"
              />
            </div>
            <p className="text-center text-gray-500 text-xs mt-2">
              Powered by Stellar blockchain technology
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2023 ConectaBrasil. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
