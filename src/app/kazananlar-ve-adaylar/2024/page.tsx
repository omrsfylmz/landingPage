"use client";


import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import KazananlarTabs from "./components/KazananlarTabs";
import AdaylarTabs from "./components/AdaylarTabs";

const TwoThousandTwentyFour = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [kazananlarTab, setKazananlarTab] = useState<string | null>(null);
  const [adaylarTab, setAdaylarTab] = useState<string | null>(null);

  const cards = [
    { title: "Kazananlar", link: "#" },
    { title: "Adaylar", link: "#" },
    { title: "Basın Toplantısı Fotoğrafları", link: "#" },
    { title: "Ödül Töreni Fotoğrafları", link: "#" },
    { title: "Kazananlar / Sahne Arkası Fotoğrafları", link: "#" },
  ];

  const renderTabsContent = () => {
    switch (selectedCard) {
      case "Kazananlar":
        return (
          <KazananlarTabs onTabChange={setKazananlarTab} />
        );
      case "Adaylar":
        return (
          <AdaylarTabs onTabChange={setAdaylarTab} />
        );
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {cards.map((card, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setSelectedCard(card.title)}
                className="bg-yellow-500 text-white p-4 rounded shadow hover:bg-yellow-600 transition"
              >
                {card.title}
              </a>
            ))}
          </div>
        );
    }
  };

  const renderBreadcrumbs = () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/kazananlar-ve-adaylar/2024">
              Kazananlar ve Adaylar
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>2024</BreadcrumbPage>
          </BreadcrumbItem>
          {selectedCard && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{selectedCard}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
          {(selectedCard === "Kazananlar" && kazananlarTab) || 
           (selectedCard === "Adaylar" && adaylarTab) ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{kazananlarTab || adaylarTab}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      {renderBreadcrumbs()}
      {renderTabsContent()}
    </div>
  );
};

export default TwoThousandTwentyFour;
