var palab=document.getElementById("palabra").value
var texto = ""
texto=palab
console.log(texto)
function invertir(texto){
    var invert=""
    var long=texto.length
    for(var i=long-1; i>-1 ; i--){
        invert+=texto.charAt(i);
    }
    
    document.getElementById("rpta").innerHTML=invert
}
        