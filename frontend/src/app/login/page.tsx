"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Dagu_Final.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDemoAlert, setShowDemoAlert] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6 py-10">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt="Dagu Logo"
            width={90}
            height={90}
            priority
            className="object-contain"
          />

          <h1 className="mt-4 text-2xl font-bold text-black dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Please login to continue
          </p>

          {/* Demo Credentials */}
          {showDemoAlert && (
            <div className="mt-5 w-full rounded-xl border border-green-200 bg-green-50 p-4 text-left shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-green-700">
                    Demo Login Credentials
                  </h3>

                  <div className="mt-3 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700">
                        Email:
                      </span>
                      <code className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-800">
                        admin@email.com
                      </code>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700">
                        Password:
                      </span>
                      <code className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-800">
                        Admin1234
                      </code>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowDemoAlert(false)}
                  className="rounded p-1 text-green-700 transition hover:bg-green-100"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Form */}
        <form className="mt-6 space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-11 text-sm text-black outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-green-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgotpassword"
              className="text-xs text-green-600 transition hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register */}
          <div className="pt-2 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-green-600 transition hover:text-green-700"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}