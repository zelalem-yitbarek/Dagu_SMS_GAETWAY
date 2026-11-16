"use client";

import { useEffect, useState } from "react";

export type DocsNavGroup = {
  title: string;
  items: { id: string; label: string; method?: string }[];
};

export default function DocsSidebar({ groups }: { groups: DocsNavGroup[] }) {
  const [active, setActive] = useState(groups[0]?.items[0]?.id ?? "");

  // Highlight the section currently in view
  useEffect(() => {
    const ids = groups.flatMap((g) => g.items.map((i) => i.id));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <nav aria-label="Documentation" className="space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            {group.title}
          </p>
          <ul className="space-y-1 border-l border-gray-200 dark:border-gray-800">
            {group.items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`-ml-px flex items-center gap-2 border-l-2 py-1.5 pl-4 text-[15px] transition-colors ${
                      isActive
                        ? "border-green-600 font-semibold text-green-700 dark:text-green-400"
                        : "border-transparent text-gray-600 hover:border-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {item.method && (
                      <span className="rounded bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {item.method}
                      </span>
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
