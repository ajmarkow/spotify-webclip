import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Convert from "./Recognize.js";

function showResults(obj){
  if (obj.spotify){
    $("#song-title").text(obj.title);

    if (obj.spotify.artists.length > 1) {
      let artistsArray = [];
      for (let i = 0; i < obj.spotify.artists.length; i++){
        artistsArray.push(obj.spotify.artists[i].name)
      }
      $("#artist").text(`By: ${artistsArray.join(", ")}`)
    } else {
      $("#artist").text(`By: ${obj.spotify.artists[0].name}`)
    }
    $("#album-cover").attr("src", obj.spotify.album.images[1].url)
    $("#preview").show();
    $("#preview").attr("src", obj.spotify.preview_url)
  } else {
    $("#song-title").text("Could not find Spotify data.");
  }
}

$(document).ready(function () {
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    let url = "https://teamweek1epicodus.s3-us-west-2.amazonaws.com/song-2.mp3"//$("input:file").val();
    Convert.getSong(url).then(function (response) {
      console.log(response.result)
      showResults(response.result)
    });
  });
});