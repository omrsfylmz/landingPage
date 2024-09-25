// components/Awards.tsx
import React from "react";

interface Award {
  title: string;
  winner: { name: string; link: string };
  game: { name: string; link: string };
}

interface AwardsProps {
  awards?: any;
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Ödüller</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awards?.map((award: any, index: any) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md p-4 hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {award.title}
            </h2>
            <p>
              <a
                href={award.winner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {award.winner.name}
              </a>
            </p>
            <p>
              <a
                href={award?.game?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {award?.game?.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
