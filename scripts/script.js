let output = document.getElementById("output")
let peso = document.getElementById("peso")
let altura = document.getElementById("altura")

function calc_imc(){
    let peso_value = parseFloat(peso.value)
    let altura_value = parseFloat(altura.value)
    let s = peso_value/(altura_value*altura_value)
    let msg = `<p>Seu IMC é ${parseFloat(s).toFixed(2)}</p>`
    output.innerHTML = msg
    peso_value = 0
    altura_value = 0
}
