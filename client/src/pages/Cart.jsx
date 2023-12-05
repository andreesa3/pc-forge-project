import solitudine from '../assets/images/solitudine.jpeg'
import { useGetAllProductsQuery } from '../features/ProductApi';

const Cart = () => {
  const {data, error, isLoading} = useGetAllProductsQuery()

  return (
    <section>
      <div className='wrapper' style={{textAlign: 'center'}}>
        <h3 style={{lineHeight: '200%', marginBottom: '3rem'}}>Sistema di spedizione NON ancora disponibile nella tua zona, ci scusiamo per il disagio, stiamo lavorando per ampliare la nostra rete!</h3>
        <img src={solitudine} alt="" />
      </div>
    </section>
  );
};

export default Cart;
