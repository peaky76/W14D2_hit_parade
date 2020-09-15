import React, { Component } from "react";
import Song from "../components/Song";

class SongsContainer extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <div>THIS CONTAINS SONGS</div>
        <Song />
      </>
    );
  }
}

export default SongsContainer;
