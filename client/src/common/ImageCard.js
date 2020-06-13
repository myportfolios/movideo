import React from "react";
import { BASE_URL, IMAGE_POSTER_SIZES } from "services/api";
import "./card.scss";

export default function ImageCard({ list, propsObj }) {
  const btnText = propsObj.btnText;
  return (
    <div className="recent-movies-container">
      {renderImageCardJSX(list || [], btnText || {})}
    </div>
  );
}

function renderImageCardJSX(arrayToMap, btnText) {
  const jsx =
    arrayToMap &&
    arrayToMap.map(item => {
      let posterPath = `${BASE_URL}${IMAGE_POSTER_SIZES}${item.poster_path}`;
      return (
        <div key={item.id} className="movie-card">
          <img
            src={posterPath}
            alt="movie poster"
            className="movie-card_poster"
          />
          <div className="movie-card_other-items">
            <h4 className="movie-card_other-items__title">{item.title}</h4>
            <h4 className="movie-card_other-items__rating">
              {item.vote_average}
            </h4>
            {/* <button className="movie-card_other-items__save-btn">
              {btnText}
            </button> */}
            <a href="#" className="movie-card_other-items__save-btn">
              Save To Collections
            </a>
          </div>
        </div>
      );
    });
  return jsx;
}
