let upperCaseLetters = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

const lowerCaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","$","%","*","&","*","&","(",")","{","}","[","]"];

const generatepassword = document.querySelector("#generatepassword");
generatepassword.addEventListener("click",submitdata);


function submitdata(){
    let totalCount = document.getElementById("ageOutputId"); 
    let includeuppercaseletters = document.getElementById("includeuppercaseletters");
    let includelowercaseletters = document.getElementById("includelowercaseletters");
    let includenumbers = document.getElementById("includenumbers");
    let includesymbols = document.getElementById("includesymbols");

    includeuppercaseletters = includeuppercaseletters.checked; 
    includelowercaseletters = includelowercaseletters.checked;
    includenumbers =  includenumbers.checked;
    includesymbols = includesymbols.checked;
    totalCount = totalCount.innerHTML;

    let allCharacters = []; //an array that would store type of characters that user have checked on.

  //if user has checked, then appending that type of characters in the all characters.
  if (includeuppercaseletters === true){
    allCharacters = allCharacters.concat(upperCaseLetters); 
  }
  if (includelowercaseletters === true){
    allCharacters = allCharacters.concat(lowerCaseLetters); 
  }
 
  if (includenumbers === true){
    allCharacters = allCharacters.concat(numbers); 
  }
  if (includesymbols === true){
    allCharacters = allCharacters.concat(symbols); 
  }

  if(allCharacters.length === 0){
    alert("Please check at least one box!");

  }
  else{
    data = helperfuntion(totalCount, allCharacters)
    console.log(data)
  }
  document.querySelector("#answer").value = data;
    
}

function helperfuntion(totalCount, allCharacters){
  let finalcharacters = []; 
  for(let i =0; i < totalCount; i++){
    randomNumber = Math.floor(Math.random() * allCharacters.length)
    finalcharacters.push(allCharacters[randomNumber]);

  }
  return finalcharacters.join('');
}

const button = document.querySelector("#button");
console.log(button);
button.addEventListener("click",copy);

function copy(){
  var copyText = document.getElementById("answer"); 
  copyText.select(); //selecting the answer
  navigator.clipboard.writeText(copyText.value);
}

