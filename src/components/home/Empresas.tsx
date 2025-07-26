import Image from "next/image";

import CasaBlanca from "@/assets/Empresas/casaBlanca.webp";
import MascoPlus from "@/assets/Empresas/mascoPLus.png";

export const Empresas = () => {
  return (
    <section className="bg-gray-100 py-16  px-5 md:px-0">
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Negocios que hemos ayudado a crecer
      </h2>

      <p className="text-center text-gray-700 mt-4 text-xl ">
        Nuestras soluciones ayudan a que más negocios vendan y se organicen
        mejor.
      </p>

      <div className="flex justify-center items-center gap-x-9 w-full mt-9">
        <div className="flex flex-col justify-center items-center w-48">
          <Image
            src={CasaBlanca}
            alt="Logo de Casa Blanca"
            width={70}
            height={70}
            className="w-28 md:w-52 rounded-xl transition-transform duration-300 hover:scale-110"
          />
          <p className="text-center text-sm font-bold mt-3 ">La web nos ha permitido atender mucho mejor las reservas.</p>
        </div>
      </div>
    </section>
  );
};
