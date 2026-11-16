import Link from "next/link";
import { ArrowRight, KeyRound, Send, ShieldCheck } from "lucide-react";

import Navbar from "@/components/APINavBar";
import Footer from "@/components/footer";
import ApiDocs, { CodeBlock } from "@/components/ApiDocs";
import DocsSidebar, { type DocsNavGroup } from "@/components/DocsSidebar";

const BASE_URL = "http://localhost:3001";

const nav: DocsNavGroup[] = [
  {
    title: "Getting started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "quickstart", label: "Quickstart" },
      { id: "authentication", label: "Authentication" },
      { id: "base-url", label: "Base URL" },
    ],
  },
  {
    title: "Endpoints",
    items: [
      { id: "create-sms", label: "Create SMS", method: "POST" },
      { id: "verify-sms", label: "Verify SMS", method: "POST" },
    ],
  },
  {
    title: "Reference",
    items: [{ id: "errors", label: "Errors" }],
  },
];

const steps = [
  {
    icon: KeyRound,
    title: "Get your API key",
    description: "Create an account and generate an API key from your dashboard.",
  },
  {
    icon: Send,
    title: "Send your first SMS",
    description: "Call the create endpoint with a recipient, sender name, and message.",
  },
  {
    icon: ShieldCheck,
    title: "Verify OTPs",
    description: "Check the code your user entered with the verify endpoint.",
  },
];

const errors = [
  { code: 200, name: "OK", description: "The request succeeded." },
  { code: 201, name: "Created", description: "The SMS was created and queued for delivery." },
  { code: 400, name: "Bad Request", description: "A required field is missing or invalid. See message for details." },
  { code: 401, name: "Unauthorized", description: "The API key is missing or invalid." },
  { code: 404, name: "Not Found", description: "The requested resource does not exist." },
  { code: 500, name: "Server Error", description: "Something went wrong on our side. Try again later." },
];

const errorShape = `{
  "success": false,
  "message": "Recipient phone number is required"
}`;

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
        {title}
      </h2>
      {children && (
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {children}
        </p>
      )}
    </div>
  );
}

const inlineCode =
  "rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-800 dark:bg-gray-800 dark:text-gray-200";

export default function DevelopersPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <header className="relative overflow-hidden border-b border-gray-200 bg-[#f3f3f3] px-6 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[800px] -translate-x-1/2 rounded-full bg-green-500/15 blur-3xl dark:bg-green-500/10"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Developers
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Dagu SMS <span className="text-green-600">API Documentation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Everything you need to integrate the Dagu SMS Gateway into your
            application: authentication, endpoints, and error handling.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quickstart"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
            >
              Quickstart
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#create-sms"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 transition-colors hover:border-green-600 hover:text-green-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-green-500 dark:hover:text-green-400"
            >
              API reference
            </a>
          </div>
        </div>
      </header>

      <main className="bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <DocsSidebar groups={nav} />
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 space-y-20">
            <section id="introduction" className="scroll-mt-28">
              <SectionHeading eyebrow="Introduction" title="Overview">
                The Dagu API is a REST API. It accepts JSON request bodies,
                returns JSON responses, and uses standard HTTP status codes.
              </SectionHeading>
              <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-[15px] leading-relaxed text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200">
                <strong>Preview:</strong> these endpoints are still in
                development and may change before general availability.
              </div>
            </section>

            <section id="quickstart" className="scroll-mt-28">
              <SectionHeading eyebrow="Quickstart" title="Send your first SMS in minutes" />
              <ol className="grid gap-6 md:grid-cols-3">
                {steps.map(({ icon: Icon, title, description }, i) => (
                  <li
                    key={title}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-800"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-colors group-hover:bg-green-600 dark:bg-green-900/30">
                        <Icon size={22} className="text-green-600 transition-colors group-hover:text-white" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-gray-400">
                        STEP {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-gray-600 dark:text-gray-400">{description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="authentication" className="scroll-mt-28">
              <SectionHeading eyebrow="Authentication" title="Authenticate with an API key">
                Every request must include your API key as a Bearer token in the
                Authorization header. Keep your key secret and never expose it in
                browser code.
              </SectionHeading>
              <CodeBlock
                code={`Authorization: Bearer YOUR_API_KEY`}
                header={<span className="px-1 text-xs font-medium text-gray-400">HTTP header</span>}
              />
              <p className="mt-4 text-[15px] text-gray-600 dark:text-gray-400">
                Store the key in an environment variable such as{" "}
                <code className={inlineCode}>DAGU_API_KEY</code>. Requests
                without a valid key return <code className={inlineCode}>401 Unauthorized</code>.
              </p>
            </section>

            <section id="base-url" className="scroll-mt-28">
              <SectionHeading eyebrow="Base URL" title="Where to send requests">
                All endpoints are relative to the base URL below.
              </SectionHeading>
              <CodeBlock
                code={BASE_URL}
                header={<span className="px-1 text-xs font-medium text-gray-400">Base URL</span>}
              />
            </section>

            <div>
              <SectionHeading eyebrow="Endpoints" title="SMS">
                Send SMS messages to your customers and verify the one-time codes they enter.
              </SectionHeading>
              <ApiDocs />
            </div>

            <section id="errors" className="scroll-mt-28">
              <SectionHeading eyebrow="Reference" title="Status codes & errors">
                Errors return a JSON body with{" "}
                <code className={inlineCode}>success: false</code> and a
                human-readable <code className={inlineCode}>message</code>.
              </SectionHeading>

              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <table className="w-full min-w-[520px] text-left text-[15px]">
                  <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Code</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Status</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {errors.map((e) => (
                      <tr key={e.code}>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center gap-1.5 font-mono font-semibold ${
                              e.code < 300 ? "text-green-600" : e.code < 500 ? "text-amber-600" : "text-red-600"
                            }`}
                          >
                            {e.code}
                          </span>
                        </td>
                        <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{e.name}</td>
                        <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{e.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <CodeBlock
                  code={errorShape}
                  header={<span className="px-1 text-xs font-medium text-gray-400">Error response</span>}
                />
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-green-700 px-8 py-10 text-center dark:bg-green-900">
              <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to start building?</h2>
              <p className="mx-auto mt-3 max-w-xl text-green-100">
                Create a free account to get your API key, or talk to us about
                your integration.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="rounded-md bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
                >
                  Create an account
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
