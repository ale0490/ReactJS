import "./NavBar.css";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardWidget from "../CartWidjet/CartWidget";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo.png"/>
      </div>
      <ul>
        <li>
          <button>home</button>
        </li>
        <li className="acordion">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                <button>Joyeria</button>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li>
                  <button>Anillos</button>
                </li>
                <li>
                  <button>Brazaletes</button>
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </li>
        <li>
          <button>Contacto</button>
        </li>
      </ul>
      <div>
        <CardWidget/>
      </div>
    </div>
  )
}

export default NavBar