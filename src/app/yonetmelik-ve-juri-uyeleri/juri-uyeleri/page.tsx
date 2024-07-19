// pages/index.js
import React from "react";
import JuryCard from "@/components/JuryCard";

const juryMembers = [
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "PROF. DR. MERİH TANGÜN",
    role: "MSGSÜ İst. Devlet Konservatuvarı - Tiyatro ASD\nSZFE Budapeste Drama ve Film Sanatları Üniversitesi",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "AHHAN ŞENER",
    role: "Oyuncu",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "DOÇ. ALİ BARIŞIK",
    role: "Tiyatro Akademisyeni",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "PROF. DR. MERİH TANGÜN",
    role: "MSGSÜ İst. Devlet Konservatuvarı - Tiyatro ASD\nSZFE Budapeste Drama ve Film Sanatları Üniversitesi",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "AHHAN ŞENER",
    role: "Oyuncu",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "DOÇ. ALİ BARIŞIK",
    role: "Tiyatro Akademisyeni",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "PROF. DR. MERİH TANGÜN",
    role: "MSGSÜ İst. Devlet Konservatuvarı - Tiyatro ASD\nSZFE Budapeste Drama ve Film Sanatları Üniversitesi",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "AHHAN ŞENER",
    role: "Oyuncu",
  },
  {
    image: "https://www.afife.org/_assets/img/jury/Merih_Tang%C3%BCn.png",
    title: "DOÇ. ALİ BARIŞIK",
    role: "Tiyatro Akademisyeni",
  },
];

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {juryMembers.map((member, index) => (
        <JuryCard
          key={index}
          image={member.image}
          title={member.title}
          role={member.role}
        />
      ))}
    </div>
  );
};

export default Home;
