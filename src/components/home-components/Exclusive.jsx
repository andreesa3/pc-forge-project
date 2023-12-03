import Button from "./Button";
import cpuIcon from "../../assets/icons/componentsIcon/cpu-icon.svg";
import gpuIcon from "../../assets/icons/componentsIcon/gpu-icon.svg";
import ssdIcon from "../../assets/icons/componentsIcon/ssd-icon.svg";
import ramIcon from "../../assets/icons/componentsIcon/ram-icon.svg";
import mockfile from "/mockfile.json";
import { Details } from "@mui/icons-material";
const Exclusive = () => {
  const forgeMasterII=mockfile.prebuilder[5]
  
  return (
    <section className="exclusive-build">
      <div className="box-1"></div>
      <div className="exclusive-build-wrapper wrapper">
        <div className="container-sx">
          <h2>{forgeMasterII.name}</h2>
          <div className="container-sx-pc">
            <img src="./src/assets/images/homepage.png" alt="pc-build" />
          </div>
          <div className="build-list">
            <p>FORGE MASTER II' è una potente macchina progettata per gaming avanzato e attività ad elevate performance.
               Con un design pensato per offrire prestazioni eccezionali, 
              è un'ottima scelta per esperienze di gioco di fascia alta.
            </p>
          </div>
          <div className="price">
            <p>{forgeMasterII.price}€ </p>
            <Button text="Scopri di più" theme="btn-purple" />
          </div>
        </div>
        <div className="container-center">
          <div className="pc">
            <img src="./src/assets/images/homepage.png" alt="pc-build" />
          </div>
        </div>
        <div className="container-dx">
          <div className="info">
            <div className="info-card">
              <div>
                <img src={cpuIcon} alt="cpu-icon" />
              </div>
              <div>
                <h3>{forgeMasterII.cpu}</h3>
                <p>Lorem Ipsum dolor sit amet</p>
                {/* <p>Cores:{mockfile.cpu[3].details.cores}</p> */}
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={gpuIcon} alt="gpu-icon" />
              </div>
              <div>
                <h3>{forgeMasterII.gpu}</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={ssdIcon} alt="ssd-icon" />
              </div>
              <div>
                <h3>{forgeMasterII.ssd}</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={ramIcon} alt="ram-icon" />
              </div>
              <div>
                <h3>{forgeMasterII.ram}</h3>
                <p>{}</p>
              </div>
            </div>
            <div className="info-price">
              <p>2500,00€</p>
              <Button text="Click me" theme="btn-purple" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-2"></div>
    </section>
  );
};

export default Exclusive;
