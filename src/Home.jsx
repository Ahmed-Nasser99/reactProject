import Axios from "axios";
import logo from "../src/assets/img/avataaars.svg";
import React, { useEffect, useState } from "react";

export default function Home() {
  let [newsList, showData] = useState([]);
  useEffect(() => {
    getNews();
  }, []);
  async function getNews() {
    let { data } = await Axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    showData(data.meals);
  }
  return (
    <>
      <header className="masthead bg-Home text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={logo} alt="" />

          <h1 className="masthead-heading text-uppercase mb-0">Start React</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    </>
  );
}
