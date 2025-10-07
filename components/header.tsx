"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center border-b-2 border-gray-300"
    >
      <div className=" flex items-center  ">
        <Image src="/assets/logo.svg" width={79} height={89} alt="Logo Svg" className="text-2xl" />
        <div className="flex gap-2 text-center pl-1 pr-1 ">
          <label className="font-bold text-2xl ">P I A</label>
          <label className="text-[15px] pt-[7px]">Pancreas Inteligencia Artificial</label>
        </div>
      </div>
      <div className="flex items-center ">
        <ul className="flex gap-8 transparent ">
          <li>Caracteristicas</li>
          <li>Cómo Funciona</li>
          <li className="mr-8">Datos</li>
        </ul>
        <div className="flex items-center">
          <ul className="flex gap-2 transparent mr-2">
            <li className="rounded-[10px] w-[130px] h-7 bg-white border-1 border-gray-500 items-center text-center justify-center">
              <button className="mx-auto font-semibold">Iniciar Sesión</button>
            </li>
            <li className="rounded-[10px] w-[130px] h-7 bg-[#886EFF] border-2 border-white  items-center text-center justify-center text-white font-bold">
              <button className="mx-auto">Registrarse</button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
