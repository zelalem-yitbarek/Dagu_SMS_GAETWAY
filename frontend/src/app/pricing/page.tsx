"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/NavBar";

import Boa from "../../../public/CBE Logo.png";
import telebirr from "../../../public/Telebir.png";
import cbebirr from "../../../public/CBE_bIRR.png";
import mpesa from "../../../public/mpesa.png";

const plans = [
  {
    name: "Tester",
    price: "0.00 ETB",
    features: [
      "1-2 Teams",
      "Sender Names given by default",
      "Send and Verify OTP",
      "Import 40 contacts at once",
      "Send 30 bulk messages at once",
      "Max 200 messages daily",
    ],
  },
  {
    name: "Basic",
    price: "2.50 ETB",
    features: [
      "1-10 Teams",
      "Sender Names given by default",
      "Send and Verify OTP",
      "Import 100 contacts at once",
      "Send 100 bulk messages at once",
      "Max 1000 messages daily",
    ],
  },
  {
    name: "Enterprise",
    price: "5.00 ETB",
    features: [
      "20 Teams",
      "Sender Names given by default",
      "Send and Verify OTP",
      "Import unlimited contacts at once",
      "Send 100 bulk messages at once",
      "Unlimited messages daily",
    ],
  },
];

export default function PricingSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[0] | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const paymentMethods = [
    {
      name: "Telebirr",
      value: "telebirr",
      image: telebirr,
    },
    {
      name: "CBE Birr",
      value: "cbebirr",
      image: cbebirr,
    },
    {
      name: "Bank of Abyssinia",
      value: "boa",
      image: Boa,
    },
    {
      name: "M-Pesa",
      value: "mpesa",
      image: mpesa,
    },
  ];

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPayment(null);
    setSelectedPlan(null);
    setPhoneNumber("");
  };

  const handlePurchase = (plan: (typeof plans)[0]) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const handleProceed = () => {
    console.log({
      plan: selectedPlan,
      paymentMethod: selectedPayment,
      phoneNumber,
    });

    // TODO:
    // Call your payment API here

    closeModal();
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 dark:bg-gray-950 py-20 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Pricing
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-sm">
              Our pricing plans are designed so that businesses of any size can
              start using the platform without worrying about costs. They are
              flexible and work for every industry. We even provide a certain
              number of messages for free so you can experience what Dagu SMS
              Gateway has to offer.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {plan.name}
                  </h3>

                  <h4 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </h4>

                  <div className="mx-auto mt-4 w-40 rounded-full border border-green-300 bg-green-100 py-1 dark:border-green-700 dark:bg-green-900/30">
                    <span className="text-sm text-green-800 dark:text-green-300">
                      Includes VAT
                    </span>
                  </div>
                </div>

                <ul className="mt-10 space-y-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check
                        size={20}
                        className="mt-0.5 shrink-0 text-green-600"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(plan)}
                  className="mt-10 w-full rounded-lg bg-green-700 py-3 font-medium text-white transition hover:bg-green-800"
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="mb-6 text-center text-1xl font-bold text-gray-900 dark:text-white">
              Checkout
            </h2>

            {/* Selected Package */}
            {selectedPlan && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Selected Package
                </p>

                <h3 className="mt-1 text-md font-bold text-green-700 dark:text-green-300">
                  {selectedPlan.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedPlan.price}
                </p>
              </div>
            )}

            {/* Phone */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>

              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="09XXXXXXXX"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-green-600 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Payment */}
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                Choose Payment Method
              </p>

              <div className="grid grid-cols-4 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.value}
                    onClick={() => setSelectedPayment(method.value)}
                    className={`flex h-20 items-center justify-center rounded-lg border p-2 transition ${
                      selectedPayment === method.value
                        ? "border-green-600 ring-2 ring-green-600"
                        : "border-gray-300 hover:shadow-md dark:border-gray-700"
                    }`}
                  >
                    <Image
                      src={method.image}
                      alt={method.name}
                      width={60}
                      height={40}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Proceed */}
            <button
              onClick={handleProceed}
              disabled={!phoneNumber || !selectedPayment}
              className={`w-full rounded-lg py-3 font-medium text-white transition ${
                phoneNumber && selectedPayment
                  ? "bg-green-700 hover:bg-green-800"
                  : "cursor-not-allowed bg-gray-400"
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}