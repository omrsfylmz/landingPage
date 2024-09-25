// components/JuryCard.tsx
import Image from "next/image";
import React from "react";

interface JuryCardProps {
  image: any;
  title: string;
  role: string;
}

const JuryCard = ({ image, title, role }: JuryCardProps) => {
  return (
    <div className="w-[380px] rounded overflow-hidden shadow-lg m-4 justify-center items-center">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
    </div>
  );
};

export default JuryCard;
