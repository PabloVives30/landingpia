import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-white p-2 w-full h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-gray-300">
        <div className=" flex items-center  ">
          <Image 
            src="/assets/logo.svg"
            width={79}
            height={89}
            alt="Logo Svg"
            className="text-2xl"
          />
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
              <li className="rounded-[10px] w-[130px] h-7 bg-white border-2 border-gray-500 items-center text-center justify-center">
              <button className="mx-auto">Iniciar Sesión</button>
              </li>
              <li className="rounded-[10px] w-[130px] h-7 bg-[#886EFF] border-2 border-white  items-center text-center justify-center">
                <button className="mx-auto">Registrarse</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of Header */}
      {/* First Section */}
      <div className="flex mt-[150px] p-4">
        
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
            width={650}
            height={150}
            alt="Image Main"

          />
      </div>
      {/* End of First Section */}
      {/* Second Section */}
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
      {/* End of Second Section */}
      {/* Third Section */}
      <div className="flex flex-col items-center mt-30">
        <div className="flex flex-col items-center justify-center text-center mx-auto mb-20">
          <label className="text-3xl font-bold mb-3">¿Qué hacemos?</label>
          <label className="text-xl text-gray-500 w-2/3">En P.I.A buscamos mejorar la calidad de vida de los pacientes, combinando la experiencia médica con un modelo de inteligencia artificial entrenado con diversos casos reales. Nuestro objetivo es que, gracias a la tecnología, se logre reducir el riesgo de mortalidad asociado al cáncer de páncreas mediante una detección temprana y precisa.</label>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="assets/img1-3.svg"
              width={325}
              height={325}
              alt="img1 third section"
            />
            <div className="flex flex-col items-center text-center mx-auto">
              <label className="font-bold text-2xl mt-2 mb-2">Consulta Especializada</label>
              <label className="text-[15px] w-2/3 text-[#797979]">Análisis detallado de estudios médicos con la asistencia de IA para identificar patrones tempranos.</label>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="assets/img2-3.svg"
              width={325}
              height={325}
              alt="img2 third section"
            />
            <div className="flex flex-col items-center text-center mx-auto">
              <label className="font-bold text-2xl mt-2 mb-2">Análisis con IA</label>
              <label className="text-[15px] w-2/3 text-[#797979]">Procesamiento avanzado de imágenes médicas utilizando algoritmos entrenados con miles de casos clínicos.</label>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="assets/img3-3.svg"
              width={325}
              height={325}
              alt="img3 third section"
            />
            <div className="flex flex-col items-center text-center mx-auto">
              <label className="font-bold text-2xl mt-2 mb-2">Plan de Tratamiento</label>
              <label className="text-[15px] w-2/3 text-[#797979]">Recomendaciones personalizadas basadas en el análisis de IA para optimizar el tratamiento temprano.</label>
            </div>
          </div>
        </div>
      </div>
      {/* End of Third Section */}
      {/* Fourth Section */}
      <div className="flex flex-col mt-30">
        <div className="flex flex-col items-center justify-center text-center mx-auto mb-20">
          <label className="text-3xl font-bold mb-3">¿Qué datos usamos?</label>
          <label className="text-xl text-gray-500 w-3/4">P.I.A utiliza múltiples fuentes de información médica para proporcionar análisis precisos y confiables.</label>
        </div>
        <div className="flex flex-col p-4 ">
          <div className="flex flex-col bg-[#EFEFEF] p-4 w-2/3 rounded-xl">
            <div className="flex gap-2 items-center">
              <Image  
                src="assets/vector2-main.svg"
                width={35}
                height={35}
                alt="icon1 fourth section"
              />
              <label className="font-bold text-2xl">Análisis de sangre</label>
            </div>
            <label className="text-xl text-[#797979] mt-3 mb-2 ">Los estudios de sangre permiten detectar biomarcadores y valores alterados que pueden indicar el desarrollo temprano del cáncer de páncreas. Estos datos complementan la información que aportan las imágenes médicas.</label>
          </div>
          <div className="flex flex-col bg-[#EFEFEF] p-4 w-2/3 rounded-xl mt-6">
            <div className="flex gap-2 items-center">
              <Image 
                src="assets/vector-file.svg"
                width={32}
                height={32}
                alt="icon2 fourth section"
              />
              <label className="font-bold text-2xl">Imágenes médicas</label>
            </div>
            <label className="text-xl text-[#797979] mt-3 mb-2 ">Radiografías, resonancias magnéticas, tomografías y otros estudios por imágenes son analizados por nuestros algoritmos para identificar patrones y anomalías que podrían indicar la presencia de cáncer pancreático.</label>
          </div>
          <div className="flex w-2/3 mt-8 justify-center ">
            <div className="flex flex-col bg-[rgb(178,180,223)] p-2 items-center mx-auto rounded-xl w-56">
              <label className="font-bold text-[#757AD0] text-xl">90%+</label>
              <label className="text-[#797979] text-[15px]">Mejora en supervivencia</label>
            </div>
            <div className="flex flex-col bg-[rgb(178,180,223)] p-2 items-center mx-auto rounded-xl w-56">
              <label className="font-bold text-[#757AD0] text-xl">95%+</label>
              <label className="text-[#797979] text-[15px]">Precisión diagnóstica</label>
            </div>
          </div>
        </div>
        <Image 
          src="assets/img-4.svg"
          width={250}
          height={250}
          alt="image fourth section"
        />
      </div>
      {/* End of Fourth Section */}
      {/* Fifth Section */}
      <div className="flex flex-col text-white bg-[#757AD0] p-6">
        <div className="flex flex-col items-center text-center mx-auto mt-10 mb-10">
          <label className="font-bold text-3xl mb-4">¿Quieres asociarte con  PIA?</label>
          <label className="text-xl mt-1 w-2/3">Únete a la revolución en la detección temprana del cáncer de páncreas. Solicita acceso a nuestra plataforma y mejora los resultados de tus pacientes.</label>
        </div>
        <div className="flex gap-3 mx-auto text-center items-center">
          <button className="bg-[#6F73C2] rounded-[10px] p-2 flex gap-2 h-15 w-[250px] text-center items-center mx-auto">
            <Image 
              src="assets/vector-lupa.svg"
              width={20}
              height={20}
              alt="lupa icono"
            />
            <label className="">Buscar Médicos</label>
          </button>
          <button className="bg-[#757AD0] border-1 border-white rounded-[10px] p-2  h-15 w-[250px]">
            Solicitar Acceso
          </button>
        </div>
      </div>
      {/* End of Fifth Section */}
      {/* Footer */}
      <div className="flex p-4 mt-10 mb-30">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center text-center">
              <Image 
                src="/assets/logo.svg"
                width={59}
                height={69}
                alt="Logo Svg"
                className="text-2xl"
              />
              <label className="font-bold text-xl">P I A</label>
            </div>
            <label className="text-[15px] w-[60%]">Inteligencia artificial para la detección temprana del cáncer de páncreas.</label>
          </div>
        </div>
      </div>
      {/* End of Footer */}
    </div>
  );
}
