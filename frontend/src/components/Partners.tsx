"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ethAirlines from "../../public/Ethiopian_Airlines_Logo.svg.png";
import TotalEnergies from "../../public/TotalEnergies.png";
import ethioTelecom from "../../public/teleCom.png";
import Heinken from "../../public/Heinken.png";
import telebirr from "../../public/Telebir.png";
import Safaricom from "../../public/SafariCom.png";
import CBE from "../../public/CBE Logo.png";
import Mpesa from "../../public/mpesa.png"

const logos = [
  { src: ethAirlines, alt: "Ethiopian Airlines" },
  { src: TotalEnergies, alt: "TotalEnergies" },
  { src: Mpesa, alt: "M-Pesa" },
  { src: ethioTelecom, alt: "Ethio Telecom" },
  { src: Heinken, alt: "Heineken" },
  { src: telebirr, alt: "telebirr" },
  { src: Safaricom, alt: "Safaricom" },
  { src: CBE, alt: "Commercial Bank of Ethiopia" },
];

const doubledLogos = [...logos, ...logos];

const Trustedby = () => {
  return (
    <section className="w-full border-b border-gray-100 bg-white py-14 text-center transition-colors duration-300 dark:border-gray-900 dark:bg-gray-950">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
        Trusted by leading organizations
      </h2>

      <div className="marquee-mask mt-8 w-full overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-16 md:gap-20"
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
              aria-hidden={index >= logos.length}
              className="relative flex h-20 w-28 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={index >= logos.length ? "" : logo.alt}
                fill
                sizes="112px"
                className="object-contain p-2 opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:brightness-90"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trustedby;