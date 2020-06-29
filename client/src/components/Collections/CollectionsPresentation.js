import React from "react";
import ImageCard from "common/ImageCard";
import { propsObj } from "services/constants";

const CollectionsPresentation = ({ list }) => {
  return (
    <div>
      <h1>Collections Page</h1>
      {/* <ImageCard usersCollection={usersCollection} /> */}
      <ImageCard list={list} propsObj={propsObj} />
    </div>
  );
};
export default CollectionsPresentation;
