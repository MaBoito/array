const numeros = [ 1,2,3,2,4];// numeros primitivos

//inserindo numeros no inicio
numeros.unshift(0);
console.log(numeros);
//inserindo numeros no meio
numeros.splice(3,0,"a");
console.log(numeros);
//inserindo numeros no fim
numeros.push(5);
console.log(numeros);
//Encontrando elementos
console.log(numeros.indexOf(2));
//ENcontrar a ultima ocorrencia do valor digitado
console.log(numeros.lastIndexOf(2));
//verificar se existe ou nao 
console.log(numeros.includes(2));
// Removendo elementos do final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
// Removendo elementos do inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);
// removendo do meio 
const meio = numeros.splice(2,1);
const meio2 = numeros.splice(3,1);
console.log(meio);
console.log(meio2);
console.log(numeros);
//Esvaziando um Array
numeros.length = 0;
console.log(numeros);
// //ou
// numeros.splice(0,numeros.length);
// console.log(numeros);

//Combinando Array

const array1 = [1,2,3];
const array2 = [4,5,6];
const combinado = array1.concat(array2);
console.log(combinado);

//dividindo Array

const cortado = combinado.slice(1);
console.log(cortado);

//Clonando Array

const clonado = [... cortado];
console.log(clonado);

//Iterando Array

clonado.forEach((indice,numero)=> console.log(indice,numero));

// //ou
// for (numero of clonado)
//     console.log(numero);

console.log(combinado);

//combinando Array metodo join

const combinado2 = combinado.join(".");
console.log(combinado2);

// combinando frase

const frase = "ola seja bem vindo ao curso";
const resultado = frase.split(" ");
console.log(resultado);
console.log(resultado.join("-"));