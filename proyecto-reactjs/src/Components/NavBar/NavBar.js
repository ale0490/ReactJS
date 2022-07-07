//React
import { useState } from 'react'
import { Link } from "react-router-dom";
//Material UI
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Toolbar } from "@mui/material";
//Propio
import CardWidget from "../CartWidjet/CartWidget";
import "./NavBar.css";

const NavBar = () => {

  const [anchorElJoyeria, setAnchorElJoyeria] = useState(null);
  const [anchorElAccs, setAnchorElAccs] = useState(null);

  const handleOpenJoyeria = (e) => {
    setAnchorElJoyeria(e.currentTarget);
  };

  const handleCloseJoyeria = () => {
    setAnchorElJoyeria(null);
  };

  const handleOpenAccs = (e) => {
    setAnchorElAccs(e.currentTarget);
  };
  
  const handleCloseAccs = () => {
    setAnchorElAccs(null);
  };

  const categories = ["Anillos", "Colgantes", "Brazaletes"];
  const accs = ["Llaveros", "Tazas", "Accesorios Barba"];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="logo left">
          <img className="img-logo" src="../logo.png"/>
        </div>
        <div className="main-nav">
            <ul className="menu">
              <li>
                <Link to="/" className="nav-li deco-none"> Inicio </Link>
              </li>
              <li>
                <button
                      className="nav-li deco-none"
                      id="joyeria-button"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onMouseMove={handleOpenJoyeria}
                      variant='text'>
                    Joyeria 
                </button>
                <Menu 
                    anchorEl={anchorElJoyeria} 
                    open={Boolean(anchorElJoyeria)} 
                    onClose={handleCloseJoyeria} 
                    MenuListProps={{'aria-labelledby': 'joyeria-button',}}>
                  {categories.map( (cat) => {
                    return (
                      <MenuItem onClick={handleCloseJoyeria}>
                        <Link to={`/Cat/${cat}`} className="deco-none link-cat-nav"> 
                          {cat} 
                        </Link>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </li>
              <li>
                <button 
                    id="accs-button" 
                    className="nav-li deco-none"
                    onMouseEnter={handleOpenAccs}
                    variant='text'>  
                  Accesorios 
                </button>
                <Menu 
                    anchorEl={anchorElAccs} 
                    open={Boolean(anchorElAccs)} 
                    onClose={handleCloseAccs}
                    MenuListProps={{'aria-labelledby': 'accs-button',}}>
                  {accs.map( (acc) => {
                    return (
                      <MenuItem onClick={handleCloseAccs}>
                        <Link to={`/Cat/${acc}`} className="deco-none link-cat-nav"> {acc} </Link>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </li>
              <li>
              <Link to="/Contacto" className="nav-li deco-none"> 
                Contacto 
              </Link>
            </li>
            <li>
              <Link to="/Pedido" className="nav-li deco-none"> 
                Sigue tu pedido
              </Link>
            </li>
            </ul>
        </div>
        <div className="mini-cart right">
          <CardWidget/>
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;