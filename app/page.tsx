import Menu from "@/components/menu";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/background.svg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      <Menu />
    </div>
  );
}
