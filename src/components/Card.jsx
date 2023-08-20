import { BsFillStarFill } from "react-icons/bs";

const Card = ({ src, name, price, starCount }) => {
  return (
    <div className="w-64 select-none">
      <div className="img">
        <img src={src} alt={name} className="rounded-md" />
      </div>

      <div className="flex justify-between mt-3">
        <p className="text-xl font-semibold">{name}</p>
        <div className="flex items-center gap-1">
          <BsFillStarFill className="text-yellow1 text-xl"/>
          <p className="font-semibold">({starCount})</p>
        </div>
      </div>

      <p className="font-semibold text-sm text-gray1">Valor inicial: <span className="text-blue1">R$</span><span className="text-black">{price}</span></p>
    </div>
  )
}

export default Card