function insertar(){
var filas=document.getElementById("fil").value
console.log(filas)
var colum=document.getElementById("col").value
console.log(colum)
var tabla="<table  border=2><br>"
var suma=0
var num=0
for(var f=0;f<filas;f++){
    tabla+="<tr>"
    for(var c=0;c<colum;c++){
        num=Math.floor((Math.random()*101))
        tabla+="<td>"+num+"</td>"
        suma+=num
    }
    tabla+="</tr>"
}
document.getElementById("inse").innerHTML=tabla
document.getElementById("suma").innerHTML="<br>La suma es: "+suma
console.log(suma)
}