import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Convert from "./Recognize.js";

function showResults(obj){
  $("#song-title").text(obj.title);
  $("#artist").text(`By: ${obj.spotify.artists[0].name}`)
}

$(document).ready(function () {
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    let url = "https://audd.tech/example1.mp3"//$("input:file").val();
    Convert.getSong(url).then(function (response) {
      console.log(response.result)
      showResults(response.result)
    });
  });
});