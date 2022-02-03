
const validator = {
  isValid(inputCCNumber) {

    let arrayCCNumber = inputCCNumber.split(''); //* Valor em array
    let CCNumber = (arrayCCNumber.reverse()); //* Valor ao contrário

    let soma = 0;
    for (let i = 0; i < CCNumber.length; i++) {

         if (i % 2 != 0) {
            CCNumber[i] = (Number(CCNumber[i])) * 2;
//                                                                                    p/visualização.console.log(CCNumber)
            
            if (CCNumber[i] > 9) {
              CCNumber[i] = CCNumber[i] - 9;
//                                                                                    p/visualização.console.log(CCNumber)                
                soma = soma + Number(CCNumber[i]);
              }
              else
               soma = soma + (CCNumber[i]);
            }
            else
            soma = soma + Number(CCNumber[i]);
    }

//                                                                                    p/visualização.console.log(soma)
  
    if (soma % 10 == 0) {
      return true
    }
    else {
      return false
    }
   }
  }
  export default validator
