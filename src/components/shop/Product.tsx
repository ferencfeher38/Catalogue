import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/shop/Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../cart/CartContext";

type ProductItem = {
  id: number;
  price: number;
  description: string;
  image: string;
  active: boolean;
  season: string;
  brand: string;
  tread: string;
  stock: number;
  width: number;
  profile: number;
  diameter: number;
};

export const Product = function () {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const { cartItems, updateCartItems } = useCart();

  useEffect(() => {
    axios
      .get("https://mockup-api.marso.hu/products")
      .then((response) => {
        setProducts(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error("Hiba történt a termékek lekérése közben:", error);
      });
  }, []);

  const handleAddToCart = () => {
    const newCartItemCount = cartItems + 1;
    updateCartItems(newCartItemCount);
  };

  return (
    <div className="shop-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.description} />
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p>Ár: {product.price} Ft</p>
            <p>Készlet: {product.stock}</p>
            <p>
              Méretek: {product.width}/{product.profile} R{product.diameter}
            </p>
            <FontAwesomeIcon
              className="fa-shopping-cart"
              icon={faCartShopping}
              color="#000000"
              size="xl"
              onClick={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
