window.addEventListener("DOMContentLoaded", () => {
  getJoke();
});

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const jokeObj = await jokeData.json();
  // console.log(jokeObj.joke);

  const joke = jokeObj.joke;

  const body = document.querySelector(".body");
  body.innerText = joke;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  getJoke();
});

// fetch("https://icanhazdadjoke.com/", {
//   headers: { Accept: "application/json" },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
