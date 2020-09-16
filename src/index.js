import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Convert from "./Recognize.js";
import getFilestackURL from "./fileupload.js";

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
  $("#musicsubmit").click(function (event) {
    event.preventDefault();
    let url = getFilestackURL();
    Convert.getSong(url).then(function (response) {
      console.log(response);
    });
  });
});

// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }
