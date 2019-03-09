const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display')




keys.addEventListener('click', e =>{
    
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent
        const displayedNum = display.textContent
    }
    if(!action){
        if(displayedNum === '0'){
            display.textContent = keyContent
        }else {
            display.textContent = displayedNum + keyContent
        }
    }
    
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
       key.classList.add('is-depressed')
      }
    
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      if (action === 'clear') {
        console.log('clear key!')
      }
      if (action === 'calculate') {
        console.log('equal key!')
      }
});




function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    if(operator === add){
        return add(num1,num2);
    }else if( operator === subtract){
        return subtract(num1,num2);
    }else if(operator === multiply){
        return multiply(num1,num2);
    }else{
        return divide(num1,num2);
    }
}