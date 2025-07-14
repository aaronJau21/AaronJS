"use client";

import { motion } from "motion/react";
import { CardComponent } from "../ui/cards/CardComponent";

const servicios = [
  {
    titulo: "Páginas Web",
    descripcion:
      "Diseñamos y desarrollamos sitios web modernos, rápidos y adaptables a cualquier dispositivo, usando tecnologías de última generación.",
  },
  {
    titulo: "Desarrollo de Apps",
    descripcion:
      "Creamos aplicaciones móviles y de escritorio con interfaces intuitivas y alto rendimiento, totalmente adaptadas a tu negocio.",
  },
  {
    titulo: "Sitios Web a Medida",
    descripcion:
      "Construimos soluciones web totalmente personalizadas, integradas con tus procesos y necesidades específicas.",
  },
  {
    titulo: "Consultoría en Tecnología",
    descripcion:
      "Te ayudamos a tomar decisiones estratégicas con asesoría experta en software, infraestructura, automatización e IA.",
  },
  {
    titulo: "Automatización",
    descripcion:
      "Optimizamos tus procesos con sistemas automatizados que ahorran tiempo, reducen errores y aumentan la eficiencia operativa.",
  },
  {
    titulo: "Inteligencia Artificial",
    descripcion:
      "Implementamos soluciones de IA como chatbots, análisis predictivo y generación de contenido para potenciar tu negocio.",
  },
  {
    titulo: "Base de Datos",
    descripcion:
      "Diseñamos, optimizamos y administramos bases de datos seguras y escalables para el manejo eficiente de tu información.",
  },
  {
    titulo: "La Nube",
    descripcion:
      "Migramos y gestionamos tus servicios en la nube, garantizando escalabilidad, seguridad y disponibilidad 24/7.",
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
