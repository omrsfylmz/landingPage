"use client";
import { Button } from "@/components/ui/button";
import FlyoutMenu from "@/components/ui/flyoutMenu";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen w-screen bg-white dark:bg-slate-900">
        <aside
          id="sidebar"
          className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white pl-3 py-4 dark:border-slate-700 dark:bg-slate-900">
            <div
              href="#"
              className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <span className="ml-3 text-base font-semibold">Taxonomy</span>
            </div>
            <ul className="space-y-2 text-sm font-medium">
              <li
                onMouseEnter={() => setHovered("afife")}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                >
                  <span className="ml-3 flex-1 whitespace-nowrap">Home</span>
                </a>
                {hovered === "afife" && (
                  <ul className="absolute justify-center items-center w-[300px] left-full top-0 bg-black bg-opacity-25 text-white p-4 h-screen">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                        AFİFE JALE KİMDİR?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                        AFİFE JALE'YE SAYGI SERGİSİ
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                >
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Customers
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                >
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                >
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-auto flex">
              <div className="flex w-full justify-between">
                <span className="text-sm font-medium text-black dark:text-white">
                  email@example.com
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-roledescription="more menu"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  className="h-5 w-5 text-black dark:text-white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
