function hashTable(){
  this.table = [];  // dataStore
  this.simpleHash = simpleHash;   // simple hash function
  this.showDistro = showDistro;   // display data from hash table
  this.put = put;   // put data in hash table

  // Choice of hash function depends on datatype of key
  function simpleHash(data){
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

  // Use horner's method of hashing.
  function betterHash(data){
    if(typeof(data) == Number){

    }
    if(typeof(data) == String){
      const H = 37; // Arbitrary Prime constant.
      let total = 0;
      for(let i = 0 ; i < data.length ; i++){
        total = H*total + data.charCodeAt(i);
      }
      return total % this.table.length;
    }
  }

  function put(data){
    // let index = simpleHash(data);
    let index = betterHash(data);
    this.table[index] = data;
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

