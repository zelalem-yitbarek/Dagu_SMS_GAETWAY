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
    <section className="py-20 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12 text-zinc-900 dark:text-white">
          Frequently <span className="text-green-600">Asked</span> Questions
        </h2>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-300 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-md font-medium text-zinc-900 dark:text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus
                    size={24}
                    className="text-green-600 dark:text-green-400"
                  />
                ) : (
                  <Plus
                    size={24}
                    className="text-green-600 dark:text-green-400"
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
                  <div className="px-8 pb-6 text-zinc-600 dark:text-zinc-300 leading-7">
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