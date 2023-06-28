// Ejercicio 1 

function verificarParidad(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " es un número impar");
    }
  }
  
  verificarParidad(5); 
  verificarParidad(8); 
  
  
  // Ejercicio 2 
  
  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2 + ".");
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1 + ".");
    } else {
      console.log("Ambos números son iguales");
    }
  }
  
  compararNumeros(4, 8); 
  compararNumeros(6, 3); 
  compararNumeros(2, 2); 
  
  
  // Ejercicio 3 
  
  function verificarMultiploDe5(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5");
    } else {
      console.log(numero + " no es múltiplo de 5");
    }
  }
  
  verificarMultiploDe5(10); 
  verificarMultiploDe5(7);
  
  
  // Ejercicio 4 
  
  function imprimirNumerosHasta(numero) {
    for (let i = 1; i <= 6; i++) {
      console.log(i);
    }
  }
  
  imprimirNumerosHasta(6);
  
  
  // Ejercicio 5 
  
  function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < 3; i++) {
      console.log("Nucba");
    }
  }
  
  imprimirPalabra("Nucba", 3);
  
  
  // Ejercicio 6 
  
  function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  
  const miArray = [1, 2, 3, 4, ];
  imprimirValoresArray(miArray);
  
  
  // Ejercicio 7 
  
  function imprimirValoresMenosQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  
  const unArray = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105];
  imprimirValoresMenosQuinto(unArray);
  
  
  // Ejercicio 8 
  
  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      let resultado = array[i] * numero;
      console.log(resultado);
    }
  }
  
  
  const numeros = [1, 2, 3, 4, 5];
  multiplicarArrayPorNumero(numeros, 6);
  
  
  