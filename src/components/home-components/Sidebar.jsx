import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'

import gpuIcon from "../../assets/icons/componentsIcon/gpu-icon.svg";
import LaptopChromebookSharpIcon from '@mui/icons-material/LaptopChromebookSharp';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import PhoneIcon from '@mui/icons-material/Phone';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Sidebar = ({ hamburger, event }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {
        <div className={`sidebar ${hamburger ? 'visible' : ''}`}>
          {/* Logo */}
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="logo" />
              <h3><span className="purple">PC</span>FORGE</h3>
            </Link>
          </div>

          {/* Sidebar Links */}
          <div className="sidebar-links">
            <div className="sidebar-accordion">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary>
                  <LaptopChromebookSharpIcon />
                  <Typography>Pre-build</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/cpu' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Low Level Build</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/gpu' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Mid Level Build</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/mb' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>High Level Build</p>
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="sidebar-accordion">
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary>
                  <img src={gpuIcon} alt="" style={{ height: '2rem' }} />
                  <Typography>Componenti</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/cpu' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>CPU</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/gpu' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>GPU</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/motherboard' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Motherboard</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/ram' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>RAM</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/power' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Power</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/ssd' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>SSD</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/case' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Case</p>
                    </Link>
                  </div>
                  <div className="sidebar-accordion-card">
                    <Link to='/products/cooler' onClick={event} onClickCapture={() => setExpanded(false)}>
                      <p>Cooler</p>
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="sidebar-link-card">
              <Link to='/builder' onClick={event} onClickCapture={() => setExpanded(false)}>
                <ConstructionSharpIcon />
                <p>PC Builder</p>
              </Link>
            </div>
            <div className="sidebar-link-card">
              <Link to='/contact' onClick={event} onClickCapture={() => setExpanded(false)}>
                <PhoneIcon />
                <p>Contatti</p>
              </Link>
            </div>
          </div>
        </div >
      }
    </>
  )
}

export default Sidebar;