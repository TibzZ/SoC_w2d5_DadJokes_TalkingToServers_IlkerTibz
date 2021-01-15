// I) EXTRACTING API DATA
// We retrieve information for Dad Joke API
let resultJoke = document.querySelector("h2");

async function fetchJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let result = await response.json();
  // Get the ID of the joke
  console.log(result.id);
  // We get the related joke
  console.log(result.joke);
  resultJoke.innerText = result.joke;
}

let newJokeButton = document.querySelector("#new-joke");
newJokeButton.addEventListener("click", fetchJoke);

// FUNCT - Funny img
function getFunnyImage() {
  let funnyBtnImg = document.querySelector("#funny-button-img");
  funnyBtnImg.setAttribute("src", "./FunnyImg/Funny1.jpg");
}

// FUNC - Not funny img
function getNotFunnyImage() {
  let notFunnyBtnImg = document.querySelector("#funny-button-img");
  notFunnyBtnImg.setAttribute("src", "./NoFunnyImg/NotFunny1.jpg");
}

// To do Randomise pictures when Buttons are clicked

// Calling pict for funny / unfunny buttons
let funnyButton = document.querySelector("#funny-button");
funnyButton.addEventListener("click", getFunnyImage);

let notFunnyButton = document.querySelector("#not-funny");
notFunnyButton.addEventListener("click", getNotFunnyImage);

//Need store values in one of the two following sections:
//1- Funny
// when either funny or not funny button clicked
//get the joke and store it in the relevant variable below.
let funnyJokes = [];
let noFunnyJokes = [];
//Funny List array
function funnyJokeList() {
  let liElement = document.createElement("li");
  let selectOl = document.querySelector("#funny-list");
  liElement.innerText = resultJoke.innerText;
  selectOl.appendChild(liElement);
}
let funnyButtonList = document.querySelector("#funny-button");
funnyButtonList.addEventListener("click", funnyJokeList);

// Not Funny list array
function notFunnyJokeList() {
  let liElement = document.createElement("li");
  let selectOl = document.querySelector("#not-funny-list");
  liElement.innerText = resultJoke.innerText;
  selectOl.appendChild(liElement);
}
let notFunnyButtonList = document.querySelector("#not-funny");
notFunnyButtonList.addEventListener("click", notFunnyJokeList);

// async function imageJoke() {
//   let response = await fetch("https://icanhazdadjoke.com/", {
//     headers: { accept: "application/json" },
//   });
//   let result = await response.json();
//   console.log(result.id);
//   return result.joke;
// }

// Test Print result in h2

// 2 PAGE LAYOUT CUSTOMISATION

// Design background plus title

// Create Buttons for joke to be categorised as funny or 📓

// for each button we will add a specific image depending of the result
//Folder 1 image 🥴
//

// option to send funny/not funny quotes to people social media/📧
// We want to be able to search for a joke
