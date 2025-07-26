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
        Somos un equipo que entiende los retos de emprender. Sabemos lo que
        significa comenzar con pocos recursos y muchas ideas, porque también
        empezamos así. Por eso, nuestra misión es simple: ayudar a micro y
        pequeñas empresas a crecer con tecnología que realmente funcione para
        ellas. Sin complicaciones ni tecnicismos, solo soluciones que hagan tu
        negocio más profesional, visible y rentable.
      </p>
    </motion.section>
  );
};
