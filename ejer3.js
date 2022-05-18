

    var agosto =new Date('August 15, 2022')
    var mesAct =new Date()
    var diasF = 0
    var diasDmes=0
    for(var a=Number(mesAct.getMonth())+1;a<=Number(agosto.getMonth())+1;a++){
        diasDmes=new Date(2022,a,0).getDate()
        var fechaAgosto=agosto.getDate()
        var fechaAct=mesAct.getDate()
        if(a==Number(agosto.getMonth())+1)
            diasF+=fechaAgosto
        else if(a==Number(mesAct.getMonth())+1) 
            diasF+=diasDmes-fechaAct;
        else diasF+=diasDmes   ;
        console.log("mes "+a+" diasF "+diasF)  ;  
    }
    document.getElementById("falta").innerHTML="faltan : "+diasF+" para dia de Arequipa"
    
    