import React from "react";
import { BASE_URL, IMAGE_POSTER_SIZES } from "services/api";
import "./card.scss";

export default function ImageCard({ list, propsObj }) {
  const btnText = propsObj.btnText;
  return (
    <div className="recent-movies-container">
      {renderImageCardJSX(list, btnText)}
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
          <h4 className="movie-card__title">{item.title}</h4>
          <h4 className="movie-card__rating">{item.vote_average}</h4>
          <button className="movie-card__save-btn">{btnText}</button>
        </div>
      );
    });
  return jsx;
}
