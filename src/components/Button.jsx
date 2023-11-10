import '../style/btn.css'

const Button = ({ text, theme }) => {
  return <button className={`btn ${theme}`}>{text}</button>
}

export default Button;