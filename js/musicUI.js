function renderMusic(data) {
  // reset our catalogue html
  $("#music-catalogue").html("");
  // need to parse data for the itunes api.
  data = JSON.parse(data);
  console.log(data);

  data.results.forEach((result) => {
    $("#music-catalogue").append(
      `<div class="song-div">
        <img src="${result.artworkUrl100}"></img>
        
        <div class="song-stuff">
          <p class=" artist "> ${result.artistName} </p>
          <p class=" track"> ${result.trackName} </p>
        </div>

        <audio controls src=" ${result.previewUrl}  "></audio>
      </div>
      `
    );
  });
}
// Remember to export variables or functions you need
export default renderMusic;
