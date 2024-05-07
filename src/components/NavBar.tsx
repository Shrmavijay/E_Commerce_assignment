import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GoSearch } from "react-icons/go";
import React, {  useState } from "react";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  isLogin: boolean;
  setIsLogin: any;
  setFilteredProducts: any;
}
const NavBar: React.FC<NavBarProps> = ({
  isLogin,
  setIsLogin,
  setFilteredProducts,
}) => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.data.products);
  const cartproduts = useAppSelector((state) => state.data.cartproduts);

  const [searchQuery, setSearchQuery] = useState("");

  let query: string;

  const handleSearchInputChange = (event: { target: { value: any } }) => {
    query = event.target.value;
    console.log(query, "Query parameter");
    handleSetCategory(event);
    setSearchQuery(query);
  };

  const getCategories = () => {
    const result = products?.map((product) => {
      return product.category;
    });
    const category = new Set(result);
    return Array.from(category);
  };

  const category = getCategories();

  const handleSetCategory = (e: any) => {
    const value = e.target.innerHTML || e.target.value;
    console.log("category: ", value);
    const filtered = products.filter((product) => {
      return product.category.includes(value)
    });
    console.log(filtered, "filterd");
    setFilteredProducts(filtered);
  };
  return (
    <>
      <Navbar expand="lg" className="nav-container">
        <Container fluid>
          <Navbar.Brand className="logo" href="/" style={{ cursor: "pointer" }}>
            Grab a shoe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex justify-between search-box overflow-hidden">
              <Form.Control
                type="search"
                placeholder="Search for different products and brands"
                className="search-input"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <div className="search-icon">
                <GoSearch color="white" />
              </div>
            </Form>
            <Nav
              className="w-13 nav-links"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
                marginLeft: "118px",
              }}
              navbarScroll
            >
              <NavDropdown
                title="Category"
                id="navbarScrollingDropdown"
                className="nav-links-item"
              >
                {category?.map((category, index) => {
                  return (
                    <div key={index}>
                      <NavDropdown.Item onClick={(e) => handleSetCategory(e)}>
                        {category}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>
              <Nav.Link className="nav-links-item">
                {cartproduts.length > 0 ? (
                  <span className="Cart-icon">
                    <span className="message-count">{cartproduts.length}</span>
                    Cart
                  </span>
                ) : (
                  <span className="Cart-icon">Cart</span>
                )}
              </Nav.Link>

              {!isLogin ? (
                <>
                  <Nav.Link
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer" }}
                    className="nav-links-item"
                  >
                    Login
                  </Nav.Link>
                  <Button
                    style={{
                      background: "#1DC801",
                      borderRadius: "7px",
                      border: "none",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button
                  style={{
                    background: "#1DC801",
                    borderRadius: "7px",
                    border: "none",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    setIsLogin(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
