"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Mision = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-2xl font-bold mb-2 text-header">Nuestra historia</h2>
      <p className="text-gray-600">
        AaronJS nació gracias a Aaron Jauregui, un joven apasionado por la
        tecnología que decidió poner su talento al servicio de quienes más lo
        necesitan: los emprendedores y microempresarios que quieren dar el salto
        digital sin gastar una fortuna. Lo que empezó como un proyecto personal
        se convirtió en un equipo que crea{" "}
        <span className="font-semibold">
          páginas web que venden, aplicaciones que organizan y automatizan
          negocios, y herramientas que hacen que las pequeñas empresas compitan
          como grandes.
        </span>
        Nuestra meta: que tengas{" "}
        <span>las mismas ventajas que las grandes compañías</span>, adaptadas a
        tu tamaño, presupuesto y necesidades.
      </p>
    </motion.section>
  );
};
