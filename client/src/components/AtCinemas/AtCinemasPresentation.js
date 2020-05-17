import React from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

export default function AtCinemasPresentation({ list }) {
  return (
    <div>
      <ImageCard list={list} propsObj={propsObj} />
    </div>
  );
}
