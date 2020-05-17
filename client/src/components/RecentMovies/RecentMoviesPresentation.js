import React from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

import "./recent-movies.scss";

export default function RecentMoviesPresentation({ list }) {
  return (
    <div style={{ border: "2px solid red" }}>
      <div>
        <ImageCard list={list} propsObj={propsObj} />
      </div>
    </div>
  );
}
