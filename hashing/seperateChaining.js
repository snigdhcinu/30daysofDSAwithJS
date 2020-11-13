// Implementing handling collision using seperate chaining approach
// Note that with JS we do not need to use new Array() approach, however so that we have a general understanding of what we are doing, and do the same across all languages, that is why we have used this approach.

function hashTable(){
  this.table = new Array(255);  // dataStore
  this.hash = hash;   // simple hash function
  this.showDistro = showDistro;   // display data from hash table
  this.put = put;   // put data in hash table
  this.get = get; // retrieve data from the hash table


  for(let i = 0; i < this.table.length ; i++){
    this.table[i] = new Array(20);
  }
  // Choice of hash function depends on datatype of key
  function hash(data){
    if(typeof(data) == Number){

    }
    if(typeof(data) == String){
      let total = 0;
      for(let i = 0 ; i < data.length ; i++){
        total += data.charCodeAt(i);
      }
      return total % this.table.length;
    }
  }

  function put(data){
    let index = hash(data); 
    let i = 0;

    while(this.table[index][i] !== undefined){
      i+=1;
    }
    if(i == this.table[index].length) {
      this.table[index][i].push(data);
    }else{
      this.table[index][i] = data;
    }

  }

  function get(key){
  	let index = this.hash(key);
    let i = 0;

    // Searching algo on this.table[index] array, scope of improvement in implementation.
    while(this.table[index][i] !== key){
      i+=1;
    }
    if(i == this.table[index].length){
      console.log(`${key} not present in the hashTable`)
    }
    else{
      return this.table[index][i]
    }
  }

  function showDistro(){
    let n = 0;
    for(let i = 0; i < this.table.length ; i++){
      if(this.table[i] != undefined){
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }



}

