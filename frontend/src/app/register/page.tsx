"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {User,Mail,Phone,Lock,Eye,EyeOff,} from "lucide-react";
import Image from "next/image";
import DaguLogo from '../../../public/Dagu_Final.png'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900"
      >
        {/* Logo */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
           <Image
    src={DaguLogo}
    alt="Dagu Logo"
    width={100}
    height={100}
    priority
    className="object-contain"
  />
          </motion.h2>

          <h1 className="mt-5 text-1xl font-medium text-black dark:text-white">
            You are almost new
          </h1>

          <p className="mt-3 text-sm font-light text-gray-600 dark:text-gray-300">
            Please Register Here
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full text-sm rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full text-sm rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full text-sm rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full text-sm rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-12 text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full  text-sm rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-12 text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white shadow-md transition-all hover:bg-green-700"
          >
            Register
          </motion.button>
        </form>

        {/* Login */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400  text-sm">
            Already have account?{" "}
            <Link
              href="/login"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}