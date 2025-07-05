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
          <h1 className="text-2xl text-center sm:text-4xl lg:text-6xl xl:text-7xl font-black">
            🚀 Impulsa tu presencia digital al siguiente nivel
          </h1>
          <p className="text-xs sm:text-base mt-5 text-center sm:text-justify">
            Haz que tu sitio web no solo funcione, sino que sorprenda. 📈 Mejora
            la gestión de tu empresa con soluciones web y aplicaciones a medida,
            diseñadas para brindar rendimiento, eficiencia y crecimiento real.
          </p>
          <div className="flex justify-center mt-5">
            <button className="text-xl cursor-pointer bg-[#00B4D8]/30 px-5 py-5 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
