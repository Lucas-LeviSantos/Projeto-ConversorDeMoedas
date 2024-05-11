const buttonConvert = document.querySelector("button")
const currencySelectConvert = document.querySelector("#currency-select-convert")
const currencyConvertFrom = document.querySelector("#convert-from")
const inputCurrencyValue = document.querySelector("#value-currency")
const iconRevert = document.getElementById("icone-trocar")

function convertValue() {
    const inputCurrencyValue = document.querySelector("#value-currency").value
    const currencyToConvert = document.querySelector("#moeda-a-converter")
    const currencyConverted = document.querySelector("#moeda-convertida")


    const realDolar = 0.1943
    const realEuro = 0.1799
    const realLibra = 0.1548
    const realBitcoin = 0.0000032

    let convertedValue
    switch (currencyConvertFrom.value) {
        case "real":
            switch (currencySelectConvert.value) {
                case "dolar":
                    convertedValue = inputCurrencyValue * realDolar
                    break;

                case "euro":
                    convertedValue = inputCurrencyValue * realEuro
                    break;

                case "libra":
                    convertedValue = inputCurrencyValue * realLibra
                    break;

                case "bitcoin":
                    convertedValue = inputCurrencyValue * realBitcoin
                    break;

                default:
                    convertedValue = inputCurrencyValue
                    break;
            }
            break;

        case "dolar":
            switch (currencySelectConvert.value) {
                case "real":
                    convertedValue = inputCurrencyValue / realDolar
                    break;

                case "euro":
                    convertedValue = inputCurrencyValue * (realEuro / realDolar)
                    break;

                case "libra":
                    convertedValue = inputCurrencyValue * (realLibra / realDolar)
                    break;

                case "bitcoin":
                    convertedValue = inputCurrencyValue * (realBitcoin / realDolar)
                    break;

                default:
                    convertedValue = inputCurrencyValue
                    break;
            }
            break;

        case "euro":
            switch (currencySelectConvert.value) {
                case "real":
                    convertedValue = inputCurrencyValue / realEuro
                    break;

                case "dolar":
                    convertedValue = inputCurrencyValue * (realDolar / realEuro)
                    break;

                case "libra":
                    convertedValue = inputCurrencyValue * (realLibra / realEuro)
                    break;

                case "bitcoin":
                    convertedValue = inputCurrencyValue * (realBitcoin / realEuro)
                    break;

                default:
                    convertedValue = inputCurrencyValue
                    break;
            }
            break;

        case "libra":
            switch (currencySelectConvert.value) {
                case "real":
                    convertedValue = inputCurrencyValue / realLibra
                    break;

                case "dolar":
                    convertedValue = inputCurrencyValue * (realDolar / realLibra)
                    break;

                case "euro":
                    convertedValue = inputCurrencyValue * (realEuro / realLibra)
                    break;

                case "bitcoin":
                    convertedValue = inputCurrencyValue * (realBitcoin / realLibra)
                    break;

                default:
                    convertedValue = inputCurrencyValue
                    break;
            }
            break;

            case "bitcoin":
                switch (currencySelectConvert.value) {
                    case "real":
                        convertedValue = inputCurrencyValue / realBitcoin
                        break;

                    case "dolar":
                            convertedValue = inputCurrencyValue * (realDolar/realBitcoin)
                        break;
                    
                    case "libra":
                        convertedValue = inputCurrencyValue * (realLibra/realBitcoin)
                        break;

                    case "euro":
                        convertedValue = inputCurrencyValue * (realEuro/realBitcoin)
                        break;
                    
                    default:
                        convertedValue = inputCurrencyValue
                        break;
                }
                break;
                
        default:
            convertedValue = inputCurrencyValue
            break;
    }
    if (currencySelectConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }

    if (currencySelectConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }
    if (currencySelectConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }
    if (currencySelectConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)
    }
    if (currencySelectConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue)
    }

    /* ---------------------------------------------CARACTERES DA MOEDA Á CONVERTER--------------------------------------------- */

    if (currencyConvertFrom.value == "real") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyConvertFrom.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencyConvertFrom.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencyConvertFrom.value == "libra") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (currencyConvertFrom.value == "bitcoin") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

}

function selectChange() {
    const inputCurrencyValue = document.querySelector("#value-currency")
    const textCurrency1 = document.getElementById('changeText-1')
    const imgCurrency1 = document.querySelector(".bandeira-1")
    const textCurrency2 = document.getElementById('changeText-2')
    const imgCurrency2 = document.querySelector(".bandeira-2")

    if (currencyConvertFrom.value == "dolar") {
        textCurrency1.innerHTML = "Dólar"
        imgCurrency1.src = "./assets/EUA.png"
        inputCurrencyValue.placeholder = "$ 0.00"
    }

    if (currencyConvertFrom.value == "euro") {
        textCurrency1.innerHTML = "Euro"
        imgCurrency1.src = "./assets/Euro.png"
        inputCurrencyValue.placeholder = '0,00 €'
    }

    if (currencyConvertFrom.value == "libra") {
        textCurrency1.innerHTML = "Libra"
        imgCurrency1.src = "./assets/libra 1.png"
        inputCurrencyValue.placeholder = "£0.00"
    }

    if (currencyConvertFrom.value == "bitcoin") {
        textCurrency1.placeholder = "Bitcoin"
        imgCurrency1.src = "./assets/bitcoin 1.png"
        inputCurrencyValue.placeholder = "BTC 0.00"
    }
    if (currencyConvertFrom.value == "real") {
        textCurrency1.innerHTML = "Real"
        imgCurrency1.src = "./assets/Brasil.png"
        inputCurrencyValue.placeholder = "R$ 0,00"
    }

    /* ------------------------------------------------------------------------------------ */
    if (currencySelectConvert.value == "dolar") {
        textCurrency2.innerHTML = "Dólar"
        imgCurrency2.src = "./assets/EUA.png"
    }

    if (currencySelectConvert.value == "euro") {
        textCurrency2.innerHTML = "Euro"
        imgCurrency2.src = "./assets/Euro.png"
    }

    if (currencySelectConvert.value == "libra") {
        textCurrency2.innerHTML = "Libra"
        imgCurrency2.src = "./assets/libra 1.png"
    }

    if (currencySelectConvert.value == "bitcoin") {
        textCurrency2.innerHTML = "Bitcoin"
        imgCurrency2.src = "./assets/bitcoin 1.png"
    }
    if (currencySelectConvert.value == "real") {
        textCurrency2.innerHTML = "Real"
        imgCurrency2.src = "./assets/Brasil.png"
    }

    convertValue()
}


function inputFocus(event) {
    this.select();
}
function pressEnter(event) {
    if (event.key === "Enter"){
        buttonConvert.click();
    }
}

function iconClick(){
    let currencySelect1 = document.getElementById("convert-from")
    let currencySelect2 = document.getElementById("currency-select-convert")
    let temp = currencySelect1.value

    currencySelect1.value = currencySelect2.value
    currencySelect2.value = temp

    convertValue()
    selectChange()
}


iconRevert.addEventListener("click", iconClick)
inputCurrencyValue.addEventListener("focus", inputFocus)
inputCurrencyValue.addEventListener("keypress", pressEnter)
currencyConvertFrom.addEventListener("change", selectChange)
currencySelectConvert.addEventListener("change", selectChange)
buttonConvert.addEventListener("click", convertValue)