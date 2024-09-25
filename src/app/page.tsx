"use client";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import Image from "next/image"; // For the logo

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col container">
      <div className="flex items-center w-full justify-between">
        <Image
          className="top-8"
          src="/logo.png" // Replace with the actual path to your logo
          alt="Logo"
          width={100} // Adjust logo size
          height={100}
        />

        <div className="flex justify-center items-center mt-20 flex-1">
          <h1 className="text-4xl font-bold text-center">
            Üstün Akmen Ödülleri
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center container mx-auto mt-10">
        <div className="w-full sm:w-3/4 lg:w-2/3 h-[300px]">
          <SwipeCarousel />
        </div>
      </div>
    </main>
  );
}
