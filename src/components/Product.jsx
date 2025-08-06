import React from "react";
import "../index.css";
import glassesImg from "../assets/glasses.jpg";
import amazonImg from "../assets/amazon.jpg";

const Product = () => {
  return (
    <>
      <main className="Product">
        <div className="Content">
          <h1>Elevate Your Vision</h1>
          <p>
            Discover frames that blend fashion, comfort, and durability. Perfect
            for every face and every style.
          </p>

          <div className="Button">
            <button>Shop Now</button>
            <button>Category</button>
          </div>

          <div className="Shopping">
            <p>Also available on</p>
            <img src={amazonImg} alt="Amazon" width="100" />
          </div>
        </div>

        <div className="image">
          <img src={glassesImg} alt="Glasses" width="300" />
        </div>
      </main>
      <footer>
        <p>Designed by Adeen Asif © 2025 All rights reserved.</p>
      </footer>
    </>
  );
};

export default Product;
