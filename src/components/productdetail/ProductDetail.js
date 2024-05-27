import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  var footer = {
    minHeight: "100vh",
  };
  const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  useEffect(() => {
    fetch(`https://api.chec.io/v1/products/${id}`, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <div className="container pt-4" style={footer}>
      <h1>{product.name}</h1>
      <img src={product.image?.url} height={300} width={500} alt="" />
      <br></br>
      <h4>{product.price?.formatted_with_symbol}</h4>
      {product.description}
      <br></br>
      <Link to="/cart">
        <button className="btn btn-dark" onClick={() => addToCart(product.id)}>
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
