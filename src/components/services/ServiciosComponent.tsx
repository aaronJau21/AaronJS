"use client";

import { motion } from "motion/react";
import { CardComponent } from "../ui/cards/CardComponent";

const servicios = [
  {
    titulo: "Páginas Web que vende",
    descripcion:
      "Sitios modernos y optimizados para SEO, diseñados para atraer y convertir visitantes en clientes.",
  },
  {
    titulo: "Apps de gestión para crecer",
    descripcion:
      "Sistemas practicos para administrar clientes, pedidos o inventario de forma organizada y profesional.",
  },
  {
    titulo: "Automatización Inteligente",
    descripcion:
      "Chatbots y flujos automaticos que ahorran tiempo y mejoran la eficiencia.",
  },

];

const ball = {
  backgroundColor: "#dd00ee",
  borderRadius: "50%",
};

export const ServiciosComponent = () => {
  return (
    <section className="lg:max-w-9/12 mx-auto px-4 py-8">
      <h2 className="text-center text-xl md:text-3xl font-bold">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 mt-8">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={ball}
          >
            <CardComponent>
              <h3 className="font-bold lg:text-3xl">{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </CardComponent>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
