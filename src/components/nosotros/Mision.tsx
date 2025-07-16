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
      <h2 className="text-2xl font-bold mb-2 text-header">Nuestra misión</h2>
      <p className="text-gray-600">
        Impulsar el crecimiento de empresas de todos los tamaños a través de
        soluciones tecnológicas personalizadas, innovadoras y escalables, que
        generen un impacto tangible y sostenible en sus procesos y resultados.
      </p>
    </motion.section>
  );
};
