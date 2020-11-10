/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let stringWithoutSpaces = str.split(' ').join();
  let itemsDividedByComma = stringWithoutSpaces.split(',');
  let itemsAreNumbers = itemsDividedByComma.filter(i => i && !isNaN(Number(i)));
  let itemsRaw = itemsAreNumbers.sort(function (a, b) { return a - b; });
  let itemsNumbers = itemsRaw.map(Number);
  let result = {min: itemsNumbers[0], max: itemsNumbers[itemsNumbers.length - 1]};
  return result;
}
