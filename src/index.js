import validator from './validator.js';

let VBttn = document.getElementById('ValidButton');

function Catching() {

    let inputCCardNumber = document.getElementById('creditCardNumber'); 
    let CCNumber = inputCCardNumber.value;

    if (CCNumber == null || CCNumber == "" || CCNumber == "e") {
        alert('Por favor, preencha os campos corretamente!')
    } else {
        let maskValue = validator.maskify(CCNumber);
        let validateCC = validator.isValid(CCNumber);
        if (validateCC) {
            outCome.textContent = 'CARTÃO FINAL ' + maskValue + ' É VÁLIDO!' 
        } else {
            outCome.textContent = 'CARTÃO FINAL ' + maskValue + ' É INVÁLIDO! ' + ' TENTE NOVAMENTE.' 
        }
        document.getElementById('creditCardNumber').value = ''
    }
}

VBttn.addEventListener("click", Catching)
let outCome = document.getElementById('OuttCome');

