import React from "react";
import "../css/Home.css";
import Banner from "../images/Banner.jpg";
import Product from "../pages/Product";
import Bag from "../images/Bag.png";
import Ipad from "../images/Ipad.png";
import Microwave from "../images/Microwave.jpeg";
import Speaker from "../images/Speaker.png";
import Book from "../images/Book.png";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src={Banner} alt="" className="home_image" />

          <div className="home_row">
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={5}
              image={Bag}
            />
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={4}
              image={Microwave}
            />
          </div>

          <div className="home_row">
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={2}
              image={Book}
            />
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={1}
              image={Speaker}
            />
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={4}
              image={Ipad}
            />
          </div>

          <div className="home_row">
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={2}
              image={Bag}
            />
            <Product
              id="12321341"
              title="Funlovin backpack for 13inch laptop"
              price={21.98}
              rating={3}
              image={Bag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
