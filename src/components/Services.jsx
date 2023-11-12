import box from '../assets/icons/box.svg'
import Anchor from '../components/Anchor';

const Services = () => {
  return (
    <section>
      <div className="services-box">
        <div className="service-card">
          <img src={box} alt="box icon" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam volutpat ligula arcu.</p>
          <Anchor text='Click me' theme='light' />
        </div>
        <div className="service-card">
          <img src={box} alt="box icon" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam volutpat ligula arcu.</p>
          <Anchor text='Click me' theme='light' />
        </div>
        <div className="service-card">
          <img src={box} alt="box icon" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam volutpat ligula arcu.</p>
          <Anchor text='Click me' theme='light' />
        </div>
      </div>
    </section>
  )
}

export default Services;