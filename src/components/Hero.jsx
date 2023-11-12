import Button from "../components/Button";

const Hero = () => {
  return (
    <section>
      <div className="hero-box">
        <div className="hero-left">
          <h1>Lorem Ipsum Dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur et temporibus inventore velit ratione sunt voluptas itaque quis exercitationem?</p>
          <div className="btns-box">
            <Button text='Click me' theme='dark' />
            <Button text='Click me' theme='light' />
          </div>
        </div>
        <div className="hero-right">
          <div className="img"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;