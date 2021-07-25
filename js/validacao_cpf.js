


function valida_cpf(cpf = 0){
    var cpf = document.getElementById("cpf");
    console.log(cpf.value);
    cpf = cpf.value.replace(/\.|-/g,"");
    console.log(cpf);
     let soma = 0;
    for (x=0; x < 9; x++){
        soma += cpf[x] * (10 -x);
    }
    console.log(soma);
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0;
    }

    if(soma != cpf[9]){
        console.log("erro 1");
        var container = document.getElementById("hidden");
        container.ad
        console.log("erro 1");
        return false
    }
    console.log(soma);
    soma = 0;

    for (x=0; x < 10; x++){
        soma += cpf[x] * (11 -x);
    }
    console.log(soma);
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0;
    }

    if(soma != cpf[10]){
        console.log("erro 2");
        var container = document.getElementById("#error");
        container.style.display = "block";
        return false
    }
    
    console.log("validado");
    console.log(soma);
    return true;
}