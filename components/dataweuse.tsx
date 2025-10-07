"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function DataWeUse() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col mt-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mx-auto mb-20"
      >
        <label className="text-3xl font-bold mb-3">¿Qué datos usamos?</label>
        <label className="text-xl text-gray-500 w-3/4">
          P.I.A utiliza múltiples fuentes de información médica para proporcionar análisis precisos y confiables.
        </label>
      </motion.div>

      <div className="flex items-start gap-8 mt-[50px] p-4 mb-14">
        {/* Left side content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col flex-1"
        >
          <motion.div variants={itemVariants} className="flex flex-col bg-[#EFEFEF] p-4 rounded-xl mb-6">
            <div className="flex gap-2 items-center">
              <Image src="assets/vector2-main.svg" width={35} height={35} alt="icon1 fourth section" />
              <label className="font-bold text-2xl">Análisis de sangre</label>
            </div>
            <label className="text-xl text-[#797979] mt-3 mb-2">
              Los estudios de sangre permiten detectar biomarcadores y valores alterados que pueden indicar el
              desarrollo temprano del cáncer de páncreas. Estos datos complementan la información que aportan las
              imágenes médicas.
            </label>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col bg-[#EFEFEF] p-4 rounded-xl mb-8">
            <div className="flex gap-2 items-center">
              <Image src="assets/vector-file.svg" width={32} height={32} alt="icon2 fourth section" />
              <label className="font-bold text-2xl">Imágenes médicas</label>
            </div>
            <label className="text-xl text-[#797979] mt-3 mb-2">
              Radiografías, resonancias magnéticas, tomografías y otros estudios por imágenes son analizados por
              nuestros algoritmos para identificar patrones y anomalías que podrían indicar la presencia de cáncer
              pancreático.
            </label>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex gap-20 justify-center"
          >
            <motion.div
              variants={statsVariants}
              className="flex flex-col bg-[rgb(178,180,223)] p-4 items-center rounded-xl flex-1 max-w-56"
            >
              <label className="font-bold text-[#757AD0] text-xl">90%+</label>
              <label className="text-[#797979] text-[15px] font-semibold">Mejora en supervivencia</label>
            </motion.div>
            <motion.div
              variants={statsVariants}
              className="flex flex-col bg-[rgb(178,180,223)] p-4 items-center rounded-xl flex-1 max-w-56"
            >
              <label className="font-bold text-[#757AD0] text-xl">95%+</label>
              <label className="text-[#797979] text-[15px] font-semibold">Precisión diagnóstica</label>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="assets/img-4.svg"
            width={400}
            height={400}
            alt="image fourth section"
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}
