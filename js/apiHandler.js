"use strict";
import renderMusic from "./musicUI.js";

function getMusicData() {
  $.get("https://itunes.apple.com/search?term=beyonce", renderMusic);
}

export default getMusicData;
