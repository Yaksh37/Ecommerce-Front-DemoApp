import React from "react";

export default function Section1() {
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
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-18042024-MainBannerDailyChanging-Z1-P1-megasummersale-5080.gif" className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25042024-MainBannerDailyChanging-Z1-P4-puma-reebok-min50.jpg" className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25042024-MainBannerDailyChanging-Z1-P5-Lee-Wrangler-Min40+Extra750.jpg" className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25042024-MainBannerDailyChanging-Z1-P3-Campussutra-Thedrystate-Min60.jpg" className="d-block w-100 img-fluid" alt="..." />
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
  );
}
