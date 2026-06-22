"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "../../public/Images.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-2">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-3xl font-extrabold leading-tight text-black md:text-2xl lg:text-6xl dark:text-white">
              Deliver{" "}
              <span className="text-green-600">SMS Messages</span>
              <br />
              Instantly to Your{" "}
              <span className="text-green-600">Customers</span>
            </h1>

            <p className="max-w-xl text-md leading-relaxed text-gray-600 dark:text-gray-300">
              Integrate our SMS API to send OTPs, notifications, and bulk
              messages at scale.
            </p>

            <button className="rounded-md bg-green-700 px-8 py-4 text-sm font-regular text-white transition hover:bg-green-800">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src={heroImage}
              alt="SMS Marketing"
              width={700}
              height={500}
              priority
              className="h-auto w-full max-w-[650px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}