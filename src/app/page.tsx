"use client";
import { SwipeCarousel } from "@/components/SwipeCarousel";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center container mx-auto">
        <div className="w-full h-full mt-28">
          <SwipeCarousel />
        </div>
      </div>
    </main>
  );
}
