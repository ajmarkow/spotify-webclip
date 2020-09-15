import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import RecognizeSpotify from "./Recognize.js";

$(document).ready(function () {
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    let input = $("input:file").val();
    console.log(input);
    let data = RecognizeSpotify.getSong(input);
    console.log(data);
  });
});
