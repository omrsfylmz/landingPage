import React from "react";
import JuryCard from "@/components/JuryCard";
import ProfilePic from "../../../../public/imgs/pp.png";
const juryMembers = [
  {
    image: ProfilePic,
    title: "ŞAYLAN AKMEN",
    role: "KURUCU BAŞKAN",
  },
  {
    image: ProfilePic,
    title: "ATAOL BEHRAMOĞLU",
    role: "ŞAİR -YAZAR - ÇEVİRMEN",
  },
  {
    image: ProfilePic,
    title: "YILDIZ TUNBUL",
    role: "ULUSLARARASI OPERA SANATÇISI - SOPRANO",
  },
  {
    image: ProfilePic,
    title: "DERYA ALABORA",
    role: "OYUNCU",
  },
  {
    image: ProfilePic,
    title: "TAMER LEVENT",
    role: "OYUNCU -YÖNETMEN- YAZAR- SANAT YÖNETMENİ",
  },
  {
    image: ProfilePic,
    title: "GÜLER BERKİN",
    role: "AVUKAT",
  },
  {
    image: ProfilePic,
    title: "SUNA KESKİN",
    role: "OYUNCU",
  },
  {
    image: ProfilePic,
    title: "ANTA TOROS",
    role: "OYUNCU",
  },
  {
    image: ProfilePic,
    title: "DOÇENT DR. SERAP YÜZGÜLLER",
    role: "SANAT TARİHÇİSİ - AKADEMİSYEN",
  },
  {
    image: ProfilePic,
    title: "LEVENT KURUMLU",
    role: "ÖĞRETİM GÖREVLİSİ -TİYATRO VE İNGİLİZ DİLİ EDEBİYATI",
  },
  {
    image: ProfilePic,
    title: "FİLİZ AYGÜNDÜZ",
    role: "MİLLİYET SANAT DERGİSİ GENEL YAYIN YÖNETMENİ -ROMANCI",
  },
  {
    image: ProfilePic,
    title: "DERYA ÖZGÖREN",
    role: "BASIN PR UZMANI",
  },
  {
    image: ProfilePic,
    title: "KIVANÇ TERZİOĞLU",
    role: "FİLM-SAN VAKFI GENEL MÜDÜRÜ",
  },
  {
    image: ProfilePic,
    title: "SELİN VARDARLI",
    role: "OYUNCU",
  },
  {
    image: ProfilePic,
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
          image={member.image}
          title={member.title}
          role={member.role}
        />
      ))}
    </div>
  );
};

export default Home;
