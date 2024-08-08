import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/home.css";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: "45331527-e6d9a717ba3bbbc34048f79b7",
            q: "",
            image_type: "photo",
            per_page: 20,
          },
        });
        setData(response.data.hits);
      } catch (error) {
        console.error("Error fetching data from Pixabay API", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Home</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.tags}</p>
            <img
              src={item.webformatURL}
              alt={item.tags}
              className="img-fluid"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
