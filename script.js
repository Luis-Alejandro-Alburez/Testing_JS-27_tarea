/*                  El mÃ©todo .map()      

El segundo iterador que vamos a cubrir es .map().

Cuando .map() se invoca en una matriz, toma un argumento de una 
funciÃ³n de devoluciÃ³n de llamada (callback) y devuelve una nueva matriz..
Observa el ejemplo de llamada .map():

*/
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map((number) => {
  return number * 10;
});

/* .map() funciona de manera similar a .forEach(). La principal
diferencia es que .map() devuelve una nueva matriz. 

En el ejemplo anterior
 
 + numbers es una matriz de nÃºmeros.
 + bigNumbers almacenarÃ¡ el valor de retorno de la llamada .map() a
   *numbers.
 + numbers.map iterarÃ¡ a travÃ©s de cada elemento de la matriz numbers y
   pasarÃ¡ el elemento a la funciÃ³n de devoluciÃ³n de llamada (callback).
 + return number * 10 es el cÃ³digo que queremos ejecutar en cada elemento
   del array.  Esto guardarÃ¡ cada valor del array numbers multiplicado
   por 10 en la matriz bigNumbers.

   Obsrvemos a numbers y bigNumbers:
   */
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

/*EJERCICIO: 
   
    Paso 1:
    AÃ±ade tu cÃ³digo debajo de la matriz animals y antes de la lÃ­nea 
    console.log(secretMessage.join(''));
   */
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below

const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join(""));

const bigNumbers2 = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers2.map((number) => {
  return number / 100;
});

console.log(smallNumbers);
/*
    Paso 2:
    Utiliza .map() para dividir todos los nÃºmeros bigNumbers
    entre  100.  Guarda los valores devueltos en una variable
    declarada con const llamada smallNumbers*/
