let nome = prompt('Qual é o nome do aluno(a)?')

function myBtn() {
    document.querySelector("#btn").style.display = "none";
    let nota1 = Number(prompt('1ª nota:'))
    let nota2 = Number(prompt('2ª nota:'))
    let nota3 = Number(prompt('3ª nota:'))
    
    let media = (nota1 + nota2 + nota3) / 3
    let res1 = document.querySelector('.demo1')
    
    res1.innerHTML = `Analisando a situação do(a) aluno(a)<strong> ${nome}</strong></br>
    Com as notas <strong>${nota1}, <strong>${nota2}</strong> e <strong>${nota3} </strong> e media <strong>${media}</strong>`
    
    let res = document.querySelector('.demo')
    if (media > 6) {
        document.body.style.backgroundColor = 'green';
        document.querySelector('.demo').style.backgroundColor = 'green'
        res.innerHTML = ('O aluno esta <strong>APROVADO</strong>')
    } else if (media > 3 && media < 6) {
        document.body.style.backgroundColor = 'orange';
        document.querySelector('.demo').style.backgroundColor = 'orange'
        res.innerHTML = ('O aluno esta em <strong>RECUPERAÇÃO</strong>')
    } else {
        document.body.style.backgroundColor = 'red';
        document.querySelector('.demo').style.backgroundColor = 'red'
        res.innerHTML = ('O aluno esta <strong>REPROVADO</strong>')
    }
}
