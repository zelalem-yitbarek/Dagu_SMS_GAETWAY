"use client"
import {Minus,Plus} from "lucide-react"
import { useState } from 'react';
const faqs = [
  {
    question: 'What is DAGU?',
    answer:
      'DAGU SMS Gateway is a secure and reliable platform that enables businesses and applications to send and receive SMS messages through a simple and powerful API.',
  },
  {
    question: 'How fast are SMS messages delivered?',
    answer:
      'DAGU delivers messages within seconds using high-performance messaging routes, ensuring timely delivery for OTPs, alerts, and notifications.',
  },
  {
    question: 'Does DAGU support OTP and verification messages?',
    answer:
      'Yes. DAGU is optimized for OTPs, two-factor authentication (2FA), account verification, password resets, and transaction notifications.',
  },
  {
    question: 'Can I track message delivery status?',
    answer:
      'Yes. DAGU offers real-time delivery reports, allowing you to monitor message status, delivery success rates, and message history.',
  },
  {
    question: 'Can I send bulk SMS messages?',
    answer:
      'Yes. DAGU supports bulk SMS campaigns, enabling you to send thousands of messages simultaneously to customers and users.',
  },
  {
    question: 'Is API integration easy?',
    answer:
      'Absolutely. DAGU provides a developer-friendly REST API with comprehensive documentation, code examples, and support for multiple programming languages.',
  },
];

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return(
    <section id="faq" className="scroll-mt-20 py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
          FAQ
        </p>
        <h2 className="mt-3 text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Frequently <span className="text-green-600">Asked</span> Questions
        </h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-colors ${openIndex === index ? "border-green-300 bg-green-50/40 dark:border-green-800 dark:bg-gray-900" : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"}`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus
                    size={22}
                    className="shrink-0 text-green-600 dark:text-green-400"
                  />
                ) : (
                  <Plus
                    size={22}
                    className="shrink-0 text-green-600 dark:text-green-400"
                  />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'grid-rows-[1fr]'
                    : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-7 text-base md:px-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}