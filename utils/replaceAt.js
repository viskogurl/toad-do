'use strict';

/**
 * Replacing a certain character in the string with another.
 * @param {string} string - The string to be modified.
 * @param {number} index - The specifed index to be replaced.
 * @param {string} replacement - A  character to be inserted.
 * @returns Returns the modified string.
 */
const replaceAt = (string, index, replacement) => {
  if (replacement === '') {
    // console.log(string.slice(0, index) + string.slice(index + 1))
    return string.slice(0, index) + string.slice(index + 1);
  }
  const result = string.slice(0, index) + replacement + string.slice(index + 1);
  // console.log(string.slice(0, index));
  // console.log(string.slice(index + 1));
  // console.log(replacement);
  return result;
}

module.exports = replaceAt;