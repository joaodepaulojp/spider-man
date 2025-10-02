import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full relative lg:w-screen lg:h-screen lg:overflow-x-hidden">
      <Image
        src="/background.svg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      <Menu />
      <div className="w-full h-[800px] items-center flex flex-col md:justify-center md:flex-row">
        <div className="w-full h-[271px] relative mt-16 md:absolute lg:top-40 md:right-0 lg:w-[700px] lg:h-[600px] md:w-[420px] md:h-[320px]">
          <Image
            src="/spider-man.png"
            alt="spider-man"
            fill
            className="absolute"
          />
        </div>
        <div className="z-10 items-center justify-center flex flex-col mt-10 mx-6 lg:w-[600px] lg:h-[327px] md:items-start  lg:items-center md:mr-[388px] lg:mr-0">
          <Image src="/logo-2.png" alt="logo" width={180} height={88} />
          <p className="text-center mt-8 md:text-left lg:text-center">
            Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel.
            Após a morte prematura de seu pai, Miles foi apresentado a Peter
            Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles
            foi picado por uma aranha geneticamente modificada da Oscorp, ele
            desenvolveu poderes únicos e, após meses de insistência, Peter
            concordou em treiná-lo.
          </p>
          <Button className="w-[214px] h-[42px] mt-8 cursor-pointer">
            COMPRAR INGRESSO
          </Button>
        </div>
      </div>
      <div className="bg-secondary w-full z-10 absolute lg:w-[1216px] lg:h-[177px] md:flex  lg:items-center lg:justify-center lg:bottom-6 lg:mx-[352px] lg:gap-x-20 lg:px-12 md:bottom-0 md:px-8 md:gap-x-8">
        <div className="mt-[105px] mx-[28px] lg:mt-8 lg:mb-8 md:mb-[48px] md:mt-[48px]">
          <h2 className="text-center font-semibold text-xl mb-4 md:text-left lg:text-center">
            Cinema
          </h2>
          <p className="text-center text-sm md:text-left lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
        <div className="mt-8 mx-[28px] lg:mb-8 md:mb-[48px] md:mt-[48px]">
          <h2 className="text-center font-semibold text-xl mb-4 md:text-left lg:text-center">
            Prêmios
          </h2>
          <p className="text-center text-sm md:text-left lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
        <div className="mt-8 mx-[28px] mb-16 lg:mb-8 md:mb-[48px] md:mt-[48px]">
          <h2 className="text-center font-semibold text-xl mb-4 md:text-left lg:text-center">
            Indicações
          </h2>
          <p className="text-center text-sm md:text-left lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
            quibusdam doloremque nulla! Inventore accusantium debitis error iure
            minima.
          </p>
        </div>
      </div>
    </div>
  );
}
