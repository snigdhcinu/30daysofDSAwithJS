// Program to implement a queue in JS

function queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.isEmpty = isEmpty;

  // We'll make use of shift, unshift, push, pop.
  // Otherwise use a top variable to know the topmost element.
  
  function enqueue(item){    
    this.dataStore.push(item);
  }

  function dequeue(){
   return this.dataStore.shift();
  }

  function front(){
    return this.dataStore[0];
  }

  function back(){
    return this.dataStore[this.dataStore.length - 1];
  }

  function toString(){
    let result = '|';
    for(let i = 0 ; i < this.dataStore.length ; i++){
      result += this.dataStore[i]+'|';
    }
    return result;
  }
  function isEmpty(){
   if(this.dataStore.length === 0){
     return true;
   }else{
     return false;
   }
  }
}