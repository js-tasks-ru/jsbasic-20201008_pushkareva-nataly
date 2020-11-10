/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {

  for (let user of users) {
    let arr = users
    .filter((user) => user.age <= age)
    .map((user) => user.name + ', ' + user.balance);
    let str = arr.join('\n');
    return str;
  }
}
