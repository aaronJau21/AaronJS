"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Equipo = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Nuestro equipo
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { nombre: "Ana Torres", rol: "CEO" },
          { nombre: "Luis Díaz", rol: "CTO" },
          { nombre: "Paula Ríos", rol: "Diseñadora UX/UI" },
          { nombre: "Carlos Pérez", rol: "Desarrollador IA" },
        ].map((persona, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center space-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 bg-gray-300 rounded-full" />
            <p className="font-medium">{persona.nombre}</p>
            <p className="text-sm text-gray-500">{persona.rol}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
