"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "../../public/Dagu_Final.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="Dagu Logo"
              width={120}
              height={30}
              priority
              className="h-4 w-auto"
            />
          </Link>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-green-600 hover:bg-green-600 hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-green-500 dark:hover:bg-green-600 dark:hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Home Page
          </Link>

          <ThemeToggle className="ml-auto" />
        </div>
      </div>
    </header>
  );
}