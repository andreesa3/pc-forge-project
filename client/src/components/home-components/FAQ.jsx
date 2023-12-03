import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material/utils';
import { useState } from 'react';


export default function BasicAccordion() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

  return (
    <section>
      <div className="faq-container">
        <div className="faq-title-box">
          <h2>Frequently Asked Question</h2>
          <h3>Le domande più frequenti in un unico posto.</h3>
        </div>
        <div className='faq-cards-box'>
          <div className="faq-card">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<PlusIcon sx={{ color: '#8a00fc', fontWeight: '300' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="faq-question">
                  <Typography>
                    Posso costruire il mio PC personalizzato all'interno del vostro sito?
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="faq-answer">
                  <Typography>
                    Certo! Assolutamente! Su PCForge offriamo una gran varietà di componenti che puoi usare per creare il tuo PC personalizzato.
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="faq-card">
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<PlusIcon sx={{ color: '#8a00fc', fontWeight: '300' }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="faq-question">
                  <Typography>
                    Quali sono i costi ed i tempi di spedizione per il mio ordine?
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="faq-answer">
                  <Typography>
                    La spedizione è gratuita all'interno del territorio italiano e di solito impiega 2-5 giornate lavorative.
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="faq-card">
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<PlusIcon sx={{ color: '#8a00fc', fontWeight: '300' }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <div className="faq-question">
                  <Typography>
                    Il vostro sito offre sconti o promozioni?
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="faq-answer">
                  <Typography>
                    Assolutamente! PCForge offre periodicamente sconti e promozioni per i nostri clienti ma soprattutto, mette a disposizione un prodotto top che potete trovare nella Home del nostro sito!
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="faq-card">
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<PlusIcon sx={{ color: '#8a00fc', fontWeight: '300' }} />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <div className="faq-question">
                  <Typography>
                    Di quali componenti ho bisogno per costruire un PC?
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="faq-answer">
                  <Typography>
                    I componenti essenziali che non devono mancare ad un PC di qualità sono: Il Processore (CPU), Scheda madre, Memoria (RAM), Scheda grafica (GPU), disco rigido (HDD) e un'Unità di raffreddamento.
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}