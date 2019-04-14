class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    const array = text.split(" ")
    let arrayCount = []
    if (text === "") {
      return 0
    } else {
    const arrayCount = new Map([...new Set(array)].map(
      x => [x, array.filter( y => y === x).length]))
    }
    // console.log(arrayCount)
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    return this.arrayCount(word)
  }
}

module.exports = Counter;


// function occurrences(text, word) {

//   const array = text.split(" ")
//   let counter = 0
//   if (text === "") {
//     return 0
//   } else {
//     array.forEach((oneWord) => {
//       if (oneWord.toLowerCase() === word) {
//         counter += 1
//       }
//     });
//     return counter
//   }
// }

// module.exports = occurrences;
