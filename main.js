async function fetchJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let result = await response.json();
  console.log(result.joke);
}
