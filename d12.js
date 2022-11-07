function myBtn(){
    document.querySelector("#btn").style.display = "none";
    let anterior = Number(prompt('Qual era o preço anterior do produto?'))
    let atual = Number(prompt('Qual é o preço atual do produto?'))
    let antes1 = anterior.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    let atual1 = atual.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    res = document.querySelector('.demo')
    res.innerHTML = `O produto custava ${antes1} e agora custa ${atual1}.</br>`

    if (anterior > atual){
        let menor = anterior - atual
        let porcent = (menor/anterior) *100
        let menor1 = menor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res = document.querySelector('.demo1')
        res.innerHTML = `O preço baixou ${menor1} em relação ao valor anterior.</br>
        Uma variação de ${porcent}% `
    }  else {
        let maior = atual - anterior
        let porcent = (maior /anterior) *100
        let maior1 = maior.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res = document.querySelector('.demo1')
        res.innerHTML = `O preço subiu ${maior1} em relação ao valor anterior.</br>
        Uma variação de ${porcent}% `
    }
}