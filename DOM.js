let value = "";
let pigLatinResult = document.getElementById("pigLatinResult");
let englishString = document.getElementById("stringInput");

const storeString = (valA) => {
  value = valA.trim();
};

const clearData = () => {
  let clearInput = (englishString.value = "");
  let clearResult = (pigLatinResult.value = "");
  return clearInput, clearResult;
};

const displayTranslation = (translatedWord) => {
  let newDiv = pigLatinResult;
  newDiv.value = translatedWord;

  let previousWord = pigLatinResult;
  let parentDiv = previousWord.parentNode;
  parentDiv.replaceChild(newDiv, previousWord);
};

const splitString = () => {
  str = value
    .split(" ")
    .map((word) => {
      return pigLatin(word);
    })
    .join(" ");
  return displayTranslation(str);
};

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
