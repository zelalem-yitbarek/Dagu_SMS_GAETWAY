"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/NavBar";
import { Check } from "lucide-react";

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
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 dark:bg-gray-950 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Pricing
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-sm leading-relaxed">
            Our pricing plans are designed so that businesses of any size can
            start using the platform without worrying about costs. They are
            flexible and work for every industry. We even provide a certain
            number of messages for free so you can experience what Dagu SMS
            Gateway has to offer.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {plan.name}
                </h3>

                <h4 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </h4>

                <div className="mx-auto mt-4 w-40 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 py-1">
                  <span className="text-sm text-green-800 dark:text-green-300">
                    Includes VAT
                  </span>
                </div>
              </div>

              <ul className="mt-10 space-y-5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300  text-sm"
                  >
                    <Check
                      size={20}
                      className="mt-0.5 text-green-600 shrink-0  text-sm"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-lg bg-green-700 py-3 text-white font-medium transition-all hover:bg-green-800">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}