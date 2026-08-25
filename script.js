const selectedMorse = document.getElementById("selected-morse");
const decodedMessage = document.getElementById("decoded-message");

// ------------------------------------
// MORSE CODE DICTIONARY
// ------------------------------------

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


// ------------------------------------
// DECODE MORSE CODE
// ------------------------------------

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


// ------------------------------------
// RESET DIALOGUE
// ------------------------------------

function resetDialogue() {

  selectedMorse.textContent = "Select the Morse code";

  decodedMessage.textContent = "Your decoded message will appear here.";

}


// ------------------------------------
// DETECT TEXT SELECTION
// ------------------------------------

document.addEventListener("mouseup", function () {

  const selection = window.getSelection();

  // Nothing is selected
  if (!selection || selection.isCollapsed) {
    resetDialogue();
    return;
  }

  const text = selection.toString().trim();

  // Selection contains no text
  if (!text) {
    resetDialogue();
    return;
  }


  // ------------------------------------
  // CHECK IF SELECTION IS INSIDE
  // A MORSE AREA
  // ------------------------------------

  const node = selection.anchorNode;

  if (!node) {
    resetDialogue();
    return;
  }

  const element =
    node.nodeType === Node.TEXT_NODE
      ? node.parentElement
      : node;

  const morseArea = element.closest(".morse-area");

  // Selection is outside a Morse area
  if (!morseArea) {
    resetDialogue();
    return;
  }


  // ------------------------------------
  // DISPLAY SELECTED MORSE
  // ------------------------------------

  selectedMorse.textContent = text;


  // ------------------------------------
  // DECODE MORSE
  // ------------------------------------

  const decoded = decodeMorse(text);

  decodedMessage.textContent = decoded;

});


// ------------------------------------
// DETECT WHEN SELECTION IS CLEARED
// ------------------------------------

document.addEventListener("selectionchange", function () {

  const selection = window.getSelection();

  if (!selection || selection.isCollapsed) {
    resetDialogue();
  }

});
