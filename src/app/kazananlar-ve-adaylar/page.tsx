import Link from "next/link";

interface YearCardProps {
  year: number;
}

const YearCard: React.FC<YearCardProps> = ({ year }) => {
  return (
    <Link href={`/kazananlar-ve-adaylar/${year}`} passHref>
      <div className="border rounded-lg shadow-md p-6 text-center cursor-pointer transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold">{year}</h2>
      </div>
    </Link>
  );
};

const KazananlarVeAdaylar: React.FC = () => {
  const years = [2024, 2023, 2022, 2019, 2018, 2017];

  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {years.map((year) => (
          <YearCard key={year} year={year} />
        ))}
      </div>
    </div>
  );
};

export default KazananlarVeAdaylar;
