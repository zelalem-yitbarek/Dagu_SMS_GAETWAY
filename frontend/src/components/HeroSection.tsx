"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "../../public/Images.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f3f3f3] dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="text-5xl font-extrabold leading-tight text-black md:text-6xl dark:text-white">
              Deliver{" "}
              <span className="text-green-600">SMS Messages</span>
              <br />
              Instantly to Your{" "}
              <span className="text-green-600">Customers</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Integrate our SMS API to send OTPs, notifications, and bulk
              messages at scale.
            </p>

            <button className="mt-10 rounded-md bg-green-600 px-10 py-3 text-base font-medium text-white transition hover:bg-green-700 cursor-pointer">
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
              width={650}
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