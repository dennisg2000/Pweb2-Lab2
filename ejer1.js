
let fecha = new Date()
var dia=fecha.getDay()
console.log(dia)
numdia(dia)
function numdia(dia){
    switch (dia){
        case 0: document.getElementById("hoy").innerHTML="Domingo" 
        break;
        case 1: document.getElementById("hoy").innerHTML="Lunes" 
        break;
        case 2: document.getElementById("hoy").innerHTML="Martes"  
        break;
        case 3: document.getElementById("hoy").innerHTML="Miercoels" 
        break;
        case 4: document.getElementById("hoy").innerHTML="Jueves" 
        break;
        case 5: document.getElementById("hoy").innerHTML="viernes" 
        break;
        case 6:document.getElementById("hoy").innerHTML="Sabado" 
        break;
        default: document.getElementById("hoy").innerHTML="no es un dia" 
    }
}