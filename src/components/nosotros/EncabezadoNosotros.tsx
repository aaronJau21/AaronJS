"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EncabezadoNosotros() {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-center"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      Conoce al equipo detrás de la innovación
    </motion.h1>
  );
}
