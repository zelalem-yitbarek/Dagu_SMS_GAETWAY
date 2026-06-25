"use client";

import Link from "next/link";
import { SendHorizontal ,Code} from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Side */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
              Ready To Get Started
            </h2>

            <p className="max-w-lg text-sm leading-7 text-gray-700 dark:text-gray-300">
              Empower your business with Dagu's SMS Gateway. Reach customers
              instantly, send bulk SMS campaigns, and manage communication
              seamlessly. Contact us today to get started.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/register"
                className="rounded-lg bg-green-700 px-8 py-3 text-sm font-medium text-white transition hover:bg-green-800"
              >
                Register Here
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-gray-800 transition hover:text-green-700 dark:text-gray-300 dark:hover:text-green-500"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-lg transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                <SendHorizontal
                  size={20}
                  className="text-white dark:text-black"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Always know what to spend?
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                No hidden charges or surprises. Flexible pricing plans for
                businesses of all sizes, including enterprise messaging needs.
              </p>

              <Link
                href="/pricing"
                className="text-sm font-medium text-green-700 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400"
              >
                Show Our Pricing
              </Link>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-lg transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                <Code
                  size={20}
                  className="text-white dark:text-black"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Start your integration
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Integrate Dagu SMS Gateway quickly using our APIs and developer
                tools. Get your messaging solution running in minutes.
              </p>

              <Link
                href="/docs"
                className="text-sm font-medium text-green-700 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}