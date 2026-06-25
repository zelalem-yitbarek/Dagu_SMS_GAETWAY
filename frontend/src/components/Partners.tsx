"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ethAirlines from "../../public/Ethiopian_Airlines_Logo.svg.png";
import AAU_MAIN from "../../public/AAU.png";
import DSTV_LOGO from "../../public/DSTV_MAIN.png";
import AwashBank from "../../public/Awash.png";
import Heinken from "../../public/Heinken.png";
import telebirr from "../../public/Telebir.png";
import Safaricom from "../../public/SafariCom.png";
import BunnaBank from "../../public/Bunna_bank.png";

const logos = [
  { src: ethAirlines, alt: "Ethio Telecom" },
  { src: AAU_MAIN, alt: "Safaricom" },
  { src: DSTV_LOGO, alt: "Arts" },
  { src: AwashBank, alt: "EBC" },
  { src: Heinken, alt: "EBS" },
  { src: telebirr, alt: "BGI" },
  { src: Safaricom, alt: "ENA" },
  { src: BunnaBank, alt: "Bunna Bank" },
];

const doubledLogos = [...logos, ...logos];

const Trustedby = () => {
  return (
    <section className="w-full py-12 text-center bg-white dark:bg-gray-950 transition-colors duration-300">
      <h1 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white md:text-2xl">
        Trusted By
      </h1>

      <div className="w-full overflow-hidden bg-gray-50 py-1 dark:bg-gray-900 transition-colors duration-300 mt-4">
        <motion.div
          className="flex w-max items-center gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex h-28 w-28 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2 transition duration-300 dark:brightness-90 dark:contrast-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trustedby;