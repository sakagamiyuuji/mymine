import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";
import "../css/explore.css";

function Explore() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: "45331527-e6d9a717ba3bbbc34048f79b7",
          q: "",
          image_type: "photo",
          per_page: 10,
          page: page,
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error("Error fetching data from Pixabay API", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="container">
      <h1>Explore</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <LazyLoad key={image.id} height={200} offset={100} once>
            <div>
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text">{image.tags}</p>
              </div>
            </div>
          </LazyLoad>
        ))}
      </Masonry>
      <div ref={ref} className="loading">
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Explore;
