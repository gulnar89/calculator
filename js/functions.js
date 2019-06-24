//jshint esversion:6
// if(calc.length>10){
//   calc = calc.slice(0,11);
// }

const calculate = (firstValue,operator,secondValue)=>{
  let calc = 0;
  let number = numeral(parseFloat(firstValue));
  switch(operator){
    case '+':
       calc = number.add(parseFloat(secondValue));
    break;
    case '-':
      calc = number.subtract(parseFloat(secondValue));
    break;
    case '*':
      calc = number.multiply(parseFloat(secondValue));
    break;
    case '/':
      calc = number.divide(parseFloat(secondValue));
    break;
  }
  calc = calc._value;
  if(calc.toString().length>10){
    calc = numeral(calc).format('0.000000000e+0');
  }
  return calc;
 };

 const renderLogs = (data)=>{
  document.querySelector('#calc-logs2').innerHTML='';
  for (let i = data.logs.length-1;i>=0;i--){
    const  p = document.createElement('p');
    p.textContent = data.logs[i];
    document.querySelector('#calc-logs2').appendChild(p);
  }
};
