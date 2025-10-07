"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex p-4 mt-10 mb-30"
    >
      <div className="flex ">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center text-center">
            <Image src="/assets/logo.svg" width={59} height={69} alt="Logo Svg" className="text-2xl" />
            <label className="font-bold text-xl">P I A</label>
          </div>
          <label className="text-[16px] w-[60%]">
            Inteligencia artificial para la detección temprana del cáncer de páncreas.
          </label>
        </div>
        <div className="flex gap-30 justify-between  ">
          <div className="flex flex-col">
            <ul className="flex flex-col bg-transparent">
              <li className="font-bold text-xl mb-4">Producto</li>
              <li className="text-[#797979] text-[15px] mb-2">Documentación</li>
              <li className="text-[#797979] text-[15px] mb-2">Características</li>
              <li className="text-[#797979] text-[15px] mb-2">Precios</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col bg-transparent">
              <li className="font-bold text-xl mb-4">Recursos</li>
              <li className="text-[#797979] text-[15px] mb-2">Redes Sociales</li>
              <li className="text-[#797979] text-[15px] mb-2">Casos de Estudio</li>
              <li className="text-[#797979] text-[15px] mb-2">Soporte Técnico</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col bg-transparent">
              <li className="font-bold text-xl mb-4">Contacto</li>
              <li className="text-[#797979] text-[15px] mb-2">Contactanos</li>
              <li className="text-[#797979] text-[15px] mb-2">Privacidad</li>
              <li className="text-[#797979] text-[15px] mb-2">Términos</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
