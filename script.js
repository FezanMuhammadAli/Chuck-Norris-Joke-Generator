const getJoke = document.getElementById("jokeBtn");
const category = document.getElementById("category");
const jokeTxt = document.getElementById("jokeTxt");
const jokeContainer = document.getElementById("jokeContainer");

getJoke.addEventListener("click", () => {
  document.querySelector(".target").classList.add("jokeContainer");
  fetch(
    `https://api.chucknorris.io/jokes/random?category=${category.value.toLowerCase()}`
  )
    .then((response) => response.json())
    .then((data) => {
      jokeTxt.innerHTML = data.value;
    })
    .catch((error) => {
      console.log(error);
    });
});
