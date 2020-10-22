function stack(){
  this.dataStore = [];
  this.top = 0; // Refers to the vacant index where item is entered.
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.length = length ; 
  this.clear = clear;

  function push(item){
    this.dataStore[this.top] = item;
    this.top += 1;
  }

  function pop(){
    return  this.dataStore[--this.top]
  }

  function peek(){
    return this.dataStore[this.top - 1]
  }

  function length(){
    // Since 1st position is denoted by 0.
    return this.top;
  }
  function clear(){
    this.dataStore = [];
    this.top = 0;
  }
}

let pile = new stack();

for(let i = 0 ; i <= 9 ; i++){
  pile.push(i);
}

console.log(pile.length());
