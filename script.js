const raffleButton = document.querySelector("#raffle-button");
const result = document.querySelector("#result")


function raffle() {

    const minValue = +(document.querySelector("#min-value").value);
    const maxValue = +(document.querySelector("#max-value").value);

    result.innerHTML = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

raffleButton.addEventListener("click", raffle)