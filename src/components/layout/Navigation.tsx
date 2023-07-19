import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/layout/Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../cart/CartContext";

export const Navigation = function () {
  const { cartItems } = useCart();

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="marso-logo"
            src="https://www.marso.hu/theme/marso/assets/images/marso-logo-horizontal.svg"
            alt="marso-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-grow-1 justify-content-evenly">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                color="#ffffff"
                size="xl"
              />
              {cartItems > 0 && <span>({cartItems})</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
