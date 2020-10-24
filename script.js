let characterSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
  "0",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1"
];

// Character manipulation functions

function characterToIndex(character) {
  index = characterSet.indexOf(character);
  console.log(index);
  return index;
}

function indexToCharacter(index) {
  character = characterSet[Number(index)];
  console.log(character);
  return character;
}

// Encode - Decode indexes

function calcNewEncodeIndex(character) {
  key = document.getElementById("keyselect").value;
  newIndex = characterToIndex(character) + Number(key);
  console.log(newIndex);
  if (newIndex >= characterSet.length - 1){
    newIndex = newIndex - characterSet.length;
  } return newIndex;
}

function calcNewDecodeIndex(character) {
  key = document.getElementById("keyselect").value;
  newIndex = characterToIndex(character) - Number(key);
  console.log(newIndex);
  if (newIndex < 0){
    newIndex = (characterSet.length - 1) + newIndex;
  } 
  return newIndex;
}

// Upper case check

function isUpperCase(character) {
  if(character === character.toLowerCase()) {
    return false
  } return true
}

// Encoding - Decoding characters

function encodeCharacter(character) {
  if(characterSet.includes(character)) {
    encodedText.push(indexToCharacter(calcNewEncodeIndex(character)));
  } else if(isUpperCase(String(character))) {
    character = character.toLowerCase();
    console.log(character);
    newCharacter = indexToCharacter(calcNewEncodeIndex(character));
    encodedText.push(newCharacter.toUpperCase());
} else {
  encodedText.push(character);
}
}

function decodeCharacter(character) {
  if(characterSet.includes(character)) {
    decodedText.push(indexToCharacter(calcNewDecodeIndex(character)));
  } else if(isUpperCase(String(character))) {
    character = character.toLowerCase();
    console.log(character);
    newCharacter = indexToCharacter(calcNewDecodeIndex(character));
    decodedText.push(newCharacter.toUpperCase());
} else {
  decodedText.push(character);
}
}

// HTML Button functions

function encode() {
  text = document.getElementById("inputMessage").value;
  encodedText = [];
  textToCodeDecode = text.split("", text.length);
  for (i = 0; i <= textToCodeDecode.length; i++) {
    encodeCharacter(textToCodeDecode[i]);
}
  document.getElementById("outputMessage").value = encodedText.join("");
}

function decode() {
  text = document.getElementById("inputMessage").value;
  decodedText = [];
  textToCodeDecode = text.split("", text.length);
  for (i = 0; i <= textToCodeDecode.length; i++) {
    decodeCharacter(textToCodeDecode[i]);
}
  document.getElementById("outputMessage").value = decodedText.join("");
}
