import Button from "../home-components/Button";

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
          Con PCForge, hai il controllo totale sulla creazione del tuo sistema ideale. Seleziona attentamente tra una vasta gamma di componenti di alta qualità, tra cui processori, schede madri, schede video, e altro ancora.
          </p>
          <div className="btn-calltoaction">
            <Button text="Scopri di più" theme="btn-purple" />
          </div>
        </div>
      </div>
      <div className="box-2"></div>
    </section>
  );
};

export default CallToAction;
