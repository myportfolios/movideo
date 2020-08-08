import React from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

const CollectionsPresentation = ({ list }) => {
  return (
    <div>
      <h1 className="collections-title">Collections Page</h1>
      {/* <ImageCard usersCollection={usersCollection} /> */}
      {/* <span className="image-card-container"> */}
      <ImageCard list={list} propsObj={propsObj} />
      {/* </span> */}
    </div>
  );
};
export default CollectionsPresentation;
