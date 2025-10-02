import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
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
      <div className="w-full h-[800px] items-center flex flex-col">
        <div className="w-full h-[271px] relative mt-16">
          <Image
            src="/spider-man.png"
            alt="spider-man"
            fill
            className="absolute"
          />
        </div>
        <div className="z-10 items-center justify-center flex flex-col mt-10 mx-6">
          <Image src="/logo-2.png" alt="logo" width={180} height={88} />
          <p className="text-center mt-8">
            Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel.
            Após a morte prematura de seu pai, Miles foi apresentado a Peter
            Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles
            foi picado por uma aranha geneticamente modificada da Oscorp, ele
            desenvolveu poderes únicos e, após meses de insistência, Peter
            concordou em treiná-lo.
          </p>
          <Button className="w-[214px] h-[42px] mt-8">COMPRAR INGRESSO</Button>
        </div>
      </div>
      <div className="bg-[#111826] w-full z-10 absolute">
        <div className="mt-[105px] mx-[28px]">
          <h2 className="text-center font-semibold text-xl mb-4">Cinema</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
        <div className="mt-8 mx-[28px]">
          <h2 className="text-center font-semibold text-xl mb-4">Prêmios</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
        <div className="mt-8 mx-[28px] mb-16">
          <h2 className="text-center font-semibold text-xl mb-4">Indicações</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
      </div>
    </div>
  );
}
