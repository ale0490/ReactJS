import "./NavBar.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => {
  return (
      <AppBar position="static">
        <Toolbar>
            <div className="logo">
              <img src="./starbucks.png"/>
            </div>
            <ul>
              <li>
                <button>home</button>
              </li>
              <li>
                <button>Productos</button>
              </li>
              <li>
                <button>Contacto</button>
              </li>
            </ul>
        </Toolbar>
      </AppBar>
  )
    
}

export default NavBar