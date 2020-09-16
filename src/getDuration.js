export default function getDuration(ms){
  let totalSeconds = parseInt(ms / 1000);
  let sec = totalSeconds % 60;
  let min = parseInt(totalSeconds / 60);
  return [min, sec];
}