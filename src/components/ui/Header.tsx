"use client";

import Image from "next/image";
import Logo from "../../../public/img/shared/logo.png";
import Link from "next/link";
import { useState } from "react";
import { rutas } from "./rutas";


export const Header = () => {
  const [showRoutes, setShowRoutes] = useState<boolean>(false);

  return (
    <header className="bg-header h-24 flex justify-between items-center px-3 sm:px-9 md:px-16 text-[#F8F9FA]">
      <div className="flex items-center gap-x-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo de AaronJS"
            width={150}
            height={150}
            className="w-48"
            // priority
          />
        </Link>

        {rutas.map((ruta) => (
          <Link
            key={ruta.name}
            href={ruta.href}
            className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300 hidden md:block"
          >
            {ruta.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <button className="text-xl cursor-pointer bg-[#00B4D8]/30 px-5 py-5 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl">
          Contactanos
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setShowRoutes((r) => (r = !r))}
          className="text-2xl cursor-pointer bg-[#00B4D8]/30 px-3 py-1 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6H6m12 4H6m12 4H6m12 4H6"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute top-24 left-0 w-full bg-header p-4 md:hidden transition-all duration-300 ease-in-out z-50
          ${
            showRoutes
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-0 pointer-events-none"
          }
        `}
        style={{ transitionProperty: "opacity, transform" }}
      >
        {rutas.map((ruta) => (
          <Link
            key={ruta.name}
            href={ruta.href}
            className="block py-2 px-4 hover:bg-[#2EC4B6]/30 rounded-lg transition-all duration-300"
            onClick={() => setShowRoutes(false)}
          >
            {ruta.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
