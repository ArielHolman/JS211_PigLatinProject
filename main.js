// unit test below

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pigLatin = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let finalWord = "";
  let cleanWord = word.toLowerCase().trim();
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

const getPrompt = () => {
  rl.question("word ", (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
};

// Unit Tests
if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "way" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggway");
      assert.equal(pigLatin("emission"), "emissionway");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
