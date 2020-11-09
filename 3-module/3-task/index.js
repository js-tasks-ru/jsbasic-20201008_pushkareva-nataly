/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let str1 = str.split('-');
  let str2 = str1.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  return str2.join('');
}
