// import React from "react";
import { Link } from "react-router-dom";
import man from "../assets/man_think.jpg";
import woman from "../assets/woman.jpg";
import mex from "../assets/mexico.jpg";
import usa from "../assets/usa.jpg";
import espana from "../assets/espana.jpg";
import qatar from "../assets/qatar.jpg";
import chile from "../assets/chile.jpg";
import tunez from "../assets/tunez.jpg";
import ecuador from "../assets/ecuador.jpg";
import slovaquia from "../assets/slovaquia.jpg";


function Page_Info() {
  return (
    <div className="container mx-auto px-16 pt-20">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">
            IA de Banderas
          </h1>
          <p className="mb-8 leading-relaxed opacity-50 ">
            Descubre el fascinante mundo de las banderas con nuestra avanzada tecnología de reconocimiento de imágenes. Nuestra IA de vanguardia utilizará algoritmos de aprendizaje profundo para identificar con precisión y rapidez cualquier bandera que encuentres, ya sea en una imagen o una foto.
          </p>
          <div className="flex justify-center">
            <Link to="/ia" className="inline-flex text-white bg-green-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
              Pruebalo Ahora!
            </Link>
          </div>
        </div>
        <div
          id="pattern"
          className="w-12 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-1/5 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div className=" flex gap-3 justify-center ">
            <img
              className="object-cover object-center rounded-xl w-23 h-23"	
              alt="hero"
              src={mex}
            />
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={usa}
            />
          </div>
          <div className="w-full h- flex gap-2 justify-center items-center my-2">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={espana}
            />
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={qatar}
            />
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={chile}
            />
          </div>
          <div className="w-full flex gap-3 justify-center">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={ecuador}
            />
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={tunez}
            />
          </div>
          <div className="w-full flex gap-3 justify-center my-2">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src={slovaquia}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-20">
        <img
          src={man}
          alt="Logo"
          className="w-1/2 md:w-1/2 rounded-lg shadow-md"
        ></img>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Descubre el poder de la inteligencia artificial para reconocer
            banderas!
          </h1>
          <p className="text-gray-700 leading-relaxed">
            ¿Alguna vez te has preguntado qué bandera es esa que ves en una
            foto? Con nuestra innovadora tecnología de reconocimiento de
            banderas, ahora puedes averiguarlo en cuestión de segundos. No
            importa si la bandera está en una toma de pantalla, un archivo de
            imagen o una de imagen de internet, nuestra IA de vanguardia
            utilizará redes neuronales para identificar la bandera con precisión
            y rapidez.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para descubrirlo?
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Haz clic en el botón de abajo y comienza tu viaje para explorar el
            fascinante mundo de las banderas con nuestra IA. ¡Es fácil, rápido y
            divertido!
          </p>
          <div className="pt-6"></div>
          <Link
            to={"/ia"}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Ir a la IA
          </Link>
        </div>
        <img
          src={woman}
          alt="Logo"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        ></img>
      </div>
      <div className="pt-10"></div>
    </div>
  );
}

export default Page_Info;
