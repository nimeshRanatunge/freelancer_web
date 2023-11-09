import React, { useState, useEffect } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
const images = [
  "./img/asmix.png",
  "./img/man.png",
  "./img/kirix.png",
];

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6500); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the best <span>traditional foods</span> for your needs at{" "}
            <span>helarasaya.lk</span>
          </h1>
          <br/>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "kiribath"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Kewm (කැවුම්)</button>
            <button>Aasmi (ආස්මි)</button>
            <button>Kokis (කොකිස්)</button>
            <button>Idi aappa (ඉදි ආප්ප)</button>
          </div>
        </div>
        <div className="right">
          <div className="landing-page">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="image-transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
