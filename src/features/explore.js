// features/explore.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTrail, animated } from "@react-spring/web";
import "../css/explore.css"; // Adjusted import path

function Explore() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: "45331527-e6d9a717ba3bbbc34048f79b7",
            q: "nature",
            image_type: "photo",
            per_page: 10,
          },
        });
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching data from Pixabay API", error);
      }
    };

    fetchImages();
  }, []);

  const trail = useTrail(images.length, {
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  return (
    <div className="container">
      <h1>Explore</h1>
      <div className="row">
        {trail.map((animation, index) => (
          <animated.div
            style={animation}
            className="col-md-4"
            key={images[index].id}
          >
            <div className="card mb-4 shadow-sm">
              <img
                src={images[index].webformatURL}
                className="card-img-top"
                alt={images[index].tags}
              />
              <div className="card-body">
                <p className="card-text">{images[index].tags}</p>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
