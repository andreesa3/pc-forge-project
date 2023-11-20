import Button from "./Button";

const Exclusive = () => {
  return (
    <section className="exclusive-build">
      <div className="exclusive-build-wrapper wrapper">
          <div className="container-sx">
            <h1>Lorem Ipsum</h1>
            <div className="build-list">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="price">
              <p>2500,00€</p>
              <Button text="Click me" theme="btn-purple" />
            </div>
          </div>
          <div className="container-center">
            <div className="pc">
              <img src="./scr/assets/images/pc1.jpg" alt="pc-build" />
              </div>
          </div>
          <div className="container-dx">
            <div className="info">
              <div>
                <img src="#" alt="#" />
              </div>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              <div>
                <img src="#" alt="#" />
              </div>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              <div>
                <img src="#" alt="#" />
              </div>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              <div>
                <img src="#" alt="#" />
              </div>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Exclusive;
