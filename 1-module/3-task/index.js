/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str) {
    return (str[0].toUpperCase() + str.slice(1));
  }
  else if (str.length === 0) {
    return ('');
  }
}
