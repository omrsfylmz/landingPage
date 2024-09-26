"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShiftingDropDown = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
  });

  const toggleDropdown = (dropdownName: string) => {
    setDropdowns((prevState: any) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 z-50">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/"
          >
            AnaSayfa
          </Link>

          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/ustun-akmen-kimdir"
          >
            Üstün Akmen
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/yazilar"
          >
            Üstün Akmen Yazıları
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/juri-uyeleri"
          >
            Jüri Üyeleri
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("dropdown1")}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Kazananlar</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                  dropdowns.dropdown1 ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdowns.dropdown1 && (
              <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 overflow-y-scroll max-h-[130px]">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2024"
                  >
                    2024
                  </Link>
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2023"
                  >
                    2023
                  </Link>
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2022"
                  >
                    2022
                  </Link>
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2019"
                  >
                    2019
                  </Link>
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2018"
                  >
                    2018
                  </Link>
                  <Link
                    onClick={() => toggleDropdown("dropdown1")}
                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/kazananlar-ve-adaylar/2017"
                  >
                    2017
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ShiftingDropDown;
