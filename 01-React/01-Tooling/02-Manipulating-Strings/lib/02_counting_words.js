function occurrences(text, word) {

  const array = text.split(" ")
  let counter = 0
  if (text === "") {
    return 0
  } else {
    array.forEach((oneWord) => {
      if (oneWord.toLowerCase() === word) {
        counter += 1
      }
    });
    return counter
  }
}

module.exports = occurrences;


console.log(occurrences("a fat cat sat on a mat and ate a fat rat", "fat"))


