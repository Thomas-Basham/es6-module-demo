import renderMusic from "./musicUI.js";

function getMusicData(term) {
  $.get(`https://itunes.apple.com/search?term=${term}`, renderMusic);
}

export default getMusicData;
