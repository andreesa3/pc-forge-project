import Button from "../components/Button";

const CallToAction = () => {
  return (
    <>
      <div className="calltoaction">
        <div className="calltoaction-wrapper">
          <div className="calltoaction-left">
            {/* <img src="#" alt="buld-pc" /> */}
          </div>
          <div className="calltoaction-rigth">
            <h2>Assembla il tuo pc con il nostro builder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              repellat cum officiis molestias totam sunt perspiciatis eius, at
              laboriosam corporis velit corrupti sed sapiente sequi expedita
              esse, cupiditate doloremque debitis.
            </p>
            <div>
              <Button text="Click me" theme="light" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
