"use strict";
let vetor = [10, 12, 15, 20, 22];
let numero = 3;
// Utilizando o for:
// for (let i = 0; i < vetor.length; i++) {
//     console.log(`O número ${vetor[i]} somado com ${numero} é = ${vetor[i] + numero}`); 
// }
// forEach é uma alternativa para o for, assim como o map
vetor.forEach(e => {
    console.log(`O número ${e} somado com ${numero} é = ${e + numero}`);
});
