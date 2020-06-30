import React, { Fragment } from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

//show synopsis onmouseIn or mouseHover

export default function OscarsPresentation(props) {
  const { list, oscarYear } = props;
  // console.log("oscarYear is", oscarYear);

  return (
    <Fragment>
      <h1
        style={{ textAlign: "center" }}
      >{`Oscar ${oscarYear} Nominations`}</h1>
      <ImageCard list={list} propsObj={propsObj} />
    </Fragment>
  );
}
