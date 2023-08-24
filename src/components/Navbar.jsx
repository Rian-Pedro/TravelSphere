import "./Navbar.scss";

import logo from "../assets/logo.svg"; 
import { RiArrowDownSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {

  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const dropNav = useRef(null);
  const teste = useRef(null);

  const headerInfos = {
    viagens: "Nossos pacotes de viagem cuidadosamente projetados levam você a experiências únicas, de praias ensolaradas a aventuras na natureza. Deixe os detalhes conosco e concentre-se em aproveitar ao máximo sua jornada.",
    hospedagem: "Descubra acomodações acolhedoras através dos nossos pacotes de hospedagem. De hotéis charmosos a retiros luxuosos, cuidamos de tudo para que você desfrute ao máximo sua estadia.",
    combos: "Simplifique sua aventura com nossos pacotes combinados de viagem e hospedagem. Explore novos destinos durante o dia e relaxe em acomodações confortáveis à noite. Deixe-nos cuidar dos detalhes para que você possa criar memórias inesquecíveis."
  }

  const handleHeaderText = (key) => {
    setHeaderText(headerInfos[key]);
  }

  // useEffect(() => {

  //   const handleScroll = (e) => {
  //     if(isOpenMobile) {
  //       document.body.style.overflow = "hidden";
  //       return;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [isOpenMobile]);

  useEffect(() => {
    
    const handleOutSideClick = (e) => {
      if(dropNav.current && !dropNav.current.contains(e.target) && e.target !== teste.current) {
        setIsOpenDesktop(false);
        setHeaderText("");
      }
    }

    if(isOpenDesktop) {
      window.addEventListener("click", handleOutSideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    }

  }, [isOpenDesktop]);

  return (
    <header className="w-full flex justify-between px-6 sm:px-12 py-5 items-center">
      <div className="logo">
        <img src={logo} alt="TravelSphere" className="w-36" />
      </div>

      <div className="block sm:hidden">
        <RiMenu5Fill className="text-3xl cursor-pointer" onClick={() => {
          setIsOpenMobile(true);
          document.body.style.overflow = "hidden";
        }} />
      </div>

      <div className={`drop-mobile fixed h-screen bg-gray-100 ${isOpenMobile ? "w-full" : "w-0"} top-0 right-0 z-30 transition-all duration-base flex flex-col items-center justify-center overflow-hidden`}>
        
        <div className="h-5% w-full flex justify-end items-center">
          <AiOutlineCloseSquare className="text-4xl cursor-pointer" onClick={() => {
            setIsOpenMobile(false);
            document.body.style.overflow = "visible";
          }} />
        </div>

        <div className="h-95% w-full flex justify-center items-center">
          <ul className="text-center text-3xl">
            <li className="p-6 border-b border-gray-500 cursor-pointer">Viagens</li>
            <li className="p-6 border-b border-gray-500 cursor-pointer">Hospedagens</li>
            <li className="p-6 border-b border-gray-500 cursor-pointer">Combos</li>
          </ul>
        </div>

      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-5 font-medium">
          <li className="font-bold text-blue1"><p className="link-menu">Principal</p></li>
          <li><p className="link-menu">Sobre</p></li>
          <li className="relative">
            <div className="flex items-center gap-1" onClick={() => {
              setIsOpenDesktop(!isOpenDesktop);
            }}>
              <p  ref={teste} className="link-menu">Pacotes</p> <RiArrowDownSLine className={`transform ${isOpenDesktop ? "rotate-0" : "-rotate-90"} duration-base transition-all`} />
            </div>
            <div className={`drop absolute w-100 ${isOpenDesktop ? "h-60" : "h-0"} bg-gray-100 shadow-md top-fullplus transition-all duration-base overflow-hidden flex`}>

              <div ref={dropNav} className="w-1/2 h-full mb-5 block border-r border-gray-300">
                <ul>
                  <li className="text-center p-6 border-b border-gray-300 cursor-pointer" onMouseMove={() => handleHeaderText("viagens")}>Viagens</li>
                  <li className="text-center p-6 border-b border-gray-300 cursor-pointer" onMouseMove={() => handleHeaderText("hospedagem")}>Hospedagens</li>
                  <li className="text-center p-6 border-b border-gray-300 cursor-pointer" onMouseMove={() => handleHeaderText("combos")}>Combos</li>
                </ul>
              </div>

              <div className="w-1/2 bg-gray1 p-4 text-sm text-white font-semibold">{headerText}</div>

            </div>
          </li>
          <li><p className="link-menu">FAQ</p></li>
          <li><p className="link-menu">Clientes</p></li>
        </ul>
      </nav>

      <div className="btn gap-5 hidden sm:flex">
        <div className="px-3 py-2 border border-gray1 rounded-lg font-medium">Login</div>
        <div className="px-3 py-2 border border-black bg-black text-white rounded-lg font-medium">Cadastrar</div>
      </div>
    </header>
  )
}

export default Navbar