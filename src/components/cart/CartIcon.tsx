import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

const CartIcon = function () {
  const { cartItems, updateCartItems } = useCart();

  const handleCartClick = () => {
    const newCartItemCount = cartItems + 1;
    updateCartItems(newCartItemCount);
  };

  return (
    <div onClick={handleCartClick}>
      <FontAwesomeIcon icon={faCartShopping} color="#ffffff" size="xl" />
      {cartItems > 0 && <span>({cartItems})</span>}
    </div>
  );
};

export default CartIcon;
