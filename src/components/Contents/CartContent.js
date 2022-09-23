import { any, string, number, shape, func } from 'prop-types';
import React, { useContext } from 'react';
import { StringType } from 'types';

const CartContext = React.createContext();

export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  value: shape({
    title: string,
    products: any,
    totalPrice: number,
    onUpdateProduct: func
  }),
  children: any,
};

export const useCart = () => {
  const value = useContext(CartContext);
  return value;
};
