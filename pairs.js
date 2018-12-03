/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names) {
  let pairArrayOne = [];
  let pairArrayTwo = [];
  let pairArrays = [];

  if (names === [] || names === undefined || names.length === 0) {
    let pairArrays = [];
    return pairArrays;
  }

  if (names.length === 2) {
    pairArrays[0] = [names[0], names[1]];
    return pairArrays;
  }

  if (names.length % 2 === 0 && names.length !== 2 && names.length !== 0) {
    for (let i = 0; i <= names.length / 2; i++) {
      let randomNames = names.getRandom();
      //console.log('in first for loop - random name is: ' + randomNames);
      pairArrayOne.push(randomNames);
    }
    let pairArrayTwo = names;
    let pairArrays = [pairArrayOne, pairArrayTwo];
    return pairArrays;
  }
  // if (names.length === 0) {
  //   let pairArrays = [];
  //   return pairArrays;
  // }
  if (names.length % 2 !== 0) {
    pairArrayTwo = [names.getRandom()];
    for (let i = 0; i <= names.length / 2; i++) {
      let randomNames = names.getRandom();
      pairArrayOne.push(randomNames);
    }
    let pairArrays = [pairArrayOne, pairArrayTwo];
    return pairArrays;
  }
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function() {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

//console.log(
//   pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
// );
console.log(pairs(["Asis", "Hamsa"]));
