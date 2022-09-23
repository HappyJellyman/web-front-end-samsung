import { any, string, number, shape } from 'prop-types';
import React, { useContext } from 'react';
import { StringType } from 'types';

const CartContext = React.createContext();

export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  value: shape({
    title: StringType,
    products: any,
    totalPrice: number,
  }),
  children: any,
};

export const useCart = () => {
  const value = useContext(CartContext);
  console.log(value);
  return value;
};
