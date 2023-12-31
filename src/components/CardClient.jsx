import { BsStar } from "react-icons/bs";
import star from "../assets/star.svg";

import "./CardClient.scss";
import Lazy from "./Lazy";

const CardClient = ({name, starCount, src, desc}) => {
  
  const bg = {
    width: starCount
  };
  
  return (
    <div className="container-cliente w-80 sm:w-100 py-5 px-4 sm:px-8 flex flex-col gap-5 rounded-2xl shadow-center">

      <div className="grid grid-cols-2 items-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32">
          <Lazy src={src} alt="client" wxs="full" hxs="full" rounded={true} />
        </div>
        <p className="text-blue1 font-bold text-lg">{name}</p>
      </div>

      <p className="text-sm">{desc}</p>

      <div className="flex relative w-max self-end">
        <div className="count absolute z-0 bg-yellow1 h-full" style={bg}></div>
        <img src={star} alt="estrela" className="w-7 sm:w-10 z-10"/>
        <img src={star} alt="estrela" className="w-7 sm:w-10 z-10"/>
        <img src={star} alt="estrela" className="w-7 sm:w-10 z-10"/>
        <img src={star} alt="estrela" className="w-7 sm:w-10 z-10"/>
        <img src={star} alt="estrela" className="w-7 sm:w-10 z-10"/>
      </div>

    </div>
  )
}

export default CardClient