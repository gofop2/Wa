function welcomeMessage() {
  let hours = new Date().getHours().toFixed(1);
  if (hours > 5 && hours < 9) {
    return `Dobré ráno`;
  } else if (hours < 12) {
    return `Dobré dopoledne`;
  } else if (hours < 13) {
    return `Dobrou chuť`;
  } else if (hours < 18) {
    return `Dobré odpoledne`;
  } else if (hours < 21) {
    return `Dobrý večer`;
  }
}
export default welcomeMessage;
