// Square ball 

let males = ['a','b','c','d','e','f','g','h','i','j','k','l'];
let females = ['Q','W','E','R','T','Y','U','I','O','P','A','S'];
let result = main();
for( let i = 0; i < result.length ; i++){
  console.log(`${result[i][0]} is paired with ${result[i][1]}`)
}

function main(){
let result = pair(males, females);
return result;
}

function queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.toString = toString;

  function enqueue(item){
    this.dataStore.push(item);
  }

  function dequeue(){
    return this.dataStore.shift();
  }

  function toString(){
    let result = '|';
    for(let i = 0 ; i < this.dataStore.length ; i++){
      result += this.dataStore[i]+'|';
    }
    return result;
  }
}

function pair(x,y){
  let m = new queue();
  let f = new queue();
  let result = [];
  // populate the queue | Users registering themselves
  for(let i = 0 ; i < x.length ; i++ ){
    m.enqueue(x[i]);
  }
  for(let i = 0 ; i < y.length ; i++ ){
    f.enqueue(y[i]);
  }

  // console.log(m.toString());
  // console.log(f.toString());

  // pair up the users
  for(let i = 0 ; i < x.length && i < y.length ; i++){
    result[i] = new Array(2);
    result[i][0] = m.dequeue();
    result[i][1] = f.dequeue();
  }

return result;

}