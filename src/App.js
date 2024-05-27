import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import { Route, Routes, useParams } from "react-router-dom";
import CategoryList from "./components/categories/CategoryList";
import ProductDetail from "./components/productdetail/ProductDetail";
import Cart from "./components/cart/Cart";
import { useState } from "react";

import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import Products from "./components/productList/Products";
function App() {
  const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  getHeaders();
  const [addCart, setAddCart] = useState({});
  const addToCart = async (productId) => {
    const cartId = "cart_kpnNwAWXE95mXB";
    fetch(`https://api.chec.io/v1/carts/${cartId}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        id: productId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added to cart:", data.line_items);
        setAddCart(data.line_items);
      })
      .catch((error) => console.error("Error adding product to cart:", error));
  };
  const [searchText, setSearchText] = useState("");
  function onSearchChange(text) {
    console.log(text);
    setSearchText(text);
  }
  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <CategoryList />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" component={<CategoryList />} />
        <Route path="/product" element={<Products searchText={searchText} />} />
        <Route
          path="/category/:categorySlug"
          element={<ProductList searchText={searchText} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart setAddCart={setAddCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
