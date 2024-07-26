"use client";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const ShiftingDropDown = () => {
  return (
    <div className="flex h-14 w-full justify-start bg-neutral-950 pt-2 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState<"r" | "l" | null>(null);

  const handleSetSelected = (val: any) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div className="relative flex h-fit gap-2">
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && (
          <Content
            dir={dir}
            selected={selected}
            handleSetSelected={handleSetSelected}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: React.ReactNode;
  tab: any;
  handleSetSelected: any;
  selected: any;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
  handleSetSelected,
}: {
  selected: any;
  dir: any;
  handleSetSelected: any;
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[1050px] rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      onMouseEnter={() => handleSetSelected(selected)}
      onMouseLeave={() => handleSetSelected(null)}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: any }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      console.log(tabRect);
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Speech = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a
          className="mb-1 block text-sm text-neutral-400  hover:text-neutral-50"
          href="/sanata-sozumuz"
        >
          Sanata Sözümüz
        </a>
      </div>
    </div>
  );
};

const Celebrity = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">
            Üstün Akmen&apos;i Tanımak
          </h3>
          <a
            href="/afife-jale-kimdir"
            className="mb-1 block text-sm text-neutral-400  hover:text-neutral-50"
          >
            Üstün Akmen Kimdir?
          </a>
          <a
            href="#"
            className="block text-sm text-neutral-400  hover:text-neutral-50"
          >
            Üstün Akmen&apos;e Saygı Sergisi
          </a>
        </div>
      </div>
    </div>
  );
};

const Jury = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">
            Yönetmelik ve Jüri Üyeleri&quot;
          </h3>
          <a
            href="#"
            className="mb-1 block text-sm text-neutral-400  hover:text-neutral-50"
          >
            Yönetmelik
          </a>
          <a
            href="/yonetmelik-ve-juri-uyeleri/juri-uyeleri"
            className="block text-sm text-neutral-400  hover:text-neutral-50"
          >
            Jüri Üyeleri
          </a>
        </div>
      </div>
    </div>
  );
};

const Winner = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Kazananlar ve Adaylar</h3>
          <a
            href="/kazananlar-ve-adaylar/2024"
            className="mb-1 block text-sm text-neutral-400  hover:text-neutral-50"
          >
            2024
          </a>
        </div>
      </div>
    </div>
  );
};

const Press = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Basın Odası</h3>
          <a
            href="#"
            className="mb-1 block text-sm text-neutral-400  hover:text-neutral-50"
          >
            Basın Bultenlerimiz
          </a>
        </div>
      </div>
    </div>
  );
};

const Scholarship = () => {
  return (
    <div className="flex gap-4">
      <div>
        <a href="" className="mb-2 text-sm font-medium">
          TEV Tiyatro Bursu
        </a>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Sanata Sözümüz",
    Component: Speech,
  },
  {
    title: "Üstün Akmen'i Tanımak",
    Component: Celebrity,
  },
  {
    title: "Yönetmelik ve Jüri Üyeleri",
    Component: Jury,
  },
  {
    title: "Kazananlar ve Adaylar",
    Component: Winner,
  },
  {
    title: "Basın Odası",
    Component: Press,
  },
  {
    title: "TEV Tiyatro Bursu",
    Component: Scholarship,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
