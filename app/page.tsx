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
      <div className="relative z-10 w-full h-20  flex flex-row items-center justify-between">
        <Image
          src="/logo-spider.svg"
          alt="logo"
          width={24}
          height={34}
          className="m-3"
        />

        <div className="flex gap-6 justify-end items-center mr-6">
          <p className="text-sm cursor-pointer">Sinopse</p>
          <p className="text-sm cursor-pointer">Elenco</p>
          <p className="text-sm cursor-pointer">Fórum</p>
        </div>
      </div>
    </div>
  );
}
