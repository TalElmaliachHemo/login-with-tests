
function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function save(key, gameState) {
    localStorage.setItem(key, JSON.stringify(gameState));
}

function isExist(key) {
  return !!localStorage.getItem(key)
}

function remove(key) {
  return localStorage.removeItem(key);
}

export default {
  save,
  load,
  isExist,
  remove
}