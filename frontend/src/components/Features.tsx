"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  PlugZap,
  BarChart3,
  ShieldCheck,
  Mail,
  Languages,
  RotateCcw,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    title: "Instant SMS Delivery",
    description: "Deliver SMS instantly for OTPs, notifications, and alerts.",
    icon: Rocket,
  },
  {
    title: "Easy API Integration",
    description: "Integrate quickly using REST APIs and clear documentation.",
    icon: PlugZap,
  },
  {
    title: "Real Time Report",
    description: "Track delivery reports, message history, and analytics.",
    icon: BarChart3,
  },
  {
    title: "Flexible Billing",
    description: "Choose prepaid, postpaid, or pay-as-you-go pricing.",
    icon: ShieldCheck,
  },
  {
    title: "Message Templates",
    description: "Create reusable templates for OTPs and notifications.",
    icon: Mail,
  },
  {
    title: "Unicode Support",
    description: "Send messages in Amharic, Afaan Oromo, Arabic, and more.",
    icon: Languages,
  },
  {
    title: "Automatic Retry",
    description: "Retry failed deliveries automatically for better success.",
    icon: RotateCcw,
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor usage trends and delivery performance in real time.",
    icon: LayoutDashboard,
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="w-full bg-gray-50 py-24 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl dark:text-white">
            Everything you need for <span className="text-green-600">SMS</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need to send, manage, and monitor SMS communication.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-800"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-colors group-hover:bg-green-600 dark:bg-green-900/30">
                  <Icon size={22} className="text-green-600 transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[15px] leading-6 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}