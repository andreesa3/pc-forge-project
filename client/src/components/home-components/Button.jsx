const Button = ({ text, theme, onClickFunction }) => {
  return (
    <>
     <button className={`btn ${theme}`} onClick={onClickFunction}>{text}</button>       
    </>
  )
}

export default Button;