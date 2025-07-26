import Image from "next/image";
import Fondo from "@/assets/home/fondo1.jpg";

export const InformacionPrincipal = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={Fondo}
        alt="Fondo"
        fill
        priority
        placeholder="blur"
        className="object-cover z-0"
      />
      {/* Contenido encima del fondo */}
      <div className="bg-black/60 relative z-10 py-20">
        <div className="  container mx-auto w-11/12 md:w-6/12 text-white">
          <h1 className="text-2xl text-center sm:text-4xl lg:text-5xl xl:text-7xl font-bold">
            Webs y apps que venden.
          </h1>
          <p className="font-bold text-center text-lg md:text-2xl mt-3">
            Tu negocio digital listo con entregas ágiles y efectivas.
          </p>
          <p className="text-base sm:text-2xl mt-3 text-center ">
            Atrae más clientes, vende 24/7 y luce profesional, con un proceso
            rápido y adaptado a tu proyecto.
          </p>
          <div className="flex justify-center mt-5">
            <button className="text-xl cursor-pointer bg-[#00B4D8]/30 px-5 py-5 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl">
              Quiero mi web ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
