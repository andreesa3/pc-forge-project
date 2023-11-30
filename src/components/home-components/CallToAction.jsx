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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            repellat cum officiis molestias totam sunt perspiciatis eius, at
            laboriosam corporis velit corrupti sed sapiente sequi expedita
            esse, cupiditate doloremque debitis.
          </p>
          <div className="btn-calltoaction">
            <Button text="Click me" theme="btn-purple" />
          </div>
        </div>
      </div>
      <div className="box-2"></div>
    </section>
  );
};

export default CallToAction;