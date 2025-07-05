import Image from "next/image";

import CasaBlanca from "@/assets/Empresas/casaBlanca.webp";
import MascoPlus from "@/assets/Empresas/mascoPLus.png";

export const Empresas = () => {
  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Nuestros Clientes
      </h2>
      <div className="flex justify-center items-center gap-x-9 w-full mt-9">
        <Image
          src={CasaBlanca}
          alt="Logo de Casa Blanca"
          width={70}
          height={70}
          className="w-28 md:w-52 rounded-xl transition-transform duration-300 hover:scale-110"
        />

        <Image
          src={MascoPlus}
          alt="Logo de Casa Blanca"
          width={70}
          height={70}
          className="w-28 md:w-52 rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
};
