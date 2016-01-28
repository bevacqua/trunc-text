'use strict';

var delimiter = '…';

function truncText (text, cap) {
  var i;
  var limit = Number(cap);
  if (isNaN((limit))) {
    return delimiter;
  }
  var result = text;
  if (result.length > limit) {
    result = result.substr(0, limit);
    i = result.lastIndexOf(' ');

    if (i === -1) { // assume that we'd otherwise slash a word
      return delimiter;
    }
     // truncate the last word, which may have been slashed
    result = result.substr(0, i);
    result += ' ' + delimiter;
  }
  return result;
}

module.exports = truncText;
