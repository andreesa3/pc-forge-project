const Button = ({ text, theme, addToCart, removeFromCart }) => {
  return (
    <>
      {
        text === 'Compra ora' ? (
          <button className={`btn ${theme}`} onClick={addToCart}>{text}</button>
        ) : (<button className={`btn ${theme}`} onClick={removeFromCart}>{text}</button>)
      }
    </>
  )
}

export default Button;