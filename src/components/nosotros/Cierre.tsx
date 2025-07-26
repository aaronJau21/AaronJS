"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Cierre = () => {
  return (
    <motion.section
      className="text-center mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h3 className="text-xl font-semibold mb-2">Nuestro compromiso contigo</h3>
      <p className="text-gray-600 max-w-xl mx-auto">
        No somos solo programadores. <span className="font-semibold">Somos tus socios tecnológicos</span>.
        Te escuchamos, entendemos tu negocio y diseñamos soluciones que ahorran
        tiempo, atraen más clientes y aumentan tus ingresos.
      </p>
    </motion.section>
  );
};
