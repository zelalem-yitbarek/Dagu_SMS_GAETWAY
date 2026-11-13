"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/NavBar";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPinned, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the message to the backend once a contact endpoint exists
    e.currentTarget.reset();
    setSubmitted(true);
  };

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

                  <a href="mailto:dagu@gmail.com" className="text-gray-700 dark:text-gray-300 text-sm hover:text-green-600">
                    dagu@gmail.com
                  </a>
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
                    <a href="tel:+251966813898" className="hover:text-green-600">+251 966 813 898</a>
                    {" / "}
                    <a href="tel:+251920811869" className="hover:text-green-600">+251 920 811 869</a>
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
                  <h3 className="font-semibold text-green-600 text-sm">
                    Head Office
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-sm">
            {submitted && (
              <div role="status" className="mb-6 flex items-center gap-2 rounded-md border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300">
                <CheckCircle2 size={18} />
                Thanks! Your message has been received. We&apos;ll get back to you soon.
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  required
                  placeholder="Full Name"
                  className="h-14 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="h-14 rounded-md border  border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
                />
              </div>

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="h-14 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
              />

              <textarea
                rows={8}
                name="message"
                required
                placeholder="Message"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent p-4 text-gray-900 dark:text-white outline-none transition focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-green-600 py-3 text-sm font-medium text-white transition hover:bg-green-700"
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