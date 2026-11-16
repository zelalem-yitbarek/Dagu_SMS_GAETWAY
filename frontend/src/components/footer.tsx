import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import Logo from "../../public/Dagu_Final_White.png";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/developers", label: "Documentation" },
      { href: "/developers#quickstart", label: "Quickstart" },
      { href: "/developers#create-sms", label: "API reference" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/contact", label: "Contact us" },
      { href: "/login", label: "Login" },
      { href: "/register", label: "Register" },
    ],
  },
];

// TODO: replace "#" with Dagu's real social profile URLs
const socials = [
  { href: "#", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "Instagram", icon: FaInstagram },
  { href: "#", label: "Telegram", icon: FaTelegramPlane },
];

const linkClass =
  "text-[15px] text-gray-400 transition-colors hover:text-green-400";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white">
      {/* Brand accent line */}
      <div
        aria-hidden
        className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700"
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Dagu home" className="inline-block">
              <Image src={Logo} alt="Dagu" width={110} height={40} className="h-auto w-[110px]" />
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-gray-400">
              Dagu is an SMS gateway that enables businesses in Ethiopia to
              send and receive SMS messages from anyone, anywhere, at any time.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400">
                  <Phone size={15} />
                </span>
                <div className="flex flex-col">
                  <a href="tel:+251966813898" className={linkClass}>+251 966 813 898</a>
                  <a href="tel:+251920811869" className={linkClass}>+251 920 811 869</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400">
                  <Mail size={15} />
                </span>
                <a href="mailto:dagu@gmail.com" className={linkClass}>dagu@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400">
                  <MapPin size={15} />
                </span>
                <span className="text-[15px] text-gray-400">Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DAGU. All rights reserved.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-green-400"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 transition-colors group-hover:border-green-600">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
