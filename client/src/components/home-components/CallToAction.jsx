import { Link } from "react-router-dom";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="calltoaction-section">
      <div className="box-1"></div>
      <div className="calltoaction wrapper">
        <div className="calltoaction-left">
          <img src="./src/assets/images/Home.png" alt="" />
        </div>
        <div className="calltoaction-rigth">
          <h2>Assembla il tuo pc con il nostro builder</h2>
          <p>
            Se sogni di possedere un PC su misura, con il nostro
            esclusivo servizio di assemblaggio potrai personalizzare ogni
            componente del tuo computer, creando un sistema unico e
            adatto alle tue esigenze.
          </p>
          <div className="btn-calltoaction">
            <Link to='/builder'>
              <Button text="Inizia da qui" theme="btn-purple" />
            </Link>
          </div>
        </div>
      </div>
      <div className="box-2"></div>
    </section>
  );
};

export default CallToAction;
