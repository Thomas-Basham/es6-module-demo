"use strict";

function renderMusic(data) {
  // need to parse data for the itunes api.
  data = JSON.parse(data);
  console.log(data);

  data.results.forEach((result) => {
    $("#music-catalogue").append(
      `<div class="song-div">
        <p class="pill artist "> ${result.artistName} </p>
        <p class="pill track"> ${result.trackName} </p>
      </div>
      `
    );
  });
}
// Remember to export variables or functions you need
export default renderMusic;
