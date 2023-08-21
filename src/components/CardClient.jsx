import { BsStar } from "react-icons/bs";
import star from "../assets/star.svg";

const CardClient = ({name, starCount, src, desc}) => {
  
  const bg = {
    width: starCount
  };
  
  return (
    <div className="w-100 py-5 px-8 flex flex-col gap-5 rounded-2xl shadow-center">

      <div className="grid grid-cols-2 items-center">
        <img src={src} alt="client" className="rounded-100 w-3/5" />
        <p className="text-blue1 font-bold text-lg">{name}</p>
      </div>

      <p>{desc}</p>

      <div className="flex relative w-max self-end">
        <div className="count absolute z-0 bg-yellow1 h-full" style={bg}></div>
        <img src={star} alt="estrela" className="w-10 z-10"/>
        <img src={star} alt="estrela" className="w-10 z-10"/>
        <img src={star} alt="estrela" className="w-10 z-10"/>
        <img src={star} alt="estrela" className="w-10 z-10"/>
        <img src={star} alt="estrela" className="w-10 z-10"/>
      </div>

    </div>
  )
}

export default CardClient