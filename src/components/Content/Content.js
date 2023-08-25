import React from "react";
import Category from "./Category/Category";
import "./Content.css";
import Gallery from "./Gallery/Gallery";

const Content = () => {
  return (
    <div className="content-container">
      <Category />
      <Gallery />
    </div>
  );
};

export default Content;
