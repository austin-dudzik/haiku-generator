// Define the dictionary
let dictionary = [
  [],
  ["life", "world", "day"],
  ["perfect", "freedom", "nature"],
  ["banana", "celebrate", "adventure"],
  ["ordinary", "television", "invisible"],
  ["personality", "everybody", "appreciated"],
  ["electrifying", "accountability", "identifiable"],
  ["telecommunication", "oversimplification", "inalienable"]
];

$(document).ready(function() {

  // When word is submitted
  $("form#addWord").submit(addWord);

  // When generate button is clicked
  $("button#generate").click(generateHaiku);

  function addWord(event) {

    // Prevent browser refresh
    event.preventDefault();

    // Get inputted word
    let customWord = $("input#word").val();

    // Define total syllables
    let totalSyllables = 0;

    // Definee final word
    let finalWord = "";

    // Loop through word and find dashes, remove them
    for (let i = 0; i < customWord.length; i++) {

      if (customWord[i] === "-") {

        totalSyllables++

        finalWord = customWord.replaceAll("-", "");

        // If word has over 7 syllables
        if (totalSyllables > 6) {
          $("p#message").text("Sorry, that word has too many syllables.");
        } else {
          // Push onto the dictionary array
          dictionary[totalSyllables + 1].push(finalWord);
          $("p#message").text("Success, word has been added to haiku.");
        }

      }

    }

  }

  function pickRandomWord(syllables) {

    // Define dictionary as a variable
    let wordArray = dictionary[syllables];

    // Select a random word from the dictionary
    let randomSelector = Math.floor(Math.random() * wordArray.length);

    // Return the randomly selected value
    return wordArray[randomSelector];

  }

  function generateHaiku() {

    // Define line variables
    let firstLine = "";
    let secondLine = "";
    let thirdLine = "";

    // Set the max length
    let maxLength = 7;

    // Define line syllables
    let firstLineSyllables = 0;
    let secondLineSyllables = 0;
    let thirdLineSyllables = 0;

    // Generate a random number to pick from dictionary
    let randNumber = (Math.floor(Math.random() * maxLength) + 1);


    // If number is greater than 5
    while (randNumber > 5) {
      randNumber = (Math.floor(Math.random() * maxLength) + 1);
    }

    // Run while syllables are less than 6
    while (firstLineSyllables < 6) {

      // Set the word in a variable
      firstLine += `${pickRandomWord(randNumber)} `;

      // Add number to syllables
      firstLineSyllables += randNumber;

      // Subtract syllables from 5
      maxLength = 5 - firstLineSyllables;

      // Generate new random number
      randNumber = (Math.floor(Math.random() * maxLength) + 1);

      // If syllables equals 5
      if (firstLineSyllables === 5) {
        break;
      }

    }

    // Set the max length
    maxLength = 7;
    // Generate a random number to pick from dictionary
    randNumber = (Math.floor(Math.random() * maxLength) + 1);

    // Run while syllables are less than 8
    while (secondLineSyllables < 8) {

      // Set the word in a variable
      secondLine += `${pickRandomWord(randNumber)} `;

      // Add number to syllables
      secondLineSyllables += randNumber;

      // Subtract syllables from 7
      maxLength = 7 - secondLineSyllables;

      // Generate new random number
      randNumber = (Math.floor(Math.random() * maxLength) + 1);

      // If syllables equals 7
      if (secondLineSyllables === 7) {
        break;
      }

    }

    // Set the max length
    maxLength = 7;

    // Generate a random number to pick from dictionary
    randNumber = (Math.floor(Math.random() * maxLength) + 1);

    // If number is greater than 5
    while (randNumber > 5) {
      randNumber = (Math.floor(Math.random() * maxLength) + 1);
    }

    // Run while syllables are less than 6
    while (thirdLineSyllables < 6) {

      // Set the word in a variable
      thirdLine += `${pickRandomWord(randNumber)} `;

      // Add number to syllables
      thirdLineSyllables += randNumber;

      // Subtract syllables from 5
      maxLength = 5 - thirdLineSyllables;

      // Generate new random number
      randNumber = (Math.floor(Math.random() * maxLength) + 1);

      // If syllables equals 5
      if (thirdLineSyllables === 5) {
        break;
      }

    }

    // Add haiku lines to page
    $("p#firstLine").text(firstLine);
    $("p#secondLine").text(secondLine);
    $("p#thirdLine").text(thirdLine);

  }

});