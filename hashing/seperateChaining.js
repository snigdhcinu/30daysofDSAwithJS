// Implementing handling collision using linear probing approach
// Note that with JS we do not need to use new Array() approach, however so that we have a general understanding of what we are doing, and do the same across all languages, that is why we have used this approach.

function hashTable(){
  this.table = new Array(255);  // dataStore
  this.values = new Array(255)
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

  function put(key,data){
    let pos = this.hash(key);
    if(this.table[pos] == undefined){
      this.table[pos] = key;
      this.values[pos] = data;
    }else{
      while (this.table[pos] !== undefined) {
        pos += 1;
      }
      this.table[pos] = key;
      this.values[pos] = data;
    }
  }

  function get(key){
    let hash = -1;
    hash = this.hash(key);
    if(hash > -1){
      for(let i = hash; this.table[hash] !== undefined ; i++){
        if(this.table[i] == key){
          return this.values[i];
        }
      }
    }
    return undefined;
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

