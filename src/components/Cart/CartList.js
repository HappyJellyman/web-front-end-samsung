import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import { useCart } from 'components/Contents/CartContent';

export default function CartList() {
  const { carts, handleUpdateAmount } = useCart();

  return (
    <Container>
      {carts.products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onUpdate={handleUpdateAmount}
        />
      ))}
      <CartFooter />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
