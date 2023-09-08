const raffleButton = document.querySelector("#raffle-button");
const result = document.querySelector("#result")


function raffle() {

    const minValue = +(document.querySelector("#min-value").value);
    const maxValue = +(document.querySelector("#max-value").value);

    if(maxValue >= minValue){
        result.innerHTML = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    else{
        alert("Atenção!!! O ÚLTIMO VALOR é MENOR que o PRIMEIRO!!!")
    }
}

raffleButton.addEventListener("click", raffle)