import "./Navbar.scss";

import logo from "../assets/logo.svg";
import { RiArrowDownSLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <header className="w-full flex justify-between px-12 py-5 items-center">
      <div className="logo">
        <img src={logo} alt="TravelSphere" className="w-36" />
      </div>

      <nav>
        <ul className="flex gap-5 font-medium">
          <li className="font-bold text-blue1">Principal</li>
          <li>Sobre</li>
          <li className="flex items-center gap-2">Pacotes <RiArrowDownSLine /></li>
          <li>FAQ</li>
          <li>Clientes</li>
        </ul>
      </nav>

      <div className="btn flex gap-5">
        <div className="px-3 py-2 border border-gray1 rounded-lg font-medium">Login</div>
        <div className="px-3 py-2 border border-black bg-black text-white rounded-lg font-medium">Cadastrar</div>
      </div>
    </header>
  )
}

export default Navbar