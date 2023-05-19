const resultList = document.getElementById("result_list");

const getRandomDiceNumber = () => {
    return Math.floor(Math.random()*6+1)
}
const shuffle = (e) => {
    const newResult = document.createElement("li")
    newResult.textContent = "" + getRandomDiceNumber();
  result.appendChild(newResult);
};

document.getElementById("shuffle_button").addEventListener("click", shuffle);
