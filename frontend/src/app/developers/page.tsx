import Link from "next/link";
import { KeyRound, Send, ShieldCheck } from "lucide-react";

import Navbar from "@/components/APINavBar";
import Footer from "@/components/footer";

const steps = [
  {
    icon: KeyRound,
    title: "Get your API key",
    description: "Create an account and generate an API key from your dashboard.",
  },
  {
    icon: Send,
    title: "Send your first SMS",
    description: "Call the send endpoint with a recipient, sender name, and message.",
  },
  {
    icon: ShieldCheck,
    title: "Verify OTPs",
    description: "Use the OTP endpoints to send and verify one-time passwords.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-20 transition-colors duration-300 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Developer <span className="text-green-600">Documentation</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
              Integrate the Dagu SMS Gateway into your application. Full API
              reference is coming soon. In the meantime, here&apos;s how to get started.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                    <Icon size={20} className="text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-600">STEP {i + 1}</span>
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/register"
              className="inline-block rounded-md bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Create an account
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Questions about integration?{" "}
              <Link href="/contact" className="font-medium text-green-600 hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
