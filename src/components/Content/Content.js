import React from "react";
import Category from "./Category";
import Gallery from "./Gallery";

const Content = () => {
  return (
    <div
      style={{
        margin: "0 150px",
        marginTop: "-100px",
        background: "white",
        padding: "10px 20px"
      }}
    >
      <Category />
      <Gallery />
    </div>
  );
};

export default Content;
