"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Asociate() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="flex flex-col text-white bg-[#757AD0] p-6"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center mx-auto mt-10 mb-10">
        <label className="font-bold text-3xl mb-4">¿Quieres asociarte con PIA?</label>
        <label className="text-xl mt-1 w-2/3">
          Únete a la revolución en la detección temprana del cáncer de páncreas. Solicita acceso a nuestra plataforma y
          mejora los resultados de tus pacientes.
        </label>
      </motion.div>
      <motion.div variants={itemVariants} className="flex gap-3 mx-auto text-center items-center">
        <button className="bg-[#6F73C2] rounded-[10px] p-2 flex gap-2 h-15 w-[200px] text-center items-center mx-auto">
          <Image src="assets/vector-lupa.svg" width={20} height={20} alt="lupa icono" />
          <label className="">Buscar Médicos</label>
        </button>
        <button className="bg-[#757AD0] border-1 border-white rounded-[10px] p-2  h-15 w-[200px]">
          Solicitar Acceso
        </button>
      </motion.div>
    </motion.div>
  )
}
