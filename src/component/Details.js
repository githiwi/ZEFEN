import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataCategories from "./Data";

export default function Details() {
  // const [cateData, setCateData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  // TODO: read about useParam
let {catname}= useParams()
  // const handleCategoryClick = (gener) => {
  //   setSelectedCategory(DataCategories[gener]);
  // };
 useEffect(()=>{
  setSelectedCategory(DataCategories[catname])
 },[catname])
  return (
    <div>
      <p>{selectedCategory.title}</p>
      <p>{selectedCategory.description}</p>
    </div>
  );
}
