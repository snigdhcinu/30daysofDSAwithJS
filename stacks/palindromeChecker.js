// WAP to check whether a string is a palindrome or not.

function checker(){
  this.dataStore = [];
  this.top = 0;
  this.peek = peek;
  this.push = push;
  this.pop = pop;
  this.length = length;

  function push(item){
    this.dataStore[this.top] = item;
    this.top += 1; 
  }

  function peek(){
    return this.dataStore[this.top - 1];
  }

  function pop(){
   return this.dataStore[--this.top];
  }

  function length(){
    return this.top;
  }

}

let string = 'fdodf';
let result = new checker();
let temp = new checker();
for(let i = 0 ; i < string.length ; i++){
  temp.push(string[i])
}

for(let i = 0 ; i < string.length ; i++){
  result.push(temp.pop());
}

result = result.dataStore.join('')


if(result === string){
  console.log( 'they are palindrome')
}
else{
  console.log( 'they aren\'t palindrom')
}

