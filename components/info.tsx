'use client'

import Image from 'next/image'

export default function Info(){
    return(
        <div className="flex flex-col mt-30 items-center ">
                <div className="flex flex-col items-center justify-center text-center mx-auto mb-20">
                  <label className="text-3xl font-bold mb-3">Información para tu salud</label>
                  <label className="text-xl text-gray-500 w-2/3">P.I.A ofrece herramientas especializadas para profesionales médicos en la detección y tratamiento del cáncer de páncreas.</label>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col bg-[#EFEFEF] rounded-xl mx-auto items-center p-4 text-center w-[400px]">
                    <Image
                      src="assets/rectangle1.svg"
                      width={40}
                      height={40}
                      alt="rectangle 1"
                    />
                    <div className="flex flex-col">
                        <label className="font-bold text-xl mt-2 mb-2">Diagnósticos por IA avanzada</label>
                        <label className="text-[15px]">Análisis de imágenes médicas con algoritmos de machine learning entrenados específicamente para detectar indicadores tempranos del cáncer de páncreas.</label>
                    </div>
                  </div>
                  <div className="flex flex-col bg-[#EFEFEF] rounded-xl mx-auto items-center p-4 text-center w-[400px]">
                    <Image
                      src="assets/rectangle2.svg"
                      width={40}
                      height={40}
                      alt="rectangle 2"
                    />
                    <div className="flex flex-col">
                        <label className="font-bold text-xl mt-2 mb-2">Colaboración con instituciones médicas</label>
                        <label className="text-[15px]">Trabajamos directamente con hospitales y clínicas especializadas para integrar nuestra tecnología en los flujos de trabajo existentes.</label>
                    </div>
                  </div>
                  <div className="flex flex-col bg-[#EFEFEF] rounded-xl mx-auto items-center p-4 text-center w-[400px]">
                    <Image
                      src="assets/rectangle3.svg"
                      width={40}
                      height={40}
                      alt="rectangle 3"
                    />
                    <div className="flex flex-col">
                        <label className="font-bold text-xl mt-2 mb-2">Médicos especializados</label>
                        <label className="text-[15px]">Información validada por médicos especialistas en oncología digestiva, proporcionando una segunda opinión confiable para el diagnóstico.</label>
                    </div>
                  </div>
                </div>
              </div>
    )
}