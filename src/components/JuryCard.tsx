// components/JuryCard.js
import React from "react";

interface JuryCardProps {
  image: string;
  title: string;
  role: string;
}

const JuryCard = ({ image, title, role }: JuryCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
    </div>
  );
};

export default JuryCard;
