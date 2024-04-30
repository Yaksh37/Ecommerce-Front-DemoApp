import React from "react";
import { Head } from "./Head.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  

  const handleDeleteUserData = () => {
    localStorage.removeItem("userData");
  }
  return (
    <header className="bg-light">
      <div className="header-content-top">
        <div className="content">
          <span>
            <i className="fas fa-phone-square-alt" /> (00)0000-0000
          </span>
          <span>
            <i className="fas fa-envelope-square" />
            email@email.com.br
          </span>
        </div>
      </div>
      <div className="container">
        <strong className="logo">
          <Link to="/" className="text-decoration-none text-primary"><i className="fas fa-heart" /></Link>
        </strong>
        <label className="open-search" htmlFor="open-search">
          <i className="fas fa-search" />
          <input
            className="input-open-search"
            id="open-search"
            type="checkbox"
            name="menu"
          />
          <div className="search">
            <button className="button-search">
              <i className="fas fa-search" />
            </button>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="input-search"
            />
          </div>
        </label>
        <nav className="nav-content">
          <ul className="nav-content-list">
            <li className="nav-content-item account-login">
              <label
                className="open-menu-login-account"
                htmlFor="open-menu-login-account"
              >
                <input
                  className="input-menu"
                  id="open-menu-login-account"
                  type="checkbox"
                  name="menu"
                />
                <i className="fas fa-user-circle" />
                <span className="login-text">
                  Hello, Sign in <strong>Create Account</strong>
                </span>{" "}
                <span className="item-arrow" />
                <ul className="login-list">
                {/* <li className="login-list-item">
                    <a href="/login">Login</a>
                  </li>
                  <li className="login-list-item">
                    <a href="/signup">Create account</a>
                  </li> */}
                  <li className="login-list-item">
                    <a href="" type="btn" onClick={handleDeleteUserData}>logout</a>
                  </li>
                </ul>
              </label>
            </li>
            <li className="nav-content-item">
              <a className="nav-content-link" href="#">
                <i className="fas fa-heart" />
              </a>
            </li>
            <li className="nav-content-item">
              <Link className="nav-content-link" to="/Cart">
                <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-container">
        <nav className="all-category-nav">
          <label className="open-menu-all" htmlFor="open-menu-all">
            <input
              className="input-menu-all"
              id="open-menu-all"
              type="checkbox"
              name="menu-open"
            />
            <span className="all-navigator d-lg-none d-md-flex d-sm-flex">
              <i className="fas fa-bars" /> <span>All category</span>{" "}
              <i className="fas fa-angle-down" />
              <i className="fas fa-angle-up" />
            </span>
            <ul className="all-category-list">
              <li className="all-category-list-item">
                
                  <Link to={`/`} className="all-category-list-link">
                  All Product
                  <i className="fas fa-angle-right" />
                  </Link>
              </li>
              <li className="all-category-list-item">
                
                  <Link to={`/SmartPhones`} className="all-category-list-link">
                  Smartphones
                  <i className="fas fa-angle-right" />
                  </Link>
              </li>

              <li className="all-category-list-item">
              <Link to={`/Laptops`} className="all-category-list-link">
                  Laptop & Tabs
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="all-category-list-item">
                <Link to={`Furniture`} className="all-category-list-link">
                  Furniture <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="all-category-list-item">
                <Link to={`/SkinCare`} className="all-category-list-link">
                  Skin Care
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="all-category-list-item">
                <Link to={`Perfumes`} className="all-category-list-link">
                  Perfumes
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="all-category-list-item">
                <Link to={`/Clothes`} className="all-category-list-link">
                  Clothes
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
              <li className="all-category-list-item">
                <Link to={`/HomeAppliances`} className="all-category-list-link">
                  Home Appliances
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </label>
        </nav>
        <nav className="featured-category d-lg-block d-md-none d-sm-none">
          <ul className="nav-row">
            <li className="nav-row-list">
              <Link to="/" className="nav-row-list-link">
                All Product
              </Link>
            </li>
            <li className="nav-row-list">
              <Link to="/SmartPhones" className="nav-row-list-link">
                Smartphones
              </Link>
            </li>
            <li className="nav-row-list">
              
              <Link to="/Laptops" className="nav-row-list-link">
                Laptop & Tabs
              </Link>
            </li>
            <li className="nav-row-list">
            <Link to="/Furniture" className="nav-row-list-link">
                furniture
              </Link>
            </li>
            <li className="nav-row-list">
              <Link to="/Perfumes" className="nav-row-list-link">
                Perfumes
              </Link>
            </li>
            <li className="nav-row-list">
              <Link to="/Clothes" className="nav-row-list-link">
                Clothes
              </Link>
            </li>
            <li className="nav-row-list">
              <Link to="/SkinCare" className="nav-row-list-link">
                Skin Care
              </Link>
            </li>
            <li className="nav-row-list">
            <Link to="/HomeAppliances" className="nav-row-list-link">
                Home Appliances
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
