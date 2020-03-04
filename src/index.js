module.exports = function check(str, bracketsConfig) {
  let pairs
  for (let i = 0; i < bracketsConfig.length; i = 0) {
    pairs = bracketsConfig[i].join('')
    if (str.includes(pairs)) {
      str = str.replace(pairs, '')
    } else {
      i++
    }
  }
  return !str
}
