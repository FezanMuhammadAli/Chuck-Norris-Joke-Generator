const getJoke = document.getElementById("jokeBtn");

getJoke.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("jokeTxt").innerHTML = data.value;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
