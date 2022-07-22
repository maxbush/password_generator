const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.querySelector('.generate-button');
console.log(generateButton)
let firstResult = document.querySelector('.first-result')
console.log(firstResult)
const secondResult = document.querySelector('.second-result')
console.log(secondResult)

const renderPass =() => {
   firstResult.innerText = generatePass();
   secondResult.innerText = generatePass();
}

const generatePass =() => {
   let result = [];
   for (let i = 0; i < 15; i++) {
      result.push(characters[Math.floor(Math.random() * characters.length)])
   }
   return result.reduce((previousValue, currentValue) => (previousValue + '' + currentValue));
}

