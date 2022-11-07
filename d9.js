function myBtn(){
    document.querySelector("#btn").style.display = "none";
    
    let nome = prompt('Qual o nome do funcionario?')
    let salario = parseFloat(prompt(`Qual é o salário de ${nome}?`))
    let reajuste = Number(prompt(`o salário de ${nome} vai ser ajustado em qual porcentagem(%)?`))

    let sal = salario * reajuste / 100
    let soma = sal + salario

    salario1 = salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
    sal1 = sal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
    nsalario = soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

    let res = document.querySelector('.demo')
    .innerHTML = `O salario atual era ${salario1},</br>
    com ${reajuste}% de reajuste, o salario vai aumentar ${sal1}.</br>
    ${nome} vai receber ${nsalario} a partir do proximo mês`
}