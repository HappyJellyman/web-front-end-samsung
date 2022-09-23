import { useCart } from 'components/Contents/CartContent';
import { number } from 'prop-types';
import CartTotal from './CartTotal';

const CartFooter = () => {
  const { carts } = useCart();

  return (
    <footer>
      <CartTotal>{carts.totalPrice}</CartTotal>
    </footer>
  );
};

export default CartFooter;
