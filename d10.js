let a = Number(prompt('Qual o valor de A?'))
let b = Number(prompt('Qual o valor de B?'))
let c = Number(prompt('Qual o valor de C?'))


function myBtn(){
    document.querySelector("#btn").style.display = "none";
    let resultado = (b**2)-4*a*c
    res = document.querySelector('.demo')
    res.innerHTML = `A equação atual é ${a}x²+${b}x+${c}=0</br>
    O calculo realizado será: Δ = ${b}²-4.${a}.${c}</br>
    Δ = ${resultado}`
}