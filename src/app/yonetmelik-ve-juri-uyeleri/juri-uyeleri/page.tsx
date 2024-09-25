import React from "react";
import JuryCard from "@/components/JuryCard";

const juryMembers = [
  {
    image: "/cardBg.png",
    title: "ŞAYLAN AKMEN",
    role: "KURUCU BAŞKAN",
  },
  {
    image: "/cardBg.png",
    title: "ATAOL BEHRAMOĞLU",
    role: "ŞAİR -YAZAR - ÇEVİRMEN - EDEBİYATÇI",
  },
  {
    image: "/cardBg.png",
    title: "YILDIZ TUNBUL",
    role: "ULUSLARARASI OPERA SANATÇISI",
  },
  {
    image: "/cardBg.png",
    title: "TAMER LEVENT",
    role: "OYUNCU -YÖNETMEN- YAZAR- SANAT YÖNETMENİ",
  },
  {
    image: "/cardBg.png",
    title: "GÜLER BERKİN",
    role: "AVUKAT",
  },
  {
    image: "/cardBg.png",
    title: "SUNA KESKİN",
    role: "OYUNCU",
  },
  {
    image: "/cardBg.png",
    title: "ANTA TOROS",
    role: "OYUNCU",
  },
  {
    image: "/cardBg.png",
    title: "DOÇENT DR. SERAP YÜZGÜLLER",
    role: "SANAT TARİHÇİSİ - AKADEMİSYEN",
  },
  {
    image: "/cardBg.png",
    title: "LEVENT KURUMLU",
    role: "ÖĞRETİM GÖREVLİSİ -TİYATRO VE İNGİLİZ DİLİ EDEBİYATI",
  },
  {
    image: "/cardBg.png",
    title: "FİLİZ AYGÜNDÜZ",
    role: "MİLLİYET SANAT DERGİSİ GENEL YAYIN YÖNETMENİ -ROMANCI",
  },
  {
    image: "/cardBg.png",
    title: "DERYA ÖZGÖREN",
    role: "BASIN PR UZMANI",
  },
  {
    image: "/cardBg.png",
    title: "KIVANÇ TERZİOĞLU",
    role: "FİLM-SAN VAKFI GENEL MÜDÜRÜ",
  },
  {
    image: "/cardBg.png",
    title: "SELİN VARDARLI",
    role: "OYUNCU",
  },
  {
    image: "/cardBg.png",
    title: "TURANALP ŞANLI",
    role: "OYUNCU",
  },
];

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {juryMembers.map((member, index) => (
        <JuryCard
          key={index}
          imageUrl={member.image}
          title={member.title}
          role={member.role}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
