import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataCategories from "./Data";
import "../component/Details.css";
export default function Details() {
  // const [cateData, setCateData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});

  // TODO: read about useParam
  let { catname } = useParams();

  useEffect(() => {
    setSelectedCategory(DataCategories[catname]);
  }, [catname]);
  return (
    <div className="detailrelative">
      <div className="detail">
        <h2>{selectedCategory.title}</h2>

        <h3>{selectedCategory.description}</h3>
        <ul>
          {selectedCategory.songs &&
            selectedCategory.songs.map((song, index) => (
              <li key={index}>
                {song.title} - {song.artist}
                <div className="artiImage">
                  <img src={song.image} />
                  <audio controls>
                    <source src={song.music} type="audio/mpeg"></source>
                  </audio>
                </div>
              </li>
            ))}
        </ul>
        {/* 
      <h1>{console.log("arrrrrr", selectedCategory.songs)}</h1> */}

        {/* <ul>
       
        {songs.map((song) => (
          <li key={song.title}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul> */}
        {/* <h2>{selectedCategory.songs[0]}</h2> */}
      </div>
    </div>
  );
}
