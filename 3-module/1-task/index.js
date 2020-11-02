/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {

  let user = [];
  for (let names of users) {
    user.push(names.name);
  }
  return user;
}
