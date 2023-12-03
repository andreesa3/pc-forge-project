import Button from "../home-components/Button";

import pcHero from "../../assets/images/pc.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-box wrapper">
        <div className="hero-left">
          <h1><span style={{color:"var(--clr-purple)"}}>PCForge</span>: I migliori PC sul mercato</h1>
          <p>
          Offriamo una gamma diversificata di PC assemblati su misura e componenti hardware di alta qualità. Esplorate il nostro catalogo per trovare soluzioni adatte alle vostre necessità tecnologiche.
          </p>
          <div className="btns-box">
            <Button text="Scopri di più" theme="dark" />
          </div>
        </div>
        <div className="hero-right">
          <img src={pcHero} alt="pc image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
