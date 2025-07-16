"use client";

import { motion } from "framer-motion";

import AaronImage from "@/assets/integrantes/aaron.jpg";
import Image from "next/image";

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
          { nombre: "Aaron Jauregui Sifuentes", rol: "Programador FULL STACK", img: AaronImage },
          { nombre: "Luis Díaz", rol: "CTO", img: AaronImage },
          { nombre: "Paula Ríos", rol: "Diseñadora UX/UI", img: AaronImage },
          { nombre: "Carlos Pérez", rol: "Desarrollador IA", img: AaronImage },
        ].map((persona, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center space-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={persona.img} alt={`Foto de ${persona.nombre}`} width={70} height={70} className="w-32 rounded-full"/>
            <p className="font-medium">{persona.nombre}</p>
            <p className="text-sm text-gray-500">{persona.rol}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
