export const base64Encoder = (event) => {
  let reader = new FileReader();
  try {
    const file = event.target.files[0];
    reader.readAsArrayBuffer(file);
    reader.onload = (file) => {
      let encoded = reader.result.split(",")[1];
      console.log(encoded);
      return encoded;
    };
  } catch (error) {
    alert("error");
  }
};

// var myArray = new ArrayBuffer(512);
// var longInt8View = new Uint8Array(myArray);

// // generate some data
// for (var i=0; i< longInt8View.length; i++) {
//   longInt8View[i] = i % 256;
// }

// var xhr = new XMLHttpRequest;
// xhr.open("POST", url, false);
// xhr.send(myArray);
