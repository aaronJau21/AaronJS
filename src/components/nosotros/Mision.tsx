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
      <h2 className="text-2xl font-semibold mb-2">Nuestra misión</h2>
      <p className="text-gray-600">
        Empoderar a empresas de todos los tamaños mediante soluciones
        tecnológicas personalizadas, centradas en la innovación, escalabilidad y
        el impacto real.
      </p>
    </motion.section>
  );
};
