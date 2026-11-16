"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Endpoint definitions                                                */
/* ------------------------------------------------------------------ */

type Param = { name: string; type: string; required: boolean; description: string };
type Response = { status: number; label: string; tone: "ok" | "error"; body: string };

export type Endpoint = {
  id: string;
  method: "POST";
  path: string;
  title: string;
  description: string;
  params: Param[];
  body: Record<string, string>;
  successLog: string; // JS expression printed on success, using `data`
  responses: Response[];
};

const json = (v: unknown) => JSON.stringify(v, null, 2);

const unauthorized: Response = {
  status: 401,
  label: "401 Unauthorized",
  tone: "error",
  body: json({ success: false, message: "Invalid or missing API key" }),
};

export const endpoints: Endpoint[] = [
  {
    id: "create-sms",
    method: "POST",
    path: "/api/dagusms/v1/create",
    title: "Create & send an SMS",
    description:
      "Creates an SMS message and queues it for delivery to a single recipient. Use it for OTPs, alerts, and notifications.",
    params: [
      { name: "to", type: "string", required: true, description: "Recipient phone number in international format, e.g. +251911234567." },
      { name: "message", type: "string", required: true, description: "Text to send, 1 to 1,000 characters. Unicode (Amharic, Afaan Oromo, Arabic) is supported." },
      { name: "senderName", type: "string", required: false, description: "Approved sender name shown to the recipient. Defaults to your account's sender name." },
    ],
    body: {
      to: "+251911234567",
      message: "Your Dagu verification code is 482913",
      senderName: "DAGU",
    },
    successLog: `"SMS queued:", data.data.id`,
    responses: [
      {
        status: 201,
        label: "201 Created",
        tone: "ok",
        body: json({
          success: true,
          message: "SMS created and queued for delivery",
          data: {
            id: "6741f2c9a8b3e5d1c0f9a123",
            to: "+251911234567",
            senderName: "DAGU",
            message: "Your Dagu verification code is 482913",
            status: "queued",
            segments: 1,
            createdAt: "2026-11-16T09:30:00.000Z",
          },
        }),
      },
      {
        status: 400,
        label: "400 Bad Request",
        tone: "error",
        body: json({ success: false, message: "Recipient phone number is required" }),
      },
      unauthorized,
    ],
  },
  {
    id: "verify-sms",
    method: "POST",
    path: "/api/dagusms/v1/verify",
    title: "Verify an SMS code",
    description:
      "Checks the one-time code a user entered against the code sent to their phone number. A code can be verified only once and expires after 5 minutes.",
    params: [
      { name: "to", type: "string", required: true, description: "Phone number the code was sent to, in international format, e.g. +251911234567." },
      { name: "code", type: "string", required: true, description: "The one-time code the user entered, e.g. 482913." },
    ],
    body: {
      to: "+251911234567",
      code: "482913",
    },
    successLog: `"Verified:", data.data.verified`,
    responses: [
      {
        status: 200,
        label: "200 OK",
        tone: "ok",
        body: json({
          success: true,
          message: "Code verified successfully",
          data: {
            to: "+251911234567",
            verified: true,
            verifiedAt: "2026-11-16T09:31:12.000Z",
          },
        }),
      },
      {
        status: 400,
        label: "400 Bad Request",
        tone: "error",
        body: json({ success: false, message: "Invalid or expired verification code" }),
      },
      unauthorized,
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Node.js examples, generated from each endpoint's body              */
/* ------------------------------------------------------------------ */

const indent = (s: string, n: number) =>
  s.split("\n").map((l, i) => (i === 0 ? l : " ".repeat(n) + l)).join("\n");

const jsObject = (obj: Record<string, string>) =>
  `{\n${Object.entries(obj)
    .map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`)
    .join("\n")}\n}`;

function nodeExamples(ep: Endpoint) {
  const body = jsObject(ep.body);
  return {
    fetch: `// Node.js 18+ (built-in fetch)
const BASE_URL = "http://localhost:3001"; // replace with your Dagu API URL
const API_KEY = process.env.DAGU_API_KEY;

