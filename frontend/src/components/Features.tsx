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
    <section className="w-full bg-white py-5 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <h2 className="text-2xl font-extrabold text-black dark:text-white">
            Our <span className="text-green-600">Features</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Everything you need to send, manage, and monitor SMS communication.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                    <Icon size={20} className="text-green-600" />
                  </div>

                  <h3 className="text-base font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
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