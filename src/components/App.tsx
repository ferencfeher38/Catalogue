import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import "../styles/App.scss";
import { Footer } from "./layout/Footer";
import { Navigation } from "./layout/Navigation";
import { ShopPage } from "../pages/ShopPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/shop" element={<ShopPage></ShopPage>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/cart" element={<CartPage></CartPage>} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
