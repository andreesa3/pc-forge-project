import Button  from "../components/Button";

const Exclusive = () => {
  return (
    <>
      <div className="exclusive-build">
        <div className="exclusive-build-wrapper">
          <div className="container-sx">
            <h1>Lorem Ipsum</h1>
            <div className="build-list">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="price">
              <p>2500,0</p>
              <Button text="Click me" theme="light" />
            </div>
          </div>
          <div className="container-center">
            <div className="pc">{/* <img src="#" alt="pc-build" /> */}</div>
          </div>
          <div className="container-dx">
            <div className="info">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
