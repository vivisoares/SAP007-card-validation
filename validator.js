
const validator = {
  isValid(inputCCNumber) {

    let arrayCCNumber = inputCCNumber.split(''); //* Valor em array
    let CCNumber = (arrayCCNumber.reverse()); //* Valor ao contrário

    let soma = 0;
    for (let i = 0; i < CCNumber.length; i++) {

      if (i % 2 != 0) {
        CCNumber[i] = (Number(CCNumber[i])) * 2;

        if (CCNumber[i] > 9) {
          CCNumber[i] = CCNumber[i] - 9;

          soma = soma + Number(CCNumber[i]);
        }
        else
          soma = soma + (CCNumber[i]);
      }
      else
        soma = soma + Number(CCNumber[i]);
    }

    if (soma % 10 == 0) {
      return true
    }
    else {
      return false
    }
  }
,

  maskify(CCNumber) {
    let maskCCN = Array.from(CCNumber);
    const lastFourNumbers = 4
    
    for (let i = 0; i < maskCCN.length - lastFourNumbers; i++) {
    maskCCN[i] = "#"
    }
    let joinCCN = maskCCN.join('');
    return joinCCN
  }
}

export default validator
