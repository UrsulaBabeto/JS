function myBtn(){
    document.querySelector("#btn").style.display = "none";

    let temp = Number(prompt('DIgite uma temperatura em (ºC) Celsius:'))
    let f = (((temp)* 9/5) + 32)
    let k = ((temp) + 273.15)

    let res = document.querySelector(".demo")
    res.innerHTML = (` A temperatura convertida para Farenheit é: ${f}; </br>
    A temperatura convertida para kelvin é: ${k} `)
}