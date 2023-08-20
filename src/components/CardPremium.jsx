const CardPremium = ({ num, name, desc }) => {
  return (
    <div className="w-min flex flex-col gap-3">
      <div className="header flex gap-3">
        <div className="num bg-blue1 w-6 h-6 flex justify-center items-center text-white rounded-full font-semibold">{num}</div>
        <p className="font-semibold">{name}</p>
      </div>
      <p className="w-64 self-stretch text-center sm:text-start sm:ml-9 text-gray1 font-semibold">
        {desc}
      </p>
    </div>
  )
}

export default CardPremium