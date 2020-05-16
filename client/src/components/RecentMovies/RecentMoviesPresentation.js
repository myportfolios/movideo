import React from "react";
import ImageCard from "common/ImageCard";

import "./recent-movies.scss";

export default function RecentMoviesPresentation({ list }) {
  //   console.log(list);
  const propsObj = {
    btnText: "Add To My Collections"
  };

  return (
    <div
      style={{ border: "2px solid red" }}
      //   className="recent-movies-container"
    >
      <div>
        <ImageCard list={list} propsObj={propsObj} />
      </div>
    </div>
  );
}
