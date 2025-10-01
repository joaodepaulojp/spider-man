import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="relative z-10 w-full h-20  flex flex-row items-center justify-between">
      <Image
        src="/logo-spider.svg"
        alt="logo"
        width={24}
        height={34}
        className="m-6"
      />

      <div className="flex gap-6 justify-end items-center mr-6">
        <Link href="#" className="text-sm">
          Sinopse
        </Link>
        <Link href="#" className="text-sm">
          Elenco
        </Link>
        <Link href="#" className="text-sm">
          Fórum
        </Link>
      </div>
    </div>
  );
};

export default Menu;
