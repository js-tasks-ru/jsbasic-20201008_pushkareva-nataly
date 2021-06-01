/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  let li = friends.map(({firstName, lastName}) =>`<li>${firstName} ${lastName}</li>`).join('')

  ul.innerHTML = li

  return ul
}
