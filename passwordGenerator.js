////////////////////////////////////////////////////////////////////////


//////////////////////////
/////// Variables ////////
//////////////////////////

// 4 lists of all available characters so that 
// the pass word can be strong
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "/", "<", ".", ">"];


var lengthOfPass = 9; // How many characters are in each password
var passFilter = []; // The randomized characters filtered
var randomPass = []; // lastly randomizes the characters in the list to get the final password
var passLogList = ["Your Passwords:"];


////////////////////////////////////////////////////////////////////////

//////////////////////
/////// Inputs ///////
//////////////////////

/* 
This section of the code is to establish the functions happening throughout the app
that being button clicks and number inputs

These will use the various functions and variables  
*/

// Password Page Inputs
passChars();
console.log("Your Password" + " " + randomPass.join(""));

randomPass = [];


////////////////////////////////////////////////////////////////////////

///////////////////////////////
////////// Functions //////////
///////////////////////////////


// Function to generate random number
function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passChars(){
  for (let l=0; l<(lengthOfPass/4); l++){
    let randLower = randomNumber(0, lowerLetters.length-1);
    let randUpper = randomNumber(0, upperLetters.length-1);
    let randNum = randomNumber(0, numbers.length-1);
    let randSymbol = randomNumber(0, symbols.length-1);
    
    passFilter.push(lowerLetters[randLower], upperLetters[randUpper], 
        numbers[randNum], symbols[randSymbol]);
  }

  while (lengthOfPass < passFilter.length){
    passFilter.splice(passFilter.length-1, 1);
  }
console.log(passFilter);
  
  while(passFilter.length != 0){
    let Index = randomNumber(0, passFilter.length-1);
    randomPass.push(passFilter[Index]);
    passFilter.splice(Index, 1);
  }

  passLogList.push(randomPass.join(""));
  console.log(passLogList);
  
  
}
