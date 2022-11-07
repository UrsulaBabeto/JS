let dr = Number(prompt('Antes de mais nada, qual é o valor do dolar agora?'))

function myBtn (){
    document.querySelector("#btn").style.display = "none";

    let rl = Number(prompt('Qual o valor (R$) para a conversão?'))
    let conv = rl/dr
    let rl1 =rl.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
    let dr1 = dr.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
    let conv1 = conv.toLocaleString('en-US',{style:'currency', currency:'USD'})
  
    let res = document.querySelector('.demo')
    res.innerHTML = (`Considerando a cotação de hoje em ${dr1} <br>
    Tendo na carteira ${rl1}, você teria  ${conv1}`)
   
}
