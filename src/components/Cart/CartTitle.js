import React from 'react';
import { classNames } from 'utils';
import styled from 'styled-components/macro';
import { ReactComponent as SvgIconCart } from 'assets/icons/cart.svg';

import { useCart } from 'components/Contents/CartContent';

/* -------------------------------------------------------------------------- */

function _CartTitle({ as: Comp, className, ...restProps }) {
  const { carts } = useCart();

  return (
    <Comp className={classNames('cartTitle', className)} {...restProps}>
      <SvgIconCart />
      {carts.title}
    </Comp>
  );
}

_CartTitle.defaultProps = {
  as: 'h2',
};

/* -------------------------------------------------------------------------- */

const CartTitle = styled(_CartTitle)`
  display: flex;
  align-items: center;
  margin-top: 0;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 1em;

  svg {
    pointer-events: none;
    margin-right: 6px;
  }
`;

export default CartTitle;
