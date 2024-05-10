const buttonConvert = document.querySelector("button")
const currencySelect = document.querySelector("#currency-select")


function convertValue() {
    const inputCurrencyValue = document.querySelector("#value-currency").value
    const currencyToConvert = document.querySelector("#moeda-a-converter")
    const currencyConverted = document.querySelector("#moeda-convertida")

    const dolarToday = 5.16
    const euroToday = 5.56
    const libraToday= 6.46
    const bitcoinToday= 312049

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function selectChange(){
    const textCurrency = document.getElementById('changeText')
    const imgCurrency= document.querySelector(".bandeira")

    if (currencySelect.value == "dolar") {
        textCurrency. innerHTML = "Dólar"
        imgCurrency.src= "./assets/EUA.png"     
    }

    if (currencySelect.value == "euro") {
        textCurrency. innerHTML = "Euro"
        imgCurrency.src= "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        textCurrency. innerHTML = "Libra"
        imgCurrency.src= "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        textCurrency. innerHTML = "Bitcoin"
        imgCurrency.src= "./assets/bitcoin 1.png"
    }

    convertValue()
}


currencySelect.addEventListener("change", selectChange)
buttonConvert.addEventListener("click", convertValue)



