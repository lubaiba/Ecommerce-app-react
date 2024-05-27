import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  var footer = {
    minHeight: "100vh",
  };
  const [products, setProducts] = useState([]);
  const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  useEffect(() => {
    const fetchProductList = async () => {
      fetch(`https://api.chec.io/v1/products`, {
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => setProducts(data.data))
        .catch((error) => console.error("Error fetching categories:", error));
    };
    fetchProductList();
  }, []);
  const searchText = props.searchText;
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className="container" style={footer}>
        <div className="row gap-4 pt-3">
          {filteredProducts.map((product) => (
            <div
              className="col d-flex flex-wrap flex-column border border-subtle border-2 text-center "
              key={product.id}
            >
              <Link
                to={`/products/${product.id}`}
                className="text-decoration-none text-black pt-3"
              >
                <h3>{product.name}</h3>
              </Link>
              <img
                src={product.image?.url}
                height={300}
                width={200}
                alt=""
                className="rounded mx-auto d-block"
              />
              <h4>{product.price.formatted_with_symbol}</h4>
              {product.description}
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};
export default Products;
