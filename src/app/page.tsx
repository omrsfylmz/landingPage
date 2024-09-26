"use client";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import Image from "next/image"; // For the logo
export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col container mx-auto px-4 py-8">
      {/* Logo and Heading Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:gap-12 lg:gap-36 my-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Üstün Akmen Ödülleri
        </h1>
      </div>
      {/* Carousel Section */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-4xl my-4">
        <SwipeCarousel />
      </div>
    </main>
  );
}
