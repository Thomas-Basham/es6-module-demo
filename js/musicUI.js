"use strict";
function getMusicData() {
  $.get("https://itunes.apple.com/search?term=beyonce", function (data) {
    data.results.forEach((result) => {
      $("#music-catalogue").append(
        `<div class="song-div">
          <p> ${result.artistName} </p>
          <p> ${result.trackName} </p>
        </div>
        `
      );
    });
  });
}

// Remember to export variables or functions you need
export default getMusicData;
