import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "./ProductDetail.css"


const ProductDetail = ({ data }) => {
  const { productId } = useParams();
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const allProducts = data.flatMap((category) => category.product);
    const selectedProduct = allProducts.find(
      (product) => product.id === parseInt(params.id)
    );
    setProduct(selectedProduct);

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = existingCartItems.some(
      (item) => item.id === selectedProduct.id
    );
    setIsInCart(isInCart);
  }, [data, params.id]);

  const addToCartHandler = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setIsInCart(true);
    alert("Product added to cart!");
  };

  const removeFromCartHandler = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = existingCartItems.filter(
      (item) => item.id !== product.id
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setIsInCart(false);
  };

  return (
    <div>
      {product ? (
        <div className="card-wrapper p-5">
          <div className="card" style={{border:'none'}}>
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img 
                    style={{objectFit:'contain'}}
                    src={product.thumbnail}
                    alt="ProductImage"
                  /> 
                  <img
                    src={product.images[0]}
                    alt="ProductImage"
                                        style={{objectFit:'fix'}}
                  />
                  <img
                    src={product.images[1]}
                    alt="ProductImage"
                                        style={{objectFit:'fix'}}
                  />
                  <img
                    src={product.images[2]}
                    alt="ProductImage"
                                        style={{objectFit:'fix'}}
                  />
                  <img
                    src={product.images[3]}
                    alt="ProductImage"
                                        style={{objectFit:'fix'}}
                  />
                  <img
                    src={product.images[4]}
                    alt="ProductImage"
                                        style={{objectFit:'fix'}}
                  />
                </div>
              </div>
              <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id={1}>
                    <img
                      src={product.images[0]}
                      alt="ProductImage"
                                          style={{objectFit:'fix'}}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={2}>
                    <img
                      src={product.images[1]}
                      alt="ProductImage"
                                          style={{objectFit:'fix'}}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={3}>
                    <img
                      src={product.images[2]}
                      alt="ProductImage"
                                          style={{objectFit:'fix'}}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={4}>
                    <img
                      src={product.images[3]}
                      alt="ProductImage"
                                          style={{objectFit:'fix'}}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">{product.title}</h2>
              <div className="product-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>{product.rating}</span>
              </div>
              <div className="product-price">
                <p className="new-price">
                  Price: <span>${product.price}</span>
                </p>
              </div>
              <div className="product-detail">
                <h2>Description:</h2>
                <p>{product.description}</p>
                <ul>
                  <li>
                    brand <span>{product.brand}</span>
                  </li>
                  <li>
                    Stock: <span>{product.stock}</span>
                  </li>
                  <li>
                    Shipping Area: <span>All over the world</span>
                  </li>
                  <li>
                    Shipping Fee: <span>Free</span>
                  </li>
                </ul>
              </div>
              <div className="purchase-info">
                {/* <input type="number" min={0} defaultValue={1} /> */}

                {isInCart ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={removeFromCartHandler}
                  >
                    Remove from Cart <i className="fas fa-shopping-cart" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn"
                    onClick={addToCartHandler}
                  >
                    Add to Cart <i className="fas fa-shopping-cart" />
                  </button>
                )}
                <button type="button" className="btn">
                  Buy Now
                </button>
              </div>
              <div className="social-links ">
                <p className="mt-3">Share At:  &nbsp;</p>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;