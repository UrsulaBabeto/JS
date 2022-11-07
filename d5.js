function myBtn(){
        document.querySelector("#btn").style.display = "none";
    
        let metros = Number(window.prompt('Digite uma distancia em metros:'))
        const km = (metros / 1000)
        const hm = (metros /100)
        const dam = (metros /10)
        const dc = (metros*10)
        const cm = (metros*100)
        const mm = (metros *1000)
    
        let res = document.querySelector(".demo") 
        res.innerHTML = ( `A distancia de<strong> ${metros}</strong>metros corresponde a: </br>
        ${km} em quilometros - km </br>
        ${hm} em hectometros - Hm </br>
        ${dam} em decametros - Dam </br>
        ${dc} em decimetros - dc </br>
        ${cm} em centimetros - cm </br>
        ${mm} em milimetros - mm `)
    
}