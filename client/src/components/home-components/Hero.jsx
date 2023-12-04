import Button from "./Button";

import pcHero from "../../assets/images/pc.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-box wrapper">
        <div className="hero-left">
          <h1>Scopri il Futuro della Tecnologia</h1>
          <p>
            Libera il massimo potenziale del tuo setup col meglio della tecnologia.
            Acquista ora e trasforma la tua esperienza digitale in qualcosa di unico!
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