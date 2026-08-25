const selectedMorse = document.getElementById("selected-morse");
const decodedMessage = document.getElementById("decoded-message");

const morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",

  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",

  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  ".----.": "'",
  "-..-.": "/",
  ".-..-.": "\"",
  "---...": ":",
  "-.-.-.": ";"
};


function decodeMorse(text) {

  // Separate words
  const words = text.trim().split(/\s*\/\s*/);

  return words.map(word => {

    // Separate individual Morse letters
    const letters = word.trim().split(/\s+/);

    return letters.map(letter => {

      return morseCode[letter] || "";

    }).join("");

  }).join(" ");
}


/*
   Detect when the user selects text
*/
document.addEventListener("mouseup", function () {

  const selection = window.getSelection();

  if (!selection || selection.isCollapsed) {
    return;
  }

  const text = selection.toString().trim();

  /*
     Only react if the selected text
     came from one of the Morse areas.
  */
  const node = selection.anchorNode;

  if (!node) {
    return;
  }

  const morseArea = node.parentElement.closest(".morse-area");

  if (!morseArea) {
    return;
  }

  selectedMorse.textContent = text;

  const decoded = decodeMorse(text);

  decodedMessage.textContent = decoded;

});
