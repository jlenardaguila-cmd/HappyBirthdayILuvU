const morseAreas = document.querySelectorAll(".morse-area");

const selectedMorse = document.getElementById("selected-morse");
const decodedMessage = document.getElementById("decoded-message");


const morseDictionary = {

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
  "--..": "Z"

};


function decodeMorse(morse) {

  return morse
    .trim()
    .split(" ")
    .map(code => morseDictionary[code] || "?")
    .join("");

}


morseAreas.forEach(area => {

  area.addEventListener("mouseup", () => {

    const selection = window.getSelection();

    const selectedText = selection.toString().trim();

    if (selectedText.length === 0) {
      return;
    }

    selectedMorse.textContent = selectedText;

    const decoded = decodeMorse(selectedText);

    decodedMessage.textContent = decoded;

  });

});
