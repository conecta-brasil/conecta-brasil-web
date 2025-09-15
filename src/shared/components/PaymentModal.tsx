"use client";

import { useState, useEffect } from "react";
import { X, Copy, CheckCircle } from "lucide-react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
}

export function PaymentModal({ isOpen, onClose, packageName, packagePrice }: PaymentModalProps) {
  const [showQR, setShowQR] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const pixCode = `00020126580014BR.GOV.BCB.PIX013636c7f4e6-f24d-4dcb-aa73-c531b2b9b4a65204000053039865802BR5925CONECTA BRASIL INTERNET6009SAO PAULO62070503***63041D3D`;

  useEffect(() => {
    if (isOpen) {
      setShowQR(true);
      setIsProcessing(false);
      setCopied(false);
      
      // After 4 seconds, switch to loading
      const timer = setTimeout(() => {
        setShowQR(false);
        setIsProcessing(true);
        
        // After additional 3 seconds, complete the process
        setTimeout(() => {
          setIsProcessing(false);
          onClose();
        }, 3000);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {showQR ? (
          <>
            {/* QR Code Section */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                PIX Payment
              </h3>
              <p className="text-gray-600">
                Scan the QR code or copy the PIX code
              </p>
            </div>

            {/* Package Info */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Package:</span>
                <span className="font-semibold text-gray-900">{packageName}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-700">Amount:</span>
                <span className="font-bold text-2xl text-green-600">R$ {packagePrice}</span>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <QRCodeSVG
                  value={pixCode}
                  size={192}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                  includeMargin={false}
                />
              </div>
            </div>

            {/* PIX Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PIX Code:
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={pixCode}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-xs"
                />
                <button
                  onClick={handleCopyPix}
                  className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 text-black hover:bg-yellow-300'
                  }`}
                >
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Payment will be processed automatically</p>
              <p className="mt-1">Please keep this window open</p>
            </div>
          </>
        ) : (
          <>
            {/* Processing Section */}
            <div className="text-center py-12">
              <div className="mb-6">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400 mx-auto"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Processing Payment
              </h3>
              <p className="text-gray-600 mb-4">
                Please wait while we confirm your payment...
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Package:</span>
                  <span className="font-semibold text-gray-900">{packageName}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700">Amount:</span>
                  <span className="font-bold text-green-600">R$ {packagePrice}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
