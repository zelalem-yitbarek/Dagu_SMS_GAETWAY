"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";

const ENDPOINT = "/api/dagusms/v1/create";

const requestHeaders = [
  { key: "Content-Type", value: "application/json", required: true },
  { key: "Authorization", value: "Bearer YOUR_API_KEY", required: true },
];

const bodyParams = [
  { name: "to", type: "string", required: true, description: "Recipient phone number in international format, e.g. +251911234567." },
  { name: "message", type: "string", required: true, description: "Text to send, 1 to 1,000 characters. Unicode (Amharic, Afaan Oromo, Arabic) is supported." },
  { name: "senderName", type: "string", required: false, description: "Approved sender name shown to the recipient. Defaults to your account's sender name." },
];

const requestBody = `{
  "to": "+251911234567",
  "message": "Your Dagu verification code is 482913",
  "senderName": "DAGU"
}`;

const responses = [
  {
    status: 201,
    label: "201 Created",
    tone: "ok",
    body: `{
  "success": true,
  "message": "SMS created and queued for delivery",
  "data": {
    "id": "6741f2c9a8b3e5d1c0f9a123",
    "to": "+251911234567",
    "senderName": "DAGU",
    "message": "Your Dagu verification code is 482913",
    "status": "queued",
    "segments": 1,
    "createdAt": "2026-11-16T09:30:00.000Z"
  }
}`,
  },
  {
    status: 400,
    label: "400 Bad Request",
    tone: "error",
    body: `{
  "success": false,
  "message": "Recipient phone number is required"
}`,
  },
  {
    status: 401,
    label: "401 Unauthorized",
    tone: "error",
    body: `{
  "success": false,
  "message": "Invalid or missing API key"
}`,
  },
];

const nodeExamples = {
  fetch: `// Node.js 18+ (built-in fetch)
const BASE_URL = "http://localhost:3001"; // replace with your Dagu API URL
const API_KEY = process.env.DAGU_API_KEY;

async function sendSms() {
  const res = await fetch(\`\${BASE_URL}${ENDPOINT}\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${API_KEY}\`,
    },
    body: JSON.stringify({
      to: "+251911234567",
      message: "Your Dagu verification code is 482913",
      senderName: "DAGU",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(\`Dagu API error \${res.status}: \${data.message}\`);
  }

  console.log("SMS queued:", data.data.id);
  return data;
}

sendSms().catch(console.error);`,
  axios: `// npm install axios
import axios from "axios";

const dagu = axios.create({
  baseURL: "http://localhost:3001", // replace with your Dagu API URL
  headers: { Authorization: \`Bearer \${process.env.DAGU_API_KEY}\` },
});

async function sendSms() {
  try {
    const { data } = await dagu.post("${ENDPOINT}", {
      to: "+251911234567",
      message: "Your Dagu verification code is 482913",
      senderName: "DAGU",
    });

    console.log("SMS queued:", data.data.id);
    return data;
  } catch (err) {
    const status = err.response?.status;
    const message = err.response?.data?.message ?? err.message;
    console.error(\`Dagu API error \${status ?? ""}: \${message}\`);
  }
}

sendSms();`,
};

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

function CodeBlock({
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

export default function ApiDocs() {
  const [lang, setLang] = useState<keyof typeof nodeExamples>("fetch");
  const [resIdx, setResIdx] = useState(0);

  return (
    <section
      id="create-sms"
      className="mt-16 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Title */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-green-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
              POST
            </span>
            <code className="break-all text-base font-semibold text-gray-900 dark:text-white">
              {ENDPOINT}
            </code>
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
              Preview
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Create &amp; send an SMS
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            Creates an SMS message and queues it for delivery to a single
            recipient. Use it for OTPs, alerts, and notifications.
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

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Left: reference */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Headers
            </h3>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {requestHeaders.map((h) => (
                <div key={h.key} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                  <code className="text-sm font-semibold text-gray-900 dark:text-white">{h.key}</code>
                  <code className="text-sm text-gray-600 dark:text-gray-400">{h.value}</code>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Body parameters
            </h3>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {bodyParams.map((p) => (
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
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Request body (JSON)
            </h3>
            <CodeBlock
              code={requestBody}
              header={<span className="px-1 text-xs font-medium text-gray-400">application/json</span>}
            />
          </div>
        </div>

        {/* Right: code + responses */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Node.js example
            </h3>
            <CodeBlock
              code={nodeExamples[lang]}
              header={
                <>
                  <Tab active={lang === "fetch"} onClick={() => setLang("fetch")}>fetch</Tab>
                  <Tab active={lang === "axios"} onClick={() => setLang("axios")}>axios</Tab>
                </>
              }
            />
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Responses (JSON)
            </h3>
            <CodeBlock
              code={responses[resIdx].body}
              header={responses.map((r, i) => (
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
