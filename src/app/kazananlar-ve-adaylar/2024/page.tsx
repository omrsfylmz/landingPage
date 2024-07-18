import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const TwoThousandTwentyFour = () => {
  const cards = [
    { title: "Kazananlar", link: "#" },
    { title: "Adaylar", link: "#" },
    { title: "Basın Toplantısı Fotoğrafları", link: "#" },
    { title: "Ödül Töreni Fotoğrafları", link: "#" },
    { title: "Kazananlar / Sahne Arkası Fotoğrafları", link: "#" },
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/kazananlar-ve-adaylar/2024">Kazananlar ve Adaylar</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>2024</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="bg-yellow-500 text-white p-4 rounded shadow hover:bg-yellow-600 transition"
          >
            {card.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TwoThousandTwentyFour;