import React from "react";
import Category from "./Category";
import Gallery from "./Gallery";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <Category />
      <Gallery />
    </div>
  );
};

export default Content;
