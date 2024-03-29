import React from "react";
import Style from "./Header.module.css";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={Style.divGeneralHeader}>
      <div>
        <img src={Logo} alt="" />
      </div>

      <div className={Style.divMenu}>
        <nav className={Style.nav}>
          <Link className={Style.link} to="/">
            Inicio
          </Link>
          <Link className={Style.link} to="/Productos">
            Productos
          </Link>
          <Link className={Style.link} to="/">
            Ver productos
          </Link>
          <Link className={Style.link} to="/">
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
