module.exports = function reverse (n) {
  let num = n.toString();
  let result = '';

  if (num[0] === '-') {
      num = num.substring(1);
  }

    result = num.split('').reverse().join('');

    return result;
}