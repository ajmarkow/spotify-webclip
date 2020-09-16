export default function getFilestackURL(result) {
  const fileData = result.filesUploaded[0].url;
  console.log(fileData);
  return fileData;
}
