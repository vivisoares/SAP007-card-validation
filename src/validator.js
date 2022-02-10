const validator = {
  isValid(creditCardNumber) {
    const arrayCCNumber = creditCardNumber.split(''); 
    const indexCreditCardNumber = arrayCCNumber.reverse();
    // let indexCreditCardNumber = Number(CCNumber);
    let sum = 0;
    for (let i = 0; i < indexCreditCardNumber.length; i++) {
      
    if (i % 2 != 0) {
    indexCreditCardNumber[i] *= 2;

      if (indexCreditCardNumber[i] > 9) {
          indexCreditCardNumber[i] -= 9;  
      } 
    } 
    else {
    sum += indexCreditCardNumber[i];
    }  
  }

  if (sum % 10 == 0) 
  {
  return;
  } 
  else 
  {
  return false;
  }
}
  ,

  maskify(creditCardNumber) { 
  let maskCreditCardNumber = Array.from(creditCardNumber);
  const lastFourNumbers = 4

    for (let i = 0; i < maskCreditCardNumber.length - lastFourNumbers; i++) {
      maskCreditCardNumber[i] = "#"
  }
    const joiningArrayCreditCardNumber = maskCreditCardNumber.join('');
    return joiningArrayCreditCardNumber
}}

export default validator
