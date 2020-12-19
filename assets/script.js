function padString(someText, stringLength, symbol, flag) {
  var result = '';

  if (symbol.length > 1) {
    alert('Oops... Third parameter must be a single symbol');
  } else {
    if (someText.length < stringLength) {
      if (flag) {
        result = someText;
  
        for (i = 1; i <= (stringLength - someText.length); i++) {
          result += symbol;
        }
      } else {
        for (i = 1; i <= (stringLength - someText.length); i++) {
          result += symbol;
        }
  
        result += someText;
      }
    } else {
      result = someText;
    }
  
    return result;
  }
}

var functionResult = padString('Come On', 12, '*', true);

alert(functionResult);

