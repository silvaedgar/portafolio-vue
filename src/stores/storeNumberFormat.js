export function numberMask(nro, decimals) {

  if (typeof nro != 'string') alert("Error en tipo de dato en number mask");

  var numberText = nro;


  numberText = numberText.replace(/([^0-9\.]+)/g, "");
  let arrayNumber = numberText.split(".");
  let intPart = arrayNumber[0];
  numberText = intPart
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})/g, "$1,");
  // lo anterior invierte el nro colocando una coma cada 3 digitos (111, o 002,1)
  numberText = numberText.split("").reverse().join("").replace(/^[\,]/, "");
  // lo anterior vuelve a invertir el numero con la coma incluida (1,200)
  // numberText = numberText.replace(/0(\d)/, '$1')
  // console.log("AFTER last REPL ", numberText)
  if (arrayNumber[1] != undefined) {
    let decimalPart = arrayNumber[1];
    switch (decimals) {
      case 4:
        decimalPart = decimalPart.replace(/(\d)(\d)(\d)(\d)(\d)*/g, "$1$2$3$4");
        break;
      case 3:
        decimalPart = decimalPart.replace(/(\d)(\d)(\d)(\d)*/g, "$1$2$3");
        break;
      case 0:
        decimalPart = decimalPart.replace(/[*]/g, "");
        break;
      default:
        decimalPart = decimalPart.replace(/(\d)(\d)(\d)*/g, "$1$2");
    }
    if (decimals > 0) numberText = numberText + "." + decimalPart;
  }
//   handleSubmit();
  return numberText;
}


export function strToNumber(numero) {

  // const numberText = numero.replace(/[^0-9]/g, "");
  return parseFloat(numero.replace(/[^0-9]/g, "")).toFixed(2)

}