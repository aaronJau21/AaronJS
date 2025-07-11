"use client";

import { motion } from "motion/react";

interface IJuegos {
  title: string;
  description: string;
}

const juegos: IJuegos[] = [
  {
    title: "💰 Aumenta tus ventas",
    description: `Creamos soluciones que impulsan tus ingresos, optimizando procesos y mejorando la experiencia del cliente.`,
  },
  {
    title: "🏢 Preparados para empresas",
    description: `Desarrollamos plataformas robustas y seguras, listas para escalar con las necesidades de tu negocio.`,
  },
  {
    title: "📈 Crecimiento sin límites",
    description: `Nuestras herramientas están diseñadas para evolucionar contigo, sin barreras ni límites en tu expansión.`,
  },
  {
    title: "⭐ Recomendado por expertos",
    description: `Nuestra calidad y resultados hablan por sí solos. Profesionales del sector confían en nuestro enfoque.`,
  },
  {
    title: "🧠 Plataforma moderna",
    description: `Utilizamos tecnología de vanguardia para ofrecerte soluciones rápidas, eficientes y seguras.`,
  },
  {
    title: "🔗 Integraciones sin complicaciones",
    description: `Conectamos con las herramientas que ya usas, facilitando una implementación fluida y sin fricciones.`,
  },
];

export const ReglasJuego = () => {
  return (
    <section className="py-16">
      <h2 className="md:text-3xl font-bold text-center">
        🚀 Cómo transformamos las reglas del juego
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto md:w-8/12">
        {juegos.map((juego, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{juego.title}</h3>
              <p className="text-gray-700">{juego.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
