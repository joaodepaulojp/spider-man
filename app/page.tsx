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
      <div className="relative w-full h-[800px] items-center flex">
        <Image
          src="/spider-man.png"
          alt="spider-man"
          fill
          className="object-top object-contain"
        />
        <div className="z-10 items-center justify-center flex flex-col mt-20">
          <Image src="/logo-2.png" alt="logo" width={180} height={88} />
          <p>
            Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel.
            Após a morte prematura de seu pai, Miles foi apresentado a Peter
            Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles
            foi picado por uma aranha geneticamente modificada da Oscorp, ele
            desenvolveu poderes únicos e, após meses de insistência, Peter
            concordou em treiná-lo.
          </p>
        </div>
      </div>
    </div>
  );
}
