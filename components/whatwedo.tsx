"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhatWeDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col items-center mt-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mx-auto mb-20"
      >
        <label className="text-3xl font-bold mb-3">¿Qué hacemos?</label>
        <label className="text-xl text-gray-500 w-2/3">
          En P.I.A buscamos mejorar la calidad de vida de los pacientes, combinando la experiencia médica con un modelo
          de inteligencia artificial entrenado con diversos casos reales. Nuestro objetivo es que, gracias a la
          tecnología, se logre reducir el riesgo de mortalidad asociado al cáncer de páncreas mediante una detección
          temprana y precisa.
        </label>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex mt-10"
      >
        <motion.div variants={cardVariants} className="flex flex-col items-center text-center">
          <Image src="assets/img1-3.svg" width={325} height={325} alt="img1 third section" />
          <div className="flex flex-col items-center text-center mx-auto">
            <label className="font-bold text-2xl mt-2 mb-2">Consulta Especializada</label>
            <label className="text-[15px] w-2/3 text-[#797979]">
              Análisis detallado de estudios médicos con la asistencia de IA para identificar patrones tempranos.
            </label>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} className="flex flex-col items-center text-center">
          <Image src="assets/img2-3.svg" width={325} height={325} alt="img2 third section" />
          <div className="flex flex-col items-center text-center mx-auto">
            <label className="font-bold text-2xl mt-2 mb-2">Análisis con IA</label>
            <label className="text-[15px] w-2/3 text-[#797979]">
              Procesamiento avanzado de imágenes médicas utilizando algoritmos entrenados con miles de casos clínicos.
            </label>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} className="flex flex-col items-center text-center">
          <Image src="assets/img3-3.svg" width={325} height={325} alt="img3 third section" />
          <div className="flex flex-col items-center text-center mx-auto">
            <label className="font-bold text-2xl mt-2 mb-2">Plan de Tratamiento</label>
            <label className="text-[15px] w-2/3 text-[#797979]">
              Recomendaciones personalizadas basadas en el análisis de IA para optimizar el tratamiento temprano.
            </label>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
