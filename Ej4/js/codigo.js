let valores = [true, 5, false, "hola", "adios", 2];

//Punto 1
let string_mayor ="";
valores.forEach(element => {
    if(typeof element === 'string'){
        if(element>string_mayor)
            string_mayor = element;
    }
});
console.log("Mayor string: "+string_mayor);

//Punto 2
console.log("Resultado true: "+ (valores[0]||valores[2]));
console.log("Resultado false: "+ (valores[0]&&valores[2]));

//Punto 3
let operador1 = valores[1];
let operador2 = valores[5];
console.log(operador1+operador2);
console.log(operador1-operador2);
console.log(operador1*operador2);
console.log(operador1/operador2);
console.log(operador1%operador2);