const quotes = document.querySelector(".quotes");
const iconDice = document.querySelector(".icon-dice");

async function getAdivice() {
  const API_URL = "https://api.adviceslip.com/advice";
  response = await fetch(API_URL);
  json = await response.json();
  return json["slip"]["advice"];
}

async function changeAdvice() {
  const advice = await getAdivice();
  quotes.innerText = advice;
}

iconDice.addEventListener("click", changeAdvice);
