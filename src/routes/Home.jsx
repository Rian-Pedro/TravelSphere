import "./Home.scss"

import { useState, useRef } from "react";

import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillCalendarDateFill, BsDashLg, BsSearch, BsInstagram, BsTwitter, BsFacebook, BsArrowLeftCircleFill, BsArrowLeftCircle, BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";

import imgBeach from "../assets/beachImg.png";
import imgToronto from "../assets/toronto.svg";
import imgNature from "../assets/nature.svg";
import imgFolha from "../assets/folha.svg";
import imgLetter from "../assets/letter.svg";
import Card from "../components/Card";
import CardPremium from "../components/CardPremium";
import { Link } from "react-router-dom";

const Home = () => {

  const carrosselRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const handleCarrossel = (direction) => {

    const leftCarrossel = parseInt(carrosselRef.current.style.left || 0, 10);
    const clientW = carrosselRef.current.clientWidth;
    let newLeft = leftCarrossel;
    
    if(direction === "l") {
      if(leftCarrossel >= -1) return;
      setCanRight(true);
      newLeft = leftCarrossel + (256 + 12);
    } else {
      if(leftCarrossel === -((clientW * 0.80))) return;
      setCanLeft(true);
      newLeft = leftCarrossel - (256 + 12);
    }
    
    carrosselRef.current.style.left = `${newLeft}px`;
    setCanLeft(parseInt(carrosselRef.current.style.left || 0, 10) < 0);
    setCanRight(!(parseInt(carrosselRef.current.style.left || 0, 10) < -((clientW * 0.85))));
  }

  return (
    <main className="min-h-screen">

      <section className="min-h-screen flex flex-col sm:flex-row w-full justify-around items-center">

        <div className="presentation p-4 sm:p-0 sm:w-2/5 flex flex-col sm:gap-9 gap-10">

          <div className="title-container w-full flex flex-col sm:gap-8 gap-12">
            <div className="title">
              <h1 className="text-5xl font-bold sm:w-10/12">Venha realizar seu sonho <span className="italic relative">conosco</span></h1>
            </div>
            
            <p className="font-semibold text-gray1">Embárque em uma jornada extraordinária, onde cada destino é uma nova história a ser desvendada. Explore o mundo com olhos curiosos e crie memórias que durarão para sempre.</p>
          </div>

          <form className="sm:py-3 py-6 flex flex-col sm:flex-row border border-gray1 justify-between gap-4 sm:gap-0 items-center px-6 rounded-lg">

            <div className="local-input">
              <div className="flex items-center gap-3">
                <FaMapMarkedAlt className="text-2xl fill-blue2"/>
                <p>Local</p>
              </div>

              <input type="text" placeholder="ex. Vancouver, Inglaterra" className="sm:text-xs relative top-1 sm:top-0 sm:left-9 outline-none font-medium"/>
            </div>

            <BsDashLg className="hidden sm:block rotate-90 scale-150 fill-gray1"/>

            <div className="sm:hidden w-4/5 h-0.5 bg-gray1"></div>

            <div className="date-input">
              <div className="flex items-center gap-3">
                <BsFillCalendarDateFill className="text-2xl fill-blue2"/>
                <p>Data e Hora</p>
              </div>

              <input type="text" placeholder="Dia/Mês/Ano" className="sm:text-xs relative top-1 sm:top-0 sm:left-9 outline-none font-medium"/>
            </div>

            <button type="submit" className="bg-blue2 p-3 rounded-lg w-full sm:w-auto flex justify-center">
              <BsSearch className="text-xl sm:text-3xl fill-white"/>
            </button>

          </form>

          <div className="follow flex gap-6">
            <p className="text-gray1 font-semibold">Nos Siga:</p>
            
            <div className="social flex gap-5">
              <BsFacebook className="text-2xl fill-gray1"/> 
              <BsInstagram className="text-2xl fill-gray1"/> 
              <BsTwitter className="text-2xl fill-gray1"/>
            </div>
            
          </div>

        </div>

        <img src={imgBeach} alt="praia" width="419px" height="479px" className="w-1/4 hidden sm:block"/>

      </section>

      <section className="most-popular w-full overflow-hidden py-20">

        <div className="container-mp w-4/5 flex flex-col items-start mx-auto gap-12">

          <div className="mp-header w-full flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 sm:gap-0">
            <div>
              <div className="flex sm:gap-5 items-center">
                <h1 className="text-3xl font-semibold">Destinos Populares</h1>
                <div className="border border-gray1 rounded-md text-xs font-medium flex justify-center items-center h-min p-2 w-1/2 sm:w-auto">Ver Todos</div>
              </div>
              <p className="font-semibold text-gray1 mt-3">Veja os destinos mais escolhidos pelos nossos clientes</p>
            </div>

            <div className="flex gap-8 justify-between sm:justify-normal w-full sm:w-auto">
              { !canLeft &&
                <BsArrowLeftCircle className="text-5xl text-gray1 opacity-30 cursor-pointer"/> }
              { canLeft &&
                <BsArrowLeftCircleFill className="text-5xl text-blue1 cursor-pointer" onClick={() => handleCarrossel("l")}/> }
              
              { !canRight &&
                <BsArrowRightCircle className="text-5xl text-gray1 opacity-30 cursor-pointer"/> }
              { canRight &&
                <BsArrowRightCircleFill className="text-5xl text-blue1 cursor-pointer" onClick={() => handleCarrossel("r")}/> }
            </div>
          </div>

          <div className="card-area w-full relative overflow-visible h-80 mx-auto">

            <div className="carrossel-container flex gap-3 sm:gap-14 absolute" ref={carrosselRef}>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
              <Card src={imgToronto} name="Toronto, Canadá" price="2000" starCount="4,5"/>
            </div>

          </div>

        </div>

      </section>

      <section className="premium-service py-16 px-4 sm:px-24 flex flex-col sm:flex-row justify-between gap-24 sm:gap-0">

        <div className="sm:w-2/4 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-center sm:text-start text-3xl font-semibold">Participe de nosso serviço de viagens premium</h1>
            <p className="text-center sm:text-start text-gray1 text-base font-semibold">Locais perfeitos para fotos e encontros inesquecíveis. Encontre o seu pedaço de paraíso, com tranquilidade para aproveitar as férias.</p>
          </div>

          <div className="grid justify-center sm:grid-cols-2 gap-y-9 gap-x-8">

            <CardPremium num="1" name="Experiência Personalizada" desc="Nossos especialistas criam jornadas feitas sob medida para você, atendendo aos seus desejos e sonhos."/>
            <CardPremium num="1" name="Experiência Personalizada" desc="Nossos especialistas criam jornadas feitas sob medida para você, atendendo aos seus desejos e sonhos."/>
            <CardPremium num="1" name="Experiência Personalizada" desc="Nossos especialistas criam jornadas feitas sob medida para você, atendendo aos seus desejos e sonhos."/>

          </div>
        </div>

        <img src={imgNature} alt="" />

      </section>

      <section className="plans flex flex-col-reverse sm:flex-row  px-4 sm:px-24 py-24 gap-24">

        <img src={imgFolha} alt="" className="sm:w-2/5 rounded-2xl" />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold text-center sm:text-start">Veja todos os nossos planos e aproveite</h1>
          <p className="text-gray1 font-semibold text-center sm:text-start">Pacotes de viagens exclusivos e com descontos imperdíveis. Aproveite e desfrute das suas férias da melhor maneira!</p>
          <div className="flex justify-center sm:justify-normal">
            <Link className="bg-blue1 min-w-min p-3 text-white rounded-md">Ver todos</Link>
          </div>
        </div>
        
      </section>

      <section className="newsletter bg-blue2 flex justify-center items-center gap-24 py-14">

        <img src={imgLetter} alt="letter" className="hidden sm:inline" />

        <div className="sm:w-2/4">
          <div>
            <h1 className="text-4xl font-semibold text-white text-center sm:text-start">Entre em nossa newsletter</h1>
            <p className="font-semibold text-gray1 text-center sm:text-start">Para receber avisos e novidades</p>
          </div>

          <form className="flex flex-col sm:flex-row items-center gap-8 mt-5">
            <input type="text" placeholder="Digite seu e-mail" className="w-3/5 px-5 py-2 font-semibold outline-none text-black rounded-lg"/>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">Inscrever-se</button>
          </form>
        </div>

      </section>

    </main>
  )
}

export default Home