function myBtn(){
    document.querySelector("#btn").style.display = "none";
    
    let ano = prompt('Qual ano você quer verificar?')
    let res = document.querySelector('.demo')
    res.innerHTML = `<bold>Analisando o ano de ${ano}...</bold>`

    if( ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
        let res1 = document.querySelector('.demo1')
        res1.innerHTML = `O ano de ${ano} é BISSEXTO`
    } else {
        let res1 = document.querySelector('.demo1')
        res1.innerHTML = `O ano de ${ano} não é BISSEXTO`
    }
}

