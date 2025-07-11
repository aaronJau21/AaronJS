import Link from "next/link";
import Logo from "../../../public/img/shared/logo.png";
import Image from "next/image";
import { rutas } from "./rutas";

export const Footer = () => {
  return (
    <div className="bg-header p-9 text-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo de AaronJS"
              width={70}
              height={70}
              className="w-48"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5">
          {rutas.map((ruta) => (
            <Link
              key={ruta.name}
              href={ruta.href}
              className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300"
            >
              {ruta.name}
            </Link>
          ))}
        </div>
        <div className="my-9 md:my-0">
          <Link
            href="/contacto"
            className="text-xl cursor-pointer bg-[#00B4D8]/30 px-5 py-5 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl transition-all duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      <p>© 2025 AaronJS.com Todos los derechos reservados</p>
    </div>
  );
};
