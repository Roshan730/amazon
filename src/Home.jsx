import React from "react";
import "./Home.css";
import Product from "./Product";
import Data from "./Data";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Consumables/AugART/Headers/PC_rec_pantry._SL1280_FMpng_.png"
          }
          alt=""
        />
        <div className="home__row">
          {Data.map((value) => {
            return (
              <Product
                key={value.id}
                image={value.image}
                title={value.title}
                price={value.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
