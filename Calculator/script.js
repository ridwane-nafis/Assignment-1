function calculate() {
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultDisplay = document.getElementById('result');
  
     
    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.classList.remove('d-none');
      resultDisplay.classList.add('alert-danger');
      resultDisplay.innerHTML = "Enter Numbers First! Thankyou";
      return;
    }
   
    var result;
    switch(operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          resultDisplay.classList.remove('d-none');
          resultDisplay.classList.add('alert-danger');
          resultDisplay.innerHTML = "Sorry! Not Possible to devide by Zero!";
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultDisplay.classList.remove('d-none');
        resultDisplay.classList.add('alert-danger');
        resultDisplay.innerHTML = "Sad! Invalid operation!";
        return;
    }
  
  
    resultDisplay.classList.remove('d-none');
    resultDisplay.classList.remove('alert-danger');
    resultDisplay.classList.add('alert-info');
    resultDisplay.innerHTML = "Success! Your Result is: " + result;
  }
  