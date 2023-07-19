import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { CartProvider } from "./components/cart/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
