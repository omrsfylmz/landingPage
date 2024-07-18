"use client";
import { useState } from "react";

const FlyoutMenu = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li
            onMouseEnter={() => setHovered("afife")}
            onMouseLeave={() => setHovered(null)}
            className="relative"
          >
            <a href="#" className="hover:text-gray-300">
              AFİFE JALE'Yİ TANIMAK
            </a>
            {hovered === "afife" && (
              <ul className="absolute left-full top-0 bg-gray-700 text-white p-4">
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
            <a href="#" className="hover:text-gray-300">
              YÖNETMELİK VE JÜRİ ÜYELERİ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              KAZANANLAR VE ADAYLAR
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              BASIN ODASI
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              TEV TİYATRO BURSU
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FlyoutMenu;
