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

// We want to retrieve a picture

// We want to be able to search for a joke

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

//Need store values in one of the two following sections:
//1- Funny
//2- Not Funny

// option to send funny/not funny quotes to people social media/📧
