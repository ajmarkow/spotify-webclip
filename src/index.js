import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Convert from "./Recognize.js";
import getFilestackURL from "./fileupload.js";
import getDuration from "./getDuration.js";
import Lyric from "./getLyrics.js";

function showResults(obj) {
  if (obj.spotify) {
    let releaseDate = obj.release_date.split("-");
    let isExplicit = obj.spotify.explicit ? "Yes" : "No";
    let artistsArray = [];
    $("#song-title").text(obj.title);
    if (obj.spotify.artists.length > 1) {
      for (let i = 0; i < obj.spotify.artists.length; i++) {
        artistsArray.push(obj.spotify.artists[i].name);
      }
      $("#artist").text(`By: ${artistsArray.join(", ")}`);
    } else {
      $("#artist").text(`By: ${obj.spotify.artists[0].name}`);
    }
    $("#album-cover").attr("src", obj.spotify.album.images[1].url);
    $("#output-cont").show();
    $("#preview").attr("src", obj.spotify.preview_url);
    $("#album-name").text(obj.spotify.album.name);
    $("#album-type").text(obj.spotify.album.album_type);
    $("#duration").text(
      `${getDuration(obj.spotify.duration_ms)[0]}:${
        getDuration(obj.spotify.duration_ms)[1]
      }`
    );
    $("#popularity").text(`${obj.spotify.popularity}/100`);
    $("#explicit").text(isExplicit);
    $("#release-date").text(
      `${releaseDate[1]}/${releaseDate[2]}/${releaseDate[0]}`
    );
    $("#label").text(obj.label);
    $("#spotify-link").attr("href", obj.spotify.external_urls.spotify);
  } else {
    $("#song-title").text("Could not find Spotify data.");
  }
}

function showLyrics(obj) {
  $("#lyrics-title").text(obj[0].full_title);
  let lyrics = obj[0].lyrics.replace(/\r?\n/g, "<br />");
  $("#lyrics").html(lyrics);
  console.log(lyrics);
}

$(document).ready(function () {
  // eslint-disable-next-line no-undef
  let client = filestack.init(process.env.FILESTACKAPIKEY);
  const options = {
    displayMode: "inline",
    container: "#inline",
    accept: "audio/*",
    fromSources: ["local_file_system"],
    uploadInBackground: false,
    onUploadDone: uploadEvents,
  };

  client.picker(options).open();
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    let url = getFilestackURL();

    Convert.getSong(url).then(function (response) {
      console.log(response.result);
      showResults(response.result);
    });
  });

  $("#lyrics-submit").click(function (event) {
    event.preventDefault();
    let snippet = $("#lyrics-input").val();
    Lyric.getLyric(snippet.replace(/\s/g, "-")).then(function (response) {
      console.log(response.result);
      showLyrics(response.result);
    });
  });
});

function uploadEvents(result) {
  let url = getFilestackURL(result);
  Convert.getSong(url).then(function (response) {
    console.log(response.result);
    $("#resultsshowhere").hide();
    showResults(response.result);
  });
}
