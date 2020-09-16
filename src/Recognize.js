// import $ from "jquery";

export default class Convert {
  static getSong(url) {
    return fetch(
      `https://api.audd.io/recognize?api_token=${process.env.AUDDAPIKEY}&url=${url}&return=spotify`
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

// export default class RecognizeSpotify {
//   static getSong(url) {
//     let url = `https://api.audd.io/recognize?api_token=${process.env.AUDDAPIKEY}&url=${url}`;
//     let data = {
//       api_token: process.env.AUDDAPIKEY,
//       file: url,
//       return: "apple_music,spotify",
//     };

// $.post("https://api.audd.io", data, function (response) {
//   let result = response;
//   return result;
// });
//   }
// }

// Example async function

// export default class RecognizeSpotify{
//   static async getSong() {
//     try {
//       const response = await fetch(`https://api.audd.io/recognize?api_token=${process.env.AUDDAPIKEY}&url=${url}`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }
