import validator from './validator.js';
console.log(validator);

let CCardNumber = document.getElementById('creditCardNumber'); //* Guarda número do cartão 
let VBttn = document.getElementById('ValidButton'); //** Var. para o botão receber funcionalidade

VBttn.addEventListener("click", Catching); //* Quando o botão for clicado, a função vai ser executada

function Catching() { 
    //* Função montada
 //   if (creditCardNumber, creditCardName, ExpirationDate, CardVerificationValue == '' || creditCardNumber, creditCardName, ExpirationDate, CardVerificationValue == null) {
 //       alert('Por favor, preencha todos os campos!');
 //   }
 //   else


    let  inputCCNumber = CCardNumber.value; //* Armazenar o valor específico inputado e adicionar em outra váriavel !!!esse valor em específico!!!
    console.log(inputCCNumber); //* Imprimir o valor digitado
    console.log(typeof inputCCNumber); //* String

    let arrayCCNumber = inputCCNumber.split(''); //* Valor em array
    console.log(arrayCCNumber, 'valor em array');
    console.log(typeof arrayCCNumber);

    let reverseCCNumber = arrayCCNumber.reverse(); //* Valor ao contrário
    console.log(reverseCCNumber, 'contrário');
    console.log(typeof reverseCCNumber);

    let pnumCCNumber = parseInt(reverseCCNumber); //* Valor em número, só está pegando o último
    console.log(pnumCCNumber, 'número');
    console.log(typeof pnumCCNumber);


//for (let i = 0; i < pnumCCNumber.length; i++) {

//     let soma = 0;

//      if (i % 2 === 1) {
//          valueNumber *= 2;
//         if (valueNumber > 9) {
//             valueNumber -= 9;
//        }
//        pnumCCnumber[index] = valueNumber;
 //       console.log(valueNumber, "que?");
//        soma += valueNumber;
//  console.log(arrayCCNumber);
//isValid(inputCCNumber); {
}
