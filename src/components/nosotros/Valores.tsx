"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Valores = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Nuestros valores
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          "Innovación",
          "Compromiso",
          "Transparencia",
          "Aprendizaje continuo",
        ].map((valor, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-xl shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold">{valor}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
