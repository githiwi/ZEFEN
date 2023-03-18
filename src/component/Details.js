
import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import musicalGenre from "./Data";
import "../component/Details.css";
export default function Details() {
  
  const [selectedCategory, setSelectedCategory] = useState({});

  // TODO: read about useParam
  let { catname } = useParams();

  useEffect(() => {
    setSelectedCategory(musicalGenre[catname]);
  }, [catname]);
  return (
    <div className="detailrelative">
      <div className="detail">
        <h2>{selectedCategory.title}</h2>

        <p>{selectedCategory.description}</p>
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
       
      </div>
    </div>
  );
}
