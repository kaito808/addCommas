function addCommas(num) {
  let numToStr = num.toString();
  let sign = "";

  if (numToStr[0] === "-") {
    sign = "-";
    numToStr = numToStr.slice(1);
  }

  let formattedInt = [];
  for (let i = numToStr.length - 1; i >= 0; i--) {
    if (i < numToStr.length - 1 && (numToStr.length - i - 1) % 3 === 0) {
      formattedInt.unshift(",");
    }
    formattedInt.unshift(numToStr[i]);
  }

  return sign + formattedInt.join("");
}

module.exports = addCommas;
