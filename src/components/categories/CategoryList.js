import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  useEffect(() => {
    const fetchCategories = async () => {
      fetch("https://api.chec.io/v1/categories", {
        headers: getHeaders(),
      })
        .then((response) => response.json())
        .then((data) => setCategories(data.data))
        .catch((error) => console.error("Error fetching categories:", error));
    };
    fetchCategories();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-success text-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src=""></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`/category/${category.slug}/`}
                  className="text-white text-decoration-none"
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Category;
