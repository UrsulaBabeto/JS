let produto = prompt('Qual produto você está comprando?')
let preco = parseFloat(prompt(`Qual o preço do(a) ${produto}?`))

function myBtn(){
    let valor = (preco * 5) / 100
    let desconto = preco - valor
    let preco1 = preco.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let valor1 = valor.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let desconto1 = desconto.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    
    let res = document.querySelector('.demo')
    res.innerHTML = (`O preço original era ${preco1}</br>
    Você ganhou um desconto de ${valor1}</br>
    O valor total a ser pago é: ${desconto1}`)
}
function myBtn1(){
    let valor = (preco * 10) / 100
    let desconto = preco - valor
    let preco1 = preco.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let valor1 = valor.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let desconto1 = desconto.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    
    let res = document.querySelector('.demo')
    res.innerHTML = (`O preço original era ${preco1}</br>
    Você ganhou um desconto de ${valor1}</br>
    O valor total a ser pago é: ${desconto1}`)
}
function myBtn2(){
    let valor = (preco * 15) / 100
    let desconto = preco - valor
    let preco1 = preco.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let valor1 = valor.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    let desconto1 = desconto.toLocaleString('pt-BR', {style:'currency' , currency:'BRL'})
    
    let res = document.querySelector('.demo')
    res.innerHTML = (`O preço original era ${preco1}</br>
    Você ganhou um desconto de ${valor1}</br>
    O valor total a ser pago é: ${desconto1}`)
}
