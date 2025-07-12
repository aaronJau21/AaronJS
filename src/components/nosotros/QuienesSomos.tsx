"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export const QuienesSomos = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-2xl font-semibold mb-2">¿Quiénes somos?</h2>
      <p className="text-gray-600">
        Somos un equipo multidisciplinario enfocado en transformar ideas en
        soluciones tecnológicas reales, combinando diseño, código e inteligencia
        artificial.
      </p>
    </motion.section>
  );
};
