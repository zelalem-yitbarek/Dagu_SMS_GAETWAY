"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#f3f3f3] px-6 pt-24 pb-12 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight text-black md:text-6xl lg:text-6xl dark:text-white"
        >
          Deliver{" "}
          <span className="text-green-600">SMS Messages</span>
          <br />
          Instantly to Your{" "}
          <span className="text-green-600">Customers</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-5 max-w-2xl text-md leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Integrate our SMS API to send OTPs, notifications, and bulk
          messages at scale.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6"
        >
          <button className="rounded-md bg-green-600 px-10 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-green-700">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}