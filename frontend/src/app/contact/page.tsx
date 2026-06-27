"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/NavBar";
import {
  Mail,
  Phone,
  MapPinned,
} from "lucide-react";

export default function ContactSection() {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="mt-6 text-md text-gray-600 dark:text-gray-400">
            Have any question related to integration? Please contact us here.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-green-100 dark:bg-green-900/30 p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-green-600  text-sm">
                    Email
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300  text-sm">
                    dagu@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-green-100 dark:bg-green-900/30 p-3">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-green-600 text-sm">
                    Phone
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    +251 911 123 456
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-green-100 dark:bg-green-900/30 p-3">
                  <MapPinned className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-green-600">
                    Head Office
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
              />

              <textarea
                rows={8}
                placeholder="Message"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent p-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-green-600 py-3 text-lg font-medium text-white transition hover:bg-green-700 text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}