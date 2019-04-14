function insertDash(word) {


  // // TODO: implement the method and return word with dashes
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", " "]
  const array = word.split("")
  const newArray = []
  console.log(array);

  array.map((letter, index) => {
    if (!vowels.includes(letter) && !vowels.includes(array[index + 1]) && (index < word.length - 1)) {
      newArray.push(letter)
      newArray.push("-")
    } else {
      newArray.push(letter)
    }
  })
  return newArray.join('')
  console.log(newArray)
  // iterate over the array
  // at each letter check if letter and letter + 1 are vowels or not.
  // if both are consonants then add "-letter+1"
  //  join
}

console.log(insertDash("hello"));

module.exports = insertDash;
