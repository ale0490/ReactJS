import "./NavBar.css";
import * as React from 'react';
import CardWidget from "../CartWidjet/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <img src="./logo.png" className="logo"/>
      <ul className="ul-navbar">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Anillos</a>
        </li>
        <li>
          <a>Brazaletes</a>
        </li>
        <li>
          <a>Colgantes</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
        <CardWidget/>
    </div>
  )
}

export default NavBar