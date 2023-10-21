"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home.png"
        height={0}
        width={0}
        alt="Home Banner"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
