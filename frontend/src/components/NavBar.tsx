"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from '../../public/Dagu_Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="Dagu Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/developers"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Developers
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="rounded-md bg-green-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-800"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-5 md:hidden dark:border-zinc-800">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm">
                Home
              </Link>

              <Link href="/pricing" className="text-sm">
                Pricing
              </Link>

              <Link href="/developers" className="text-sm">
                Developers
              </Link>

              <Link href="/contact" className="text-sm">
                Contact Us
              </Link>

              <Link
                href="/login"
                className="w-fit rounded-md bg-green-700 px-4 py-2 text-sm text-white"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}