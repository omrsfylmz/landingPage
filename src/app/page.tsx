"use client";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import Image from "next/image"; // For the logo

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col container">
      <div className="flex items-center w-full gap-36 mt-2">
        <Image
          className="top-8"
          src="/logo.png" // Replace with the actual path to your logo
          alt="Logo"
          width={100} // Adjust logo size
          height={100}
        />

        <h1 className="text-4xl font-bold text-center">Üstün Akmen Ödülleri</h1>
      </div>

      <div className="flex justify-center items-center container mx-auto my-2">
        <div className="w-full sm:w-[500px] lg:w-[800px]">
          <SwipeCarousel />
        </div>
      </div>
    </main>
  );
}
