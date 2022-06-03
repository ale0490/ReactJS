import "./NavBar.css";
import * as React from 'react';
import CardWidget from "../CartWidjet/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
        <img src="../logo.png" className="logo"/>
      <ul className="ul-navbar">
        <li>
          <button className="button-navbar">
            <Link to="/" className="link-navbar"> Inicio </Link>
          </button>
        </li>
        <li>
          <button className="button-navbar">
            <Link to="/Anillos" className="link-navbar"> Anillos </Link>
          </button>
        </li>
        <li>
          <button className="button-navbar">
            <Link to="/Brazaletes" className="link-navbar"> Brazaletes </Link>
          </button>
        </li>
        <li>
          <button className="button-navbar">
            <Link to="/Colgantes" className="link-navbar"> Colgantes </Link>
          </button>
        </li>
        <li>
          <button className="button-navbar">
            <Link to="/Contacto" className="link-navbar"> Contacto </Link>
          </button>
        </li>
      </ul>
        <CardWidget/>
    </div>
  )
}

export default NavBar