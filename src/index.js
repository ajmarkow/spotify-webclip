import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Convert from "./Recognize.js";
import base64Encoder from "./toBase64.js";
const fileInput = $("#fileupload").val();

$(document).ready(function () {
  // eslint-disable-next-line no-undef
  let client = filestack.init(process.env.FILESTACKAPIKEY);
  const options = {
    displayMode: "inline",
    container: "#inline",
    accept: "audio/*",
    fromSources: ["local_file_system"],
    uploadInBackground: false,
    onUploadDone: getFilestackURL,
  };

  client.picker(options).open();
  client.storeURL(transformedUrl).then((res) => console.log(res));
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    console.log(client.filesUploaded[0].url);
    // const client = filestack.init(process.env.FILESTACKAPIKEY);
    base64Encoder(event);
    let url = '$("input:file").val()';
    Convert.getSong(url).then(function (response) {
      console.log(response);
    });
  });
  function getFilestackURL(result) {
    const fileData = result.filesUploaded[0].url;
    console.log(fileData);
    return fileData;
  }
});

// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     WeatherService.getWeather(city)
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });c

// Example async function

// function currencyEX(response, input) {
//   if (response.rates) {
//
//     $('#currencyShow').text(`The currency of  the ${country} is ${conversionResult}`);

//   } else {
//     console.log(`There was an error: ${response}`)
//     $('#showErrors').text(`There was an error: ${response}`);
//   }
// }

// async function spotifyCall(input) {
//   const response = await RecognizeSpotify.getSong(input);
//   currencyEX(response, input);
// }

// $(document).ready(function() {
//   $('#musicsubmit').click(function() {
//     let input = $("input:file").val();
//     spotifyCall(input);
//   });
// });
