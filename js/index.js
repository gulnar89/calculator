//jshint esversion:6
let data = {
  'firstValue':0,
  'secondValue':0,
  'operator':'',
  'previousOperator':'',
  'operatorClicked':false,
  'currentLog':'',
  'logs':[]
};

const display = document.querySelector('#calc-display');
const currentLog = document.querySelector('#calc-current-log');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

display.value = 0;

numbers.forEach(function(number){
  number.addEventListener('click',function(e){
    const value = e.target.value;
    if(display.value === '0' || data.operatorClicked){
      display.value = value;
      if(data.operator ==='='){
        currentLog.value = '';
        currentLog.value += value;
      }else{
        currentLog.value += value;
      }
    }else{
      if(display.value.length <=10){
      display.value += value;
      currentLog.value += value;
    }
    }
    data.operatorClicked = false;
  });
});

operators.forEach(function(operator){
  operator.addEventListener('click',function(e){
    const value = e.target.value;
    if(data.operator === '='){
      data.firstValue = display.value;
      data.operator = '';
    }else if(data.operator ==''){
      data.firstValue = display.value;
      currentLog.value = display.value;
    }else if(data.operatorClicked){
      currentLog.value = currentLog.value.slice(0, -1);
    }else{
      data.secondValue = display.value;
      display.value = calculate(data.firstValue,data.operator,data.secondValue);
      data.firstValue = display.value;
    }
    currentLog.value += value;
    data.operator = value;
    data.operatorClicked = true;
  });
});

document.querySelector('#ac').addEventListener('click',function(){
  display.value = 0;
  currentLog.value='';
  data.operator ='';
  data.operatorClicked =false;
});

document.querySelector('#plus-minus').addEventListener('click',function(){
  display.value = -1*parseFloat(display.value);
  currentLog.value = '-'+currentLog.value;
});

document.querySelector('#dot').addEventListener('click',function(){

    if(data.operatorClicked & data.operator === '='){
      display.value = '0.';
      currentLog.value = '0.';
      data.operatorClicked = false;
    }else if(!data.operatorClicked){
      if(!display.value.includes('.')){
        display.value += '.';
        currentLog.value += '.';
      }
    }else if(data.operator !==''){
       display.value = '0.';
       currentLog.value += '0.';
       data.operatorClicked = false;
    }
});

document.querySelector('#percent').addEventListener('click',function(){
  data.secondValue = parseFloat(display.value) * parseFloat(data.firstValue)/100;
  display.value = data.secondValue;
  currentLog.value += '%';
});

document.querySelector('#equals').addEventListener('click',function(){
  let log =currentLog.value;
  if(data.operator ==='='){
    data.firstValue = display.value;
    data.operator = data.previousOperator;
    display.value = calculate(data.firstValue,data.operator,data.secondValue);
    log += ' '+data.operator+' '+data.secondValue;
  }else{
    data.secondValue = display.value;
    data.previousOperator = data.operator;
    display.value = calculate(data.firstValue,data.operator,data.secondValue);
  }
  log = log + ' = '+display.value;
  data.operator = '=';
  data.operatorClicked = true;
  data.logs.push(log);
  currentLog.value =display.value;
  renderLogs(data);
});

document.addEventListener('keypress',function(e){
  const key = e.key;
  if(isFinite(key)){
    document.querySelector('.btn'+key).click();
  }else{
    let classname ='';
    switch(key){
      case '+':
      classname = 'btn-plus';
      break;
      case '-':
      classname = 'btn-minus';
      break;
      case '/':
      classname = 'btn-divide';
      break;
      case '*':
      classname = 'btn-times';
      break;
      case '=':
      classname = 'btn-equals';
      break;
      case '%':
      classname = 'btn-percent';
      break;
      case '.':
      classname = 'btn-dot';
      break;
    }
    document.querySelector('.'+classname).click();
  }



});
