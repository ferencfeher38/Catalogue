import { createContext, useContext, useState } from "react";

const CartContext = createContext<{
  cartItems: number;
  updateCartItems: (count: number) => void;
}>({
  cartItems: 0,
  updateCartItems: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(0);

  const updateCartItems = (count: number) => {
    setCartItems(count);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
