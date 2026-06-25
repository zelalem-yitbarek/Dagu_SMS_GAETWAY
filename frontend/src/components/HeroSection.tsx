"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f3f3f3] px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: -80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl font-extrabold leading-tight text-black md:text-6xl lg:text-7xl">
          Deliver <span className="text-green-600">SMS Messages</span>
          <br />
          Instantly to Your <span className="text-green-600">Customers</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          Integrate our SMS API to send OTPs, notifications, and bulk
          messages at scale.
        </p>

        <button className="mt-10 rounded-md bg-green-600 px-10 py-3 text-base font-medium text-white transition hover:bg-green-700">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}