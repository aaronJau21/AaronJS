import FondoServicio from "@/assets/servicios/fondo_servicio.jpg";
import Image from "next/image";
import Link from "next/link";

export const Publicidad = () => {
  return (
    <section className="relative h-[45vh]">
      <Image
        src={FondoServicio}
        alt="Publicidad"
        width={700}
        height={700}
        className="w-full h-full absolute"
      />
      <div className="absolute z-10 text-white bg-black/50 h-full w-full">
        <div className="flex justify-center items-center h-full px-10">
          <div className="lg:max-w-7/12">
            <h1 className="text-2xl text-center sm:text-4xl lg:text-5xl xl:text-7xl font-bold">
              🚀 Impulsa tu presencia digital al siguiente nivel
            </h1>

            <p className="text-center lg:text-lg font-semibold mt-3">
              Desarrollamos soluciones personalizadas que transforman tu visión
              en realidad. Desde sitios web impactantes hasta aplicaciones
              móviles eficientes, te ayudamos a destacar en el mundo digital.
            </p>
            <div className="flex justify-center mt-3">
              <Link
                href="/contacto"
                className="text-xl cursor-pointer bg-[#00B4D8]/30 px-5 py-5 rounded-xl hover:bg-[#2EC4B6]/10 shadow-2xl transition-all duration-300 "
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
