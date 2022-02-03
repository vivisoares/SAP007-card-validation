


let CCardNumber = document.getElementById('creditCardNumber'); //* Guarda número do cartão 
let VBttn = document.getElementById('ValidButton'); //** Var. para o botão receber funcionalidade

function Catching() {

    let CCNumber = CCardNumber.value; //* Armazenar o valor específico inputado e adicionar em outra váriavel !!!esse valor em específico!!!

    let outCome = document.getElementById('OuttCome');
    let validateCC = validator.isValid(CCNumber);
//   console.log(validateCC);

    if(validateCC) {
        outCome.textContent = 'CARTÃO VÁLIDO!' //+ mask
    }else 
        outCome.textContent = 'CARTÃO INVÁLIDO!' //+ mask
    }   
    
//* function para mostrar resultado escondido depois
// getelementbyId style.display
// let displayResultado
    VBttn.addEventListener("click", Catching) 

import validator from './validator.js';
console.log(validator);

