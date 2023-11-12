import arrow from '../assets/icons/arrow.svg'

const Anchor = () => {
  return <a href="#" style={{color: '#8a00fc', display: 'flex', alignItems: 'center', fontSize: '1.2rem', gap: '.2rem'}}>
    Click me 
    <img src={arrow} style={{height: '.8rem'}} alt="arrow icon" />
  </a>
}

export default Anchor;