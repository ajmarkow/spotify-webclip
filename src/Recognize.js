// import $ from "jquery";

export default class RecognizeSpotify {
  static getSong(url) {
    let apiurl = `https://api.audd.io/recognize?api_token=${process.env.AUDDAPIKEY}&url=${url}`;
    let data = {
      api_token: process.env.AUDDAPIKEY,
      file: url,
      return: "apple_music,spotify",
    };
    $.post("https://api.audd.io", data, function (response) {
      let result = response;
      return result;
    });
  }
}
