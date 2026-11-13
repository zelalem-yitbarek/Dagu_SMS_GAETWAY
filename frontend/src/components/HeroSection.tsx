"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] px-6 pt-24 pb-20 dark:bg-gray-950">
      {/* Soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-green-500/15 blur-3xl dark:bg-green-500/10"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 shadow-sm dark:border-green-800 dark:bg-gray-900 dark:text-green-400">
            <Zap size={14} />
            Ethiopia&apos;s SMS gateway for businesses
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl font-bold leading-tight tracking-tight text-black md:text-6xl dark:text-white"
        >
          Deliver <span className="text-green-600">SMS Messages</span>
          <br className="hidden sm:block" /> Instantly to Your{" "}
          <span className="text-green-600">Customers</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          {...fadeUp(0.3)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Integrate our SMS API to send OTPs, notifications, and bulk messages
          at scale, with real-time delivery reports.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/register"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition-all duration-300 hover:bg-green-700 sm:w-auto"
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-800 transition-colors hover:border-green-600 hover:text-green-700 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-green-500 dark:hover:text-green-400"
          >
            View Pricing
          </Link>
        </motion.div>

        <motion.p {...fadeUp(0.6)} className="mt-5 text-sm text-gray-500 dark:text-gray-400">
          Start free with the Tester plan, upgrade when you grow.
        </motion.p>
      </div>
    </section>
  );
}