async function main() {
  const res = await fetch(\`\${BASE_URL}${ep.path}\`, {
    method: "${ep.method}",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${API_KEY}\`,
    },
    body: JSON.stringify(${indent(body, 4)}),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(\`Dagu API error \${res.status}: \${data.message}\`);
  }

  console.log(${ep.successLog});
  return data;
}

main().catch(console.error);`,
    axios: `// npm install axios
import axios from "axios";

const dagu = axios.create({
  baseURL: "http://localhost:3001", // replace with your Dagu API URL
  headers: { Authorization: \`Bearer \${process.env.DAGU_API_KEY}\` },
});

async function main() {
  try {
    const { data } = await dagu.post("${ep.path}", ${indent(body, 4)});

    console.log(${ep.successLog});
    return data;
  } catch (err) {
    const status = err.response?.status;
    const message = err.response?.data?.message ?? err.message;
    console.error(\`Dagu API error \${status ?? ""}: \${message}\`);
  }
}

main();`,
  };
}

/* ------------------------------------------------------------------ */
/* UI building blocks                                                  */
/* ------------------------------------------------------------------ */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard unavailable */
        }
      }}
      aria-label="Copy code"
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-400 transition hover:bg-white/10 hover:text-white"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function CodeBlock({
  code,
  header,
}: {
  code: string;
  header: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
      <div className="flex items-center justify-between gap-2 border-b border-gray-800 px-3 py-2">
        <div className="flex min-w-0 flex-wrap items-center gap-1">{header}</div>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Tab({
  active,
  onClick,
  children,
  tone,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  tone?: string;
}) {
  const dot =
    tone === "ok" ? "bg-green-500" : tone === "error" ? "bg-red-500" : null;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition ${
        active ? "bg-white/10 text-white" : "text-gray-400 hover:text-gray-200"
      }`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />}
      {children}
    </button>
  );
}

const subHeading =
  "mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400";

function EndpointDoc({ ep }: { ep: Endpoint }) {
  const [lang, setLang] = useState<"fetch" | "axios">("fetch");
  const [resIdx, setResIdx] = useState(0);
  const examples = nodeExamples(ep);
  const requestBody = json(ep.body);

  return (
    <section
      id={ep.id}
      className="scroll-mt-28 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Title */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-green-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
              {ep.method}
            </span>
            <code className="break-all text-base font-semibold text-gray-900 dark:text-white">
              {ep.path}
            </code>
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
              Preview
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {ep.title}
          </h3>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            {ep.description}
          </p>
        </div>

        <a
          href="/dagu-sms.postman_collection.json"
          download
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-green-600 hover:text-green-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-green-500 dark:hover:text-green-400"
        >
          <Download size={16} />
          Postman collection
        </a>
      </div>

      <div className="mt-10 grid gap-10 xl:grid-cols-2">
        {/* Left: reference */}
        <div className="space-y-8">
          <div>
            <h4 className={subHeading}>Headers</h4>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {[
                { key: "Content-Type", value: "application/json" },
                { key: "Authorization", value: "Bearer YOUR_API_KEY" },
              ].map((h) => (
                <div key={h.key} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                  <code className="text-sm font-semibold text-gray-900 dark:text-white">{h.key}</code>
                  <code className="text-sm text-gray-600 dark:text-gray-400">{h.value}</code>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={subHeading}>Body parameters</h4>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {ep.params.map((p) => (
                <div key={p.name} className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-sm font-semibold text-gray-900 dark:text-white">{p.name}</code>
                    <span className="text-xs text-gray-500">{p.type}</span>
                    {p.required ? (
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">required</span>
                    ) : (
                      <span className="text-xs text-gray-500">optional</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={subHeading}>Request body (JSON)</h4>
            <CodeBlock
              code={requestBody}
              header={<span className="px-1 text-xs font-medium text-gray-400">application/json</span>}
            />
          </div>
        </div>

        {/* Right: code + responses */}
        <div className="space-y-8">
          <div>
            <h4 className={subHeading}>Node.js example</h4>
            <CodeBlock
              code={examples[lang]}
              header={
                <>
                  <Tab active={lang === "fetch"} onClick={() => setLang("fetch")}>fetch</Tab>
                  <Tab active={lang === "axios"} onClick={() => setLang("axios")}>axios</Tab>
                </>
              }
            />
          </div>

          <div>
            <h4 className={subHeading}>Responses (JSON)</h4>
            <CodeBlock
              code={ep.responses[resIdx].body}
              header={ep.responses.map((r, i) => (
                <Tab key={r.status} active={resIdx === i} onClick={() => setResIdx(i)} tone={r.tone}>
                  {r.label}
                </Tab>
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ApiDocs() {
  return (
    <div className="space-y-10">
      {endpoints.map((ep) => (
        <EndpointDoc key={ep.id} ep={ep} />
      ))}
    </div>
  );
}
