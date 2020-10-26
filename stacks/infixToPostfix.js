// Convert infix to postfix 

// Enter the expression here.
// let expr = '2 + 3';
let expr = prompt('Enter the infix expression')


function stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;

  function push(item){
    this.dataStore[this.top++] = item;
  }

  function pop(){
    return this.dataStore[--this.top];
  }
}

let operand = new stack();
let operator = new stack();

// Step 1 :- Check that the expression is infix


let num1 = '';
let num2 = '';
let oper = '';

let i = 0;
 while(expr[i] != ' '){
  num1 += expr[i];
  i++;
 }
 i++;
 while(expr[i] != ' '){
  oper += expr[i];
  i++;
 }
 i++;

 while(i < expr.length){
 num2 += expr[i];
 i++;
 }

let temp1 = parseInt(num1)
let temp2 = parseInt(num2)

 if(isNaN(temp1) || isNaN(temp2)){
   console.log(`Either the input expression isn't in infix format, or proper spacing is not maintained between operands and operators in the expression.`);
 }
 else{

// Step 2 :- Convert infix expression to corresponding postfix expression
   operand.push(num2);
   operand.push(num1);
   operator.push(oper);

   console.log(`The post-fix notation of the expression ${expr} is :- `);
   console.log(`${operand.pop()} ${operand.pop()} ${operator.pop()}`)
}