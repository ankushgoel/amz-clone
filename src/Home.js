import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="amazon-banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            key={1}
            id="6776447"
            title="The Lean Startup"
            price={9.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            key={2}
            id="3785787"
            title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)"
            price={119.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Ki5S4HEoL._AC_US160_FMwebp_QL70_.jpg"
            rating={4}
          />

          <Product
            key={3}
            id="4652862"
            title="Realme Buds 2 with Mic for Android Smartphones (Black)"
            price={10.66}
            image="https://images-eu.ssl-images-amazon.com/images/I/313TdpJEUwL._AC_US160_FMwebp_QL70_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            key={4}
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1099.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={5}
            id="2864873"
            title="AmazonBasics Microfiber 3-Piece Quilt/Duvet/Comforter Cover Set - King, Olive - with 2 pillow covers"
            price={10.66}
            image="https://m.media-amazon.com/images/I/81404D2QzDL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            key={6}
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={543.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
