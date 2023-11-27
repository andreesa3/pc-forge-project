import Button from "./Button";

import cpuIcon from "../../assets/icons/componentsIcon/cpu-icon.svg";
import gpuIcon from "../../assets/icons/componentsIcon/gpu-icon.svg";
import ssdIcon from "../../assets/icons/componentsIcon/ssd-icon.svg";
import ramIcon from "../../assets/icons/componentsIcon/ram-icon.svg";

const Exclusive = () => {
  return (
    <section className="exclusive-build">
      <div className="box-1"></div>
      <div className="exclusive-build-wrapper wrapper">
        <div className="container-sx">
          <h2>Lorem Ipsum</h2>
          <div className="container-sx-pc">
            <img src="./src/assets/images/homepage.png" alt="pc-build" />
          </div>
          <div className="build-list">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              eaque, numquam ea unde repudiandae nam accusantium facilis
              voluptatem architecto illum?
            </p>
          </div>
          <div className="price">
            <p>2500,00€</p>
            <Button text="Click me" theme="btn-purple" />
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
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={gpuIcon} alt="gpu-icon" />
              </div>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={ssdIcon} alt="ssd-icon" />
              </div>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <img src={ramIcon} alt="ram-icon" />
              </div>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum dolor sit amet</p>
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
