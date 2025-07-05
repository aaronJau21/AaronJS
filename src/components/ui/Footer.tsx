import Link from "next/link";
import Logo from "../../../public/img/shared/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-header p-9 text-gray-100">
      <div className="flex justify-between items-center mb-6">
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
        <div>
          <Link
            href="/"
            className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300 ml-4"
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300 ml-4"
          >
            Nosotros
          </Link>
          <Link
            href="/historia"
            className="hover:bg-[#2EC4B6]/30 hover:px-3 hover:rounded-2xl hover:py-1 transition-all duration-300 ml-4"
          >
            Historia
          </Link>
        </div>
        <div>
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
