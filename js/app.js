const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.querySelector('.generate-button');
const passLetters = document.querySelector('#pass-letters');
const passNumbers = document.querySelector('#pass-numbers');
let lettersInPass = true;
let numbersInPass = true;
let charInPass = true;
const errorMsg = document.querySelector('.error');
const lengthErr = document.querySelector('.length-err');
const passChar = document.querySelector('#pass-char');
const firstResult = document.querySelector('.first-result');
const secondResult = document.querySelector('.second-result')


passLetters.addEventListener('click', e => {
   lettersInPass ? lettersInPass = false : lettersInPass = true;  
})
passNumbers.addEventListener('click', e => {
   numbersInPass ? numbersInPass = false : numbersInPass = true;
})
passChar.addEventListener('click', e => {
   charInPass ? charInPass = false : charInPass = true;
})

generateButton.addEventListener('click', e => {
   e.preventDefault();
   renderPass();
})

firstResult.addEventListener('click', e=> {
   navigator.clipboard.writeText(firstResult.innerText);
})
secondResult.addEventListener('click', e=> {
   navigator.clipboard.writeText(secondResult.innerText);
})


const renderPass =() => {
   let passLength = document.querySelector('#pass-length').value || 15
   if (passLength < 4 || passLength > 20) {
      lengthErr.innerText = "from 4 to 20";
      return
   }
   let selectedCharTypes=[]
   if (lettersInPass) {
      for (let i = 0; i < characters.indexOf('0'); i++) {
         selectedCharTypes.push(characters[i]);
      }
   }
   if (numbersInPass) {
      for (let i = characters.indexOf('0'); i <= characters.indexOf('9'); i++) {
         selectedCharTypes.push(characters[i]);
      }
   }
   if (charInPass) {
      for (let i = characters.indexOf('9') + 1; i < characters.length; i++) {
         selectedCharTypes.push(characters[i]);
      }
   }
   if (!charInPass && !numbersInPass && !lettersInPass) {
      errorMsg.innerText = "Please, select type of character below:"
      return
   }
   firstResult.innerText = generatePass(passLength, selectedCharTypes);
   secondResult.innerText = generatePass(passLength, selectedCharTypes);
}


const generatePass =(passLength, arr) => {
   let result = [];
   for (let i = 0; i < passLength; i++) {
      result.push(arr[Math.floor(Math.random() * arr.length)]);
   }
   return result.reduce((previousValue, currentValue) => (previousValue + '' + currentValue));
}

