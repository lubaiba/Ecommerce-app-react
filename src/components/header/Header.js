import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/shopping-cart.png';
import logoCart from '../../assets/images/L-CART.png';
function Header(props) {
  const onSearchChange=($e)=>{
    props.onSearchChange($e.target.value)
  }
  const [logoUrl,setLogoUrl]=useState([]);
    useEffect(()=>{
        fetch('https://api.chec.io/v1/merchants',{
          headers:{
            'X-Authorization':'pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a'
          }
        })
        .then(response => response.json())
        .then(data =>{
        if (data?.logo) {
          setLogoUrl(data.logo?.url);
        }
      })
        .catch(error => console.error('Error fetching merchant:', error));
    },[]);
    
    return (

        <nav className="navbar navbar-expand-lg bg-dark text-white" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logoCart} alt="merchant" width={100} height={50}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-md-4" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About Us</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink to="/product" className="nav-link">Products</NavLink>
        </li>
      </ul>
      <div className="input-group mb-1 col-md-4" style={{width:"500px"}}>
  <button className="btn btn-outline-secondary dropdown-toggle bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
    <li><a className="dropdown-item" href="#">Toys & Games</a></li>
    <li><a className="dropdown-item" href="#">Grocery</a></li>
    <li><a className="dropdown-item" href="#">Mobiles</a></li>
    <li><a className="dropdown-item" href="#">Men's fashion</a></li>
    <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
    <li><a className="dropdown-item" href="#">Electronics</a></li>
  </ul>
  <input type="text" className="form-control bg-white" aria-label="Text input with dropdown button" onChange={onSearchChange}/>
  <button className="btn btn-outline-success bg-light" type="submit">Search</button>
</div>
<div className="col-md-4">
  <ul className="navbar-nav">
  <li className="nav-item">
<NavLink to="/cart" className="nav-link mb-2 ps-3"><img src={logo}/></NavLink></li>
<li className="nav-item">
<NavLink to="/" className="nav-link mb-2 ps-3">Become a Seller</NavLink></li>
<li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </li>
</ul>
</div>
     {/*  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

     );
}

export default Header;