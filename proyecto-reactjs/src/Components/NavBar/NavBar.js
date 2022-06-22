import "./NavBar.css";
import * as React from 'react';
import CardWidget from "../CartWidjet/CartWidget";
import { Link } from "react-router-dom";
import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["Anillos", "Colgantes", "Brazaletes"];

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
          <button className="button-navbar link-navbar"
                  id="basic-button" 
                  aria-controls={open ? 'basic-menu' : undefined} 
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined} 
                  onClick={handleClick}  
                  variant='text'> 
            Productos 
          </button>
          <Menu id="basic-menu" 
                anchorEl={anchorEl} 
                open={open} 
                onClose={handleClose} 
                MenuListProps={{'aria-labelledby': 'basic-button',}}>
            {categories.map( (cat) => {
              return (
                <MenuItem onClick={handleClose}>
                  <Link to={`${cat}`} className="link-navbar"> {cat} </Link>
                </MenuItem>
              )})}
          </Menu>
        </li>
        <li>
          <button className="button-navbar">
            <Link to="/Contacto" className="link-navbar"> Contacto </Link>
          </button>
        </li>
        <li>
        <Link to="/Cart" className="link-navbar">
        <CardWidget/>
        </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar