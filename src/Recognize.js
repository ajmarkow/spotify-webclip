export default class RecognizeSpotify {
  static getSong(url) {
    var data = {
      api_token: process.env.API_KEY,
      url: url,
      return: "apple_music,spotify",
    };
    return data;
  }
}

//   static getSong(url) {
//     var data = {
//       'api_token': process.env.API_KEY,
//       'url': url,
//       'return': 'apple_music,spotify',
//     };
//     return data;
//   }
// }
