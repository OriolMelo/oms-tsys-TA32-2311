function palindromo(frase){
    frase=frase.toLowerCase();
    let i=0;
    let j=frase.length-1;
    let palindromo=true;
    while(i<j && palindromo){
        while(frase[i]===" "){
            i++;
        }
        while(frase[j]===" "){
            j--;
        }
        palindromo = frase[i] === frase[j];
        if(palindromo){
            i++;
            j--;
        }
    }
    return palindromo;
}

let frase = prompt("Entra tu frase");
if(palindromo(frase)){
    console.log("La frase es un palíndromo");
}
else{
    console.log("No es un palíndromo")
}