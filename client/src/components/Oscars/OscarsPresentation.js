import React, { Fragment } from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

// export default function OscarsPresentation({ list }) {
//   return <ImageCard list={list} propsObj={propsObj} />;
// }

//show synopsis onmouseIn or mouseHover

export default function OscarsPresentation(props) {
  //   console.log(props);
  const { list, oscarYear } = props;

  return (
    <Fragment>
      <h1
        style={{ textAlign: "center" }}
      >{`Oscar ${oscarYear} Nominations`}</h1>
      <ImageCard list={list} propsObj={propsObj} />
    </Fragment>
  );
}
