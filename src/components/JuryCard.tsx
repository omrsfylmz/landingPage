import React from "react";

interface JuryCardProps {
  title: string;
  role: string;
  imageUrl: string;
  index: number;
}

const JuryCard = ({ title, role, imageUrl, index }: JuryCardProps) => {
  const backgroundPosition = index % 2 === 0 ? "left center" : "right center";

  return (
    <div
      className="w-[300px] h-[250px] rounded overflow-hidden shadow-lg m-4 justify-center items-center bg-cover transition-transform duration-300 hover:opacity-90 hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition }}
    >
      <div className="bg-white bg-opacity-75 px-4 py-3 h-full flex flex-col justify-center">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default JuryCard;
