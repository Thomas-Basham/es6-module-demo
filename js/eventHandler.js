import getMusicData from "./apiHandler.js";

// add our event handler
$("#music-form").on("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const query = event.target["song-query"].value;
  getMusicData(query);
}

export default handleFormSubmit;
