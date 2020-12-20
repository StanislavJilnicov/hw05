function checkSymbol(symbol, symbolAmount) {
  return symbol.length === symbolAmount;
}

function padString(someText, stringLength, symbol, flag, checker) {
  var addSymbol = '';

  if (checker(symbol)) {
    if (someText.length < stringLength) {
      for (i = 1; i <= (stringLength - someText.length); i++) {
        addSymbol += symbol;
      }

      if (flag) {
        return someText + addSymbol;
      } else {
        return addSymbol + someText;
      }
    } else {
      return someText;
    }
  }

  return 'Oops... Third parameter must be a single symbol';
}

var result = padString('Hillel Forever', 20, '*', true, function(a) {return checkSymbol(a, 1)});

alert(result);
