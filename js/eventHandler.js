import getMusicData from "./apiHandler.js";

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const query = event.target["song-query"].value;
  getMusicData(query);
}

// add our event handler
$("#music-form").on("submit", handleFormSubmit);

export default handleFormSubmit;
