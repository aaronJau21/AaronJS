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
      <h2 className="text-2xl font-bold mb-2 text-header">¿Quiénes somos?</h2>
      <p className="text-gray-600">
        Somos un equipo multidisciplinario apasionado por la innovación.
        Transformamos ideas en soluciones tecnológicas efectivas, combinando
        diseño estratégico, desarrollo de software de alto nivel e inteligencia
        artificial para crear productos que generan impacto real.
      </p>
    </motion.section>
  );
};
