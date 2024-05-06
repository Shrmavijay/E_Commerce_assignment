import { useState } from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
interface HomePageProps{
  isLogin: boolean;
  setIsLogin: any;
}
const HomePage:React.FC<HomePageProps> = ({isLogin, setIsLogin}) => {
  const [filteredProducts, setFilteredProducts] = useState<any>(null);
  return (
    <>
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin} setFilteredProducts={setFilteredProducts} />      <div
        style={{
          background: "black",
          textAlign: "center",
          color: "white",
          fontSize: "12px",
          height: "24px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Free shipping for orders above $299
      </div>
      <div className="sm:block hidden">
        {/* <Form className="my-3 d-flex justify-center search-box overflow-hidden">
        <Form.Control
          type="search"
          placeholder="Search for different products and brands"
          className="search-input"
          aria-label="Search"
        />
        <div className="search-icon">
          <GoSearch color="white" />
        </div>
      </Form> */}
      </div>
      <div className="flex">
        <SideBar setFilteredProducts={setFilteredProducts}  />
        {/* <RegisterForm/> */}
        <ProductList filteredProducts={filteredProducts}/>
      </div>
    </>
  );
};

export default HomePage;
