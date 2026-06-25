'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/dagu-logo.png"
              alt="DAGU"
              width={140}
              height={50}
              className="mb-6"
            />

            <p className="max-w-sm text-gray-300 leading-8 text-sm">
              Dagu is a leading SMS gateway that enables businesses in
              Ethiopia to send and receive SMS messages from anyone,
              anywhere, at any time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-3xl font-bold">Links</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="transition hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/developers"
                  className="transition hover:text-white"
                >
                  Developers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-3xl font-bold">
              Get in touch
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>+251966813898 / +251920811869</p>

              <p>dagu@gmail.com</p>

              <p>Addis Ababa, Ethiopia</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition hover:text-gray-300"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="transition hover:text-gray-300"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="transition hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                aria-label="Telegram"
                className="transition hover:text-gray-300"
              >
                <FaTelegramPlane size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DAGU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}