window.cipher = {
  encode: encode,
  decode: decode,
};

function encode (offset, str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result += String.fromCharCode((str.charCodeAt(i) - 65 + offset) % 26 + 65);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      result += String.fromCharCode((str.charCodeAt(i) - 97 + offset) % 26 + 97);
    } else {
      result += str[i];
    }  
  }
  return result;
}

function decode (offset, str) {
  let decoResult = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      decoResult += String.fromCharCode((str.charCodeAt(i) - 90 - offset) % 26 +90);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      decoResult += String.fromCharCode((str.charCodeAt(i) -122 - offset) % 26 +122);
    } else {
      decoResult += str[i];
    }
  }
  return decoResult;
}