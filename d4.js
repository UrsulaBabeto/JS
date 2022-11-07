function myBtn(){
    const prod = prompt('Que produto você esta comprando?')
    
    const preco = Number(prompt('Qual o preço deste produto?'))
    const preco1 = preco.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
    
    const valor =  Number(prompt('Qual o valor dado?'))
    const valor1 = valor.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
    
    const troco = Number(valor - preco)
    const troco1 = troco.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})

    alert(`Voce comprou: ${prod} \n Custo: ${preco1}. \n Total: ${valor1} 
 \n Vai receber ${troco1} de troco. \n Volte sempre!`)

} 
  