import React from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import pixabay from "../api/pixabay";

class Explore extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await pixabay.get("/", {
      params: { q: term }, // Search query parameter for Pixabay
    });

    this.setState({ images: response.data.hits });
    console.log(response.data.hits); // Logs the array of image objects
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Explore;
