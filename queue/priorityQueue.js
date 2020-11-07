// Priority Queue Implementation, elements are removed from here based on their priority

// Every other definition is same as for a normal queue, except for these ones.

function Person(name, code){
  this.name = name;
  this.code = code;
}

function dequeue(){
  let priority = this.dataStore[0].code;
  for(let i = 0; i < this.dataStore.length; i++){
    if(this.dataStore[i].code < priority){
      priority = i;
    }
  }
  return this.dataStore.splice(priority,1);
}

function toString(){
  let retStr = ' ';
  for(let i = 0; i < this.dataStore.length; i++){
    retStr += this.dataStore[i].name +'Code :'+this.dataStore[i].code+'\n';
  }
  return retStr;
}