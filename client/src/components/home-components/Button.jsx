const Button = ({ text, theme, addToCart, removeFromCart }) => {
  return (
    <>
      {
        text === 'Aggiungi al Carrello' ? (
          <button className={`btn ${theme}`} onClick={addToCart}>{text}</button>
        ) : (<button className={`btn ${theme}`} onClick={removeFromCart}>{text}</button>)
      }
    </>
  )
}

export default Button;