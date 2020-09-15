import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import RecognizeSpotify from "./Recognize.js";

$(document).ready(function () {
  $("#test-button").click(function () {
    let input = "https://audd.tech/example1.mp3";
    let data = RecognizeSpotify.getSong(input);
    $.getJSON("https://api.audd.io/?jsonp=?", data, function (result) {
      console.log(result.result);
    });
  });
});
