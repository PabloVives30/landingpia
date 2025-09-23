'use client'

import Image from 'next/image'

export default function Main(){
    return(
         <div className="flex mt-[100px] p-4">
                
                <div className="flex flex-col">
                  <label className="bg-[#886EFF] font-bold text-white p-1 rounded-[10px] w-fit ">Detección Temprana - Mejores Resultados</label>
                  <div className="flex flex-col text-6xl mt-4">
                    <label className="font-bold text-6xl">P I A, tu IA </label>
                    <label className="font-bold text-6xl">confiable en la </label>
                    <label className="font-bold text-6xl">lucha contra el </label>
                    <label className="font-bold text-[#886EFF] text-6xl">cáncer de páncreas </label>
                  </div>
                  <label className="text-xl text-gray-500 w-[570px] mt-2">Utilizando inteligencia artificial avanzada para detectar el cáncer de páncreas tempranamente, mejorando las tasas de salud del 90% o más.</label>
                  <div className="flex gap-4 mt-6">
                    <button className="text-white flex gap-3 bg-[#886EFF] items-center p-2 w-[250px] font-bold rounded-[10px]">
                      <Image 
                        src="assets/chip-white.svg"
                        width={40}
                        height={40}
                        alt="Chip Icon"
                        className="text-white"
                      />
                      <span>Acceder al modelo</span>
                    </button>
                    <button className="w-[250px] font-bold rounded-[10px] border-1 border-gray-400 items-center p-2">Ver Demostración</button>
                  </div>
                  <div className="flex gap-2 mt-6 font-bold">
                      <label className="flex gap-2 text-gray-500 mr-6">
                        <Image 
                          src="assets/vector1-main.svg"
                          width={20}
                          height={20}
                          alt="Vector 1 icon"
                        />
                        90%+ supervivencia
                      </label>
                      <label className="flex gap-2 text-gray-500">
                        <Image 
                          src="assets/vector2-main.svg"
                          width={20}
                          height={20}
                          alt="Vector 1 icon"
                        />
                        detección temprana
                      </label>
                    </div>
                </div>
                <Image
                    src="assets/image-main.svg"
                    width={550}
                    height={100}
                    alt="Image Main"
                    className='ml-9'
                  />
              </div>
    )
}