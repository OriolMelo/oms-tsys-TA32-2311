function par_impar(numero){
    let resultado;
    if(numero == null || numero== ""){
        resultado="No has introducido un número";
    }
    else{
        resultado ="par";
        if(numero%2 != 0){
            resultado = "impar"
        }
    }
    return resultado;
}

let num=prompt("Entra el número deseado");
alert(par_impar(num));