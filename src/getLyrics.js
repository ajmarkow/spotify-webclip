export default class Lyric {
  static getLyric(input) {
    return fetch(
      `https://api.audd.io/findLyrics/?api_token=${process.env.AUDDAPIKEY}&q=${input}`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}







  