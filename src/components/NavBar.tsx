import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GoSearch } from "react-icons/go";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  isLogin: boolean;
  setIsLogin: any;
  setFilteredProducts: any
}
const NavBar: React.FC<NavBarProps> = ({ isLogin, setIsLogin, setFilteredProducts }) => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.data.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [Products,setProducts] = useState()
  let query:string
  const handleSearchInputChange = (event: { target: { value: any } }) => {
     query = event.target.value;
    console.log(query, "Query parameter");
    handleSetCategory(event)
    setSearchQuery(query);
  };
  // const [category, setCategory] = useState<String[]>([]);
  
  const getCategories = () => {
    const result = products.map((product) => {
      return product.category;
    });
    const category = new Set(result);
    // console.log("result: ", category);
    return Array.from(category);
  };

  const category = getCategories();

  const handleSetCategory = (e: any) => {
    const value = e.target.innerHTML || e.target.value;
    console.log("category: ", value)
    const filtered = products.filter((product) => {
      return product.category.includes(value)
    });
    console.log(filtered,"filterd")
    setFilteredProducts(filtered);
  };

  const fetchProducts = async ({ query }: any) => {
    // try {
    //   let response;
    //   if (query.length > 0) {
    //     response = await fetch(
    //       `https://dummyjson.com/products/category/${query}`
    //     );
    //   } else {
    //     response = await fetch(`https://dummyjson.com/products`);
    //   }
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     console.log("data : ", data.products);
    //     setProducts(data.products);
    //   } else {
    //     console.error("Failed to fetch products:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    // }
  };
  useEffect(() => {
    fetchProducts(`/${query}`);
  }, []);
  console.log(Products,"Products");
  return (
    <>
      <Navbar expand="lg" className="nav-container">
        <Container fluid>
          <Navbar.Brand className="logo">Grab a shoe</Navbar.Brand>
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
                      <NavDropdown.Item
                        href="#action3"
                        onClick={(e) => handleSetCategory(e)}
                      >
                        {category}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
                {/* <NavDropdown.Item href="#action4">women's </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#action2" className="nav-links-item">
                Cart
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