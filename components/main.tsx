"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Main() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex mt-[100px] p-4"
    >
      <div className="flex flex-col">
        <motion.label variants={itemVariants} className="bg-[#886EFF] font-bold text-white p-1 rounded-[10px] w-fit ">
          Detección Temprana - Mejores Resultados
        </motion.label>
        <motion.div variants={itemVariants} className="flex flex-col text-6xl mt-4">
          <label className="font-bold text-6xl">P I A, tu IA </label>
          <label className="font-bold text-6xl">confiable en la </label>
          <label className="font-bold text-6xl">lucha contra el </label>
          <label className="font-bold text-[#886EFF] text-6xl">cáncer de páncreas </label>
        </motion.div>
        <motion.label variants={itemVariants} className="text-xl text-gray-500 w-[570px] mt-2">
          Utilizando inteligencia artificial avanzada para detectar el cáncer de páncreas tempranamente, mejorando las
          tasas de salud del 90% o más.
        </motion.label>
        <motion.div variants={itemVariants} className="flex gap-4 mt-6">
          <button className="text-white flex gap-3 bg-[#886EFF] items-center p-2 w-[250px] font-bold rounded-[10px]">
            <Image src="assets/chip-white.svg" width={40} height={40} alt="Chip Icon" className="text-white" />
            <span>Acceder al modelo</span>
          </button>
          <button className="w-[250px] font-bold rounded-[10px] border-1 border-gray-400 items-center p-2">
            Ver Demostración
          </button>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-2 mt-6 font-bold">
          <label className="flex gap-2 text-gray-500 mr-6">
            <Image src="assets/vector1-main.svg" width={20} height={20} alt="Vector 1 icon" />
            90%+ supervivencia
          </label>
          <label className="flex gap-2 text-gray-500">
            <Image src="assets/vector2-main.svg" width={20} height={20} alt="Vector 1 icon" />
            detección temprana
          </label>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Image src="assets/image-main.svg" width={550} height={100} alt="Image Main" className="ml-9" />
      </motion.div>
    </motion.div>
  )
}
