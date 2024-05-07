import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import RatingReview from "./starRating";
import { NavDropdown } from "react-bootstrap";
import { getSelectProducts } from "../app/Slice/productsSlice";
import SmilyIcon from "../utils/SmilyIcon";
interface ProductListProps {
  filteredProducts: any[];
  setFilteredProducts: any;
}
const ProductList: React.FC<ProductListProps> = ({
  filteredProducts,
  setFilteredProducts,
}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.data.products);

  const handleSort = (e: any) => {
    const value = e;
    let dataToSort =
      filteredProducts || JSON.parse(JSON.stringify([...products])) || [];

    if (dataToSort?.length > 0) {
      if (value == "price") {
        dataToSort.sort((a, b) => a.price - b.price);
      } else {
        dataToSort.sort((a, b) => a.rating - b.rating);
      }
    }
    setFilteredProducts(dataToSort);
  };
  const handleProductClick = (id: any) => {
    let product_id = parseInt(id);
    dispatch(getSelectProducts(product_id));
  };
  return (
    <>
      <section className="cards w-full p-2">
        <div className="flex justify-between mt-2 mb-3 mr-2">
          <span style={{ fontSize: "0.9", fontWeight: 500 }}>
            {`FOUND: `}
            <span
              style={{
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {`  ${filteredProducts?.length || products.length} Products`}
            </span>
          </span>
          <div className="flex">
            <span>Sort By:</span>
            {(filteredProducts?.length || products) && (
              <NavDropdown
                title="Price"
                id="navbarScrollingDropdown"
                className="nav-links-item"
              >
                <NavDropdown.Item onClick={() => handleSort("price")}>
                  Price
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleSort("pop")}>
                  Popularity
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 scrollable-card-list">
            {filteredProducts && filteredProducts.length > 0
              ? filteredProducts?.map((item, index) => (
                  <a
                    key={index}
                    href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleProductClick(item.id)}
                  >
                    <div className="">
                      <img
                        src={item.thumbnail}
                        alt="face cream image"
                        className="aspect-square"
                        style={{ width: "100%", height: "188" }}
                      />
                    </div>
                    <div className="flex justify-between p-1">
                      <div className="px-1 ">
                        <div
                          className=" tracking-tight text-gray-900 dark:text-white mb-0"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.title}
                        </div>
                        <span
                          className=" font-bold text-gray-900 dark:text-white"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          ${item.price}
                        </span>

                        <div className="flex items-center">
                          <div className="flex items-center space-x-1 w-32 rtl:space-x-reverse">
                            <RatingReview rating={item.rating} />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-evenly items-center	 flex-col">
                        <SmilyIcon />
                        <span
                          style={{
                            color: "black",
                            fontWeight: 500,
                            fontSize: "0.9rem",
                          }}
                        >
                          {item.rating} Rating
                        </span>
                      </div>
                    </div>
                  </a>
                ))
              : products &&
                products?.map((item, index) => (
                  <a
                    key={index}
                    href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleProductClick(item.id)}
                  >
                    <div className="">
                      <img
                        src={item.thumbnail}
                        alt="face cream image"
                        className="aspect-square"
                        style={{ width: "100%", height: "188" }}
                      />
                    </div>
                    <div className="flex justify-between p-1">
                      <div className="px-1 ">
                        <div
                          className=" tracking-tight text-gray-900 dark:text-white mb-0"
                          style={{
                            fontSize: "0.9rem",
                            // marginTop: "0.6rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.title}
                        </div>
                        <span
                          className=" font-bold text-gray-900 dark:text-white"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          ${item.price}
                        </span>

                        <div className="flex items-center">
                          <div className="flex items-center space-x-1 w-32 rtl:space-x-reverse">
                            <RatingReview rating={item.rating} />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-evenly items-center	 flex-col">
                        <SmilyIcon />
                        <span
                          style={{
                            color: "black",
                            fontWeight: 500,
                            fontSize: "0.9rem",
                          }}
                        >
                          {item.rating} Rating
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
