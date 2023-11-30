function tipo_cadena(cadena){
    let tipo;
    if(cadena === null || cadena ===""){
        tipo = "String vacio";
    }
    else{
        tipo = "Ambas"
        if(cadena===cadena.toUpperCase()){
            tipo = "Mayúsculas";
        }
        else if(cadena===cadena.toLowerCase()){
            tipo = "Minúsculas";
        }
    }
    return tipo;
}

let cadena = prompt("Entra la cadena");
alert(tipo_cadena(cadena)); 