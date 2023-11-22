import Button from "../home-components/Button";

import pcHero from '../../assets/images/pc.jpg'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-box wrapper">
        <div className="hero-left">
          <h1>Lorem Ipsum Dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="builder-gradient">Autem consequuntur et temporibus inventore velit ratione sunt voluptas itaque</span>  quis exercitationem?</p>
          <div className="btns-box">
            <Button text='Click me' theme='dark' />
            <Button text='Click me' theme='light' />
          </div>
        </div>
        <div className="hero-right">
          <img src={pcHero} alt="pc image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;