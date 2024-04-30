import React from 'react'

export default function Mobile() {
  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={3}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://m.media-amazon.com/images/G/31/brandstore/iQOOnew/D120661770_1400x800_3._CB559653875_.jpg" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/tdhruvko/Stores/IPL/15thApril/D124266280_IN_WLD_IPL_Store_1242x600.jpg" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/SamsungM/M15/8thApril_Sale/RV/D124657878_1242X450_2.jpg" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.apple.com/v/iphone/home/bu/images/overview/essentials/magsafe__bfji5hb1mqsy_xlarge_2x.jpg" className="d-block w-100 img-fluid" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
