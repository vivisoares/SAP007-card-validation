let VBttn = document.getElementById('ValidButton'); //** Var. para o botão receber funcionalidade


function Catching() {

    let CCardNumber = document.getElementById('creditCardNumber'); //* Guarda número do cartão 
    let CCNumber = CCardNumber.value; //* Armazenar o valor específico inputado e adicionar em outra váriavel !!!esse valor em específico!!!
    let validateCC = validator.isValid(CCNumber);

    if (validateCC) {
        outCome.textContent = 'CARTÃO VÁLIDO!' //+ mask
    } else {
        outCome.textContent = 'CARTÃO INVÁLIDO!' //+ mask
    }
}

VBttn.addEventListener("click", Catching)
let outCome = document.getElementById('OuttCome');

//* function para mostrar resultado escondido depois
// getelementbyId style.display
// let displayResultado

import validator from './validator.js';
console.log(validator);

