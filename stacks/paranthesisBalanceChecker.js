// Balanced Paranthesis checker.

let input = prompt('Enter the input expression')

function stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.length = length;

  function push(item){
    this.dataStore[this.top++] = item;
  }

  function pop(){
    if(this.top == 0){
      return 'empty already'
    }
    return this.dataStore[--this.top];
  }

  function length(){
    return this.top;
  }
}


// Everytime we see a '(' we push an item, and pop for ')'

let stk = new stack();
for(let i = 0; i <= input.length; i++){
  if(input[i] == '('){
    stk.push( '(' );
  }
  if(input[i] == ')'){
    stk.pop();
  }
}

if(stk.length() == 0){
  console.log('Expression has a balanced paranthesis.')
}
else{
  console.log('the paranthesis in the expression is not balanced.')
}