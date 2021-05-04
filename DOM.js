let value = "";
let pigLatinResult = document.getElementById("pigLatinResult");
let englishString = document.getElementById("stringInput");

//trims value put into the text area
const storeString = (valA) => {
  value = valA.trim();
};

//clear the data in both text areas
const clearData = () => {
  let clearInput = (englishString.value = "");
  let clearResult = (pigLatinResult.value = "");
  return clearInput, clearResult;
};

//translate english text and display in pig latin result then replace if new word exists
const displayTranslation = (translatedWord) => {
  let newDiv = pigLatinResult;
  newDiv.value = translatedWord;

  let previousWord = pigLatinResult;
  let parentDiv = previousWord.parentNode;
  parentDiv.replaceChild(newDiv, previousWord);
};

//split the word and then add pigLatin letters and order to join them
const splitString = () => {
  str = value
    .split(" ")
    .map((word) => {
      return pigLatin(word);
    })
    .join(" ");
  return displayTranslation(str);
};

//pigLatin translation
const pigLatin = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let finalWord = "";
  let cleanWord = word.toLowerCase();
  if (vowels.indexOf(cleanWord[0]) > -1) {
    finalWord = cleanWord + "way";
    return finalWord;
  } else {
    let firstMatch = cleanWord.match(/[aeiou]/g) || 0;
    let vowelIndex = cleanWord.indexOf(firstMatch[0]);
    finalWord =
      cleanWord.substring(vowelIndex) +
      cleanWord.substring(0, vowelIndex) +
      "ay";
    return finalWord;
  }
};
