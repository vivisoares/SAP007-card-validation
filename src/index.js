import validator from './validator.js';

const validBttn = document.getElementById('validButton');
const outCome = document.getElementById('outCome');

function Catching() {
    const inputCreditCardNumber = document.getElementById('creditCardNumber'); 
    let creditCardNumber = inputCreditCardNumber.value;
    if (creditCardNumber == null || creditCardNumber == "" || creditCardNumber == "e") {
    alert('Por favor, preencha os campos corretamente!')
} 
    else {
    const maskValue = validator.maskify(creditCardNumber);
    const validateCreditCard = validator.isValid(creditCardNumber);

    if (validateCreditCard) {
        outCome.textContent = 'CARTÃO FINAL ' + maskValue + ' É VÁLIDO!' 
    } 
    else {
            outCome.textContent = 'CARTÃO INVÁLIDO! ' + ' TENTE NOVAMENTE.' 
        }
    }
    document.getElementById('creditCardNumber', 'expirationDate' , 'creditCardName' , 'cardVerificationValue').value = ''
}
validBttn.addEventListener("click", Catching);


