console.log("hello world");
class Calculator {
    constructor (currentOperandElement, previousOperandElement) {
        this.currentOperandElement = currentOperandElement;
        this.previousOperandElement = previousOperandElement;
        this.allClear();
        }
    
    clear () {
        
        this.currentOperand = this.currentOperand.slice(0,-1);

    }
    
    
    allClear () {
        this.currentOperand="";
        this.previousOperand="";
    
        }
    
    
    append (num) {
        if(num==="."  && this.currentOperand.includes('.')) return;
            this.currentOperand=this.currentOperand.toString()+num.toString();
        
    
        }


     updateDisplay () {
            this.currentOperandElement.innerText =this.currentOperand;
            this.previousOperandElement.innerText=this.previousOperand;

        }

    chooseOperation (operator) {
        if (operator!==null  && this.currentOperand ==='')return;
          if(this.previousOperand!=='') {
                this.compute();
            }
            
                this.operator=operator;
                this.previousOperand = this.currentOperand.toString()+ operator.toString();
                this.currentOperand ='';
                if (this.currentOperand ==='' || this.previousOperand=== '')return;
            
    }

    compute () {
        let computation;
        //if(this.previousOperand = '') return;
      //  if(this.currentOperand='')return;
        let prev = parseFloat(this.previousOperand);
        let cur = parseFloat(this.currentOperand);
        switch (this.operator) {
            case '+': 
            computation = prev + cur;
            break;
            case '-':
            computation = prev-cur;
            break;
            case '/': 
            computation = prev/cur;
            break;
            case 'x': 
            computation = prev*cur;
            break;
            default:
                return

            }

            this.currentOperand =computation.toString();
            this.previousOperand='';
            
    }
}
var numberButtons = document.querySelectorAll ('.number-btn');
var operatorButton = document.querySelectorAll('.operator-btn');
var currentOperandElement = document.querySelector('.current-operand');
var previousOperandElement = document.querySelector('.previous-operand');
var equalsButton = document.querySelector('.equals-btn');
var deleteButton = document.querySelector('.del-btn');
var clearButton = document.querySelector('.clear-btn');
var currentOperand;
var previousOperand;






var calculator = new Calculator(currentOperandElement, previousOperandElement);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
   calculator.append(button.innerText);
    calculator.updateDisplay();
    
        console.log('working');
    })
})


clearButton.addEventListener('click', () => {
calculator.allClear();
calculator.updateDisplay();
})



deleteButton.addEventListener('click', () => {
calculator.clear();
calculator.updateDisplay();

})

operatorButton.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
        
        
    })

})

equalsButton.addEventListener('click', ()=> {
  
    calculator.compute();
    calculator.updateDisplay();
    
})



















































