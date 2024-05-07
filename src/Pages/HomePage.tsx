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

      </div>
      <div className="flex" style={{maxWidth:"98%"}}>
        <SideBar setFilteredProducts={setFilteredProducts}  />
        <ProductList filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      </div>
    </>
  );
};

export default HomePage;
