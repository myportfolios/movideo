import React from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

export default function OscarsPresentation({ list }) {
  return <ImageCard list={list} propsObj={propsObj} />;
}
