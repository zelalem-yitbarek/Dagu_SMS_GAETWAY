"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "../../public/Dagu_Final.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/developers", label: "Developers" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const linkClass = (href: string) =>
    `text-[15px] font-medium transition-colors hover:text-green-600 ${
      pathname === href ? "text-green-600" : "text-gray-700 dark:text-gray-300"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b
        ${
          scrolled
            ? "bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-zinc-200/40 dark:border-zinc-800/40"
            : "bg-white dark:bg-gray-950 border-zinc-200 dark:border-zinc-800"
        }`}
    >
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
              className="h-4 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle + Login */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="rounded-md bg-green-600 px-6 py-2.5 text-[15px] font-semibold text-white transition hover:bg-green-700"
            >
              Login
            </Link>
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-5 md:hidden dark:border-zinc-800">
            <nav className="flex flex-col gap-4" onClick={() => setIsOpen(false)}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              ))}

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