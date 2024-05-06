import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import Slider from "./Slider";
interface SideBarProps {
  setFilteredProducts: any;
}
const SideBar: React.FC<SideBarProps> = ({ setFilteredProducts }) => {
  // const [value, setValue] = useState(0);
  const [price, setPrice] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [showMore, setshowMore] = useState<boolean>(false);
  const [showMorecategory, setshowMorecategory] = useState<boolean>(false);
  const products = useAppSelector((state) => state.data.products);

  const [getActive, setGetActive] = useState<String | undefined>();

  const getCategories = () => {
    const categoryResult = products.map((product) => {
      return product.category;
    });
    const category = new Set(categoryResult);

    console.log("result: ", category);
    return Array.from(category);
  };

  const category = getCategories();

  const getBrands = () => {
    const brandResult = products.map((product) => {
      return product.brand;
    });
    const brand = new Set(brandResult);
    return Array.from(brand);
  };

  const brands = getBrands();
  // const allProducts = [
  //   "Sneakers",
  //   "Bags",
  //   "Electronics",
  //   "Smartphones",
  //   "Kitchen and Cooking",
  //   "Jewelers",
  // ];
  // const brands = ["New Balance", "Adidas", "Puma", "Fila", "Nissan", "Comfort"];
  const stores = [
    "Orea",
    "Femi Waers",
    "AY Kicks",
    "Bhubaneswar BootWala",
    "Duke Boots",
    "Duke Boots",
  ];
  // const colors = ["black"];

  const handleFilterCategory = (e: any) => {
    const value = e.target.innerHTML;
    console.log("activeIndex:", value);
    setGetActive(value);
    const filtered = products.filter((product) => {
      console.log(value);
      return product.category == value;
    });
    setFilteredProducts(filtered);
  };

  const handleFilterBrands = (e: any) => {
    const value = e.target.innerHTML;
    // console.log("activeIndex:", index);
    // setGetActive(index);
    setGetActive(value);
    const filtered = products.filter((product) => {
      console.log("selected brand", value);
      return product.brand == value;
    });
    console.log("filtered by brand: ", filtered);
    setFilteredProducts(filtered);
  };

  const getPriceRange = () => {
    const getPrices = products
      ?.map((product) => {
        if (product.price !== undefined && product.price !== null) {
          return product.price;
        }
      })
      .filter((price) => price !== undefined && price !== null);
    console.log("prices: ", getPrices);
    // let minVal = Math.min(...getPrices);
    let maxVal = Math.max(...getPrices);

    // setMin(minVal);
    setMax(maxVal);
  };

  const handleChange = (e:any) => {
    const selectedPrice = parseFloat(e.target.value); // Convert the value to a number
    setPrice(selectedPrice);

    const filteredProducts = products.filter(product => {
        return product.price <= selectedPrice;
    });

    setFilteredProducts(filteredProducts);
};

  useEffect(() => {
    getPriceRange();
  });

  return (
    <div className="scrollable hidden sm:block">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "43px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: "0.9rem" }}>ALL PRODUCTS</span>
          {category
            .filter((item, index) => showMore || index < 6)
            .map((productType, index) => {
              return (
                <div key={index}>
                  <span
                    className="side-bar"
                    style={
                      // index === getActive
                      productType === getActive
                        ? { color: "#1DC801", fontSize: "0.8rem" }
                        : { color: "#B7B7B7", fontSize: "0.8rem" }
                    }
                    onClick={(e) => handleFilterCategory(e)}
                  >
                    {productType}
                  </span>
                </div>
              );
            })}
        </div>
        <span
          className="side-bar"
          style={{ color: "#1DC801", fontSize: "0.7rem" }}
          onClick={() => setshowMorecategory(!showMorecategory)}
        >
          SHOW {showMorecategory ? "LESS" : "MORE"}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: "0.9rem" }}>BRANDS</span>
          {brands
            .filter((item, index) => showMore || index < 6)
            .map((brand, index) => {
              return (
                <span
                  key={index}
                  className="side-bar"
                  style={
                    // index === getActive
                    brand === getActive
                      ? { color: "#1DC801", fontSize: "0.8rem" }
                      : { color: "#B7B7B7", fontSize: "0.8rem" }
                  }
                  onClick={(e) => handleFilterBrands(e)}
                >
                  {brand}
                </span>
              );
            })}
        </div>
        <span
          className="side-bar"
          style={{ color: "#1DC801", fontSize: "0.7rem" }}
          onClick={() => setshowMore(!showMore)}
        >
          SHOW {showMore ? "LESS" : "MORE"}
        </span>

        {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: "0.9rem" }}>STORES</span>
          {stores.map((store, index) => {
            return (
              <span
                key={index}
                style={
                  index === 0
                    ? { color: "#1DC801", fontSize: "0.8rem" }
                    : { color: "#B7B7B7", fontSize: "0.8rem" }
                }
              >
                {store}
              </span>
            );
          })}
        </div>
        <span style={{ color: "#1DC801", fontSize: "0.7rem" }}>SHOW MORE</span> */}
        <div>
          <span style={{ fontSize: "0.9rem" }}>PRICE</span>
          <Slider
            min={min}
            max={max}
            price={price}
            handleChange={handleChange}
          />
          <div
            className="flex justify-between"
            style={{ fontSize: "0.8rem", fontWeight: 500 }}
          >
            <span>${price}</span>
            <span>${max}</span>
          </div>
        </div>
        <div>
          <span style={{ fontSize: "0.9rem" }}>COLORS</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
