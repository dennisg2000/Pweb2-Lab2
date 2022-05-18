var url=document.getElementById("url").value
var por=url.indexOf("c")+4
var codigoGuion=url.substring(por,por+12)
console.log(codigoGuion)
var codigo=""
for(var i=0;i<codigoGuion.length;i++){
    if(codigoGuion.charAt(i)=="-")
        continue
    else codigo+=codigoGuion.charAt(i)
}
console.log(codigo)
function mostrar(){
    document.getElementById("mostrar").innerHTML="El codigo es: "+codigo
}