//DATOS BASe
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const divisor = 23;

//1
let num_dni = prompt("Entra tu dni");
let letra_dni = letras[num_dni%divisor];
console.log(letra_dni);

//2
let num_dni = prompt("Entra tu dni");
(num_dni/10<0 || num_dni/10 >99999999) ? alert("Número no válido") : console.log("ok");

//3
let num_dni = prompt("Entra tu dni");
(num_dni<0/10 || num_dni/10 >99999999) ? alert("Número no válido") : console.log(letras[num_dni%divisor]);

//4
let num_dni = prompt("Entra tu dni");
(num_dni.substring(0, num_dni.length-1)<0 || num_dni.substring(0, num_dni.length-1) >99999999) ? alert("Número no válido") : 
    (letras[num_dni.substring(0, num_dni.length-1)%divisor] !== num_dni.substring(num_dni.length-1))? alert("Has introducido la letra incorrecta"):alert("Número y letra de dni correctos");