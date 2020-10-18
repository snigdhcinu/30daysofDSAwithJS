function node(element){
  this.data = element;
  this.next = null;
}

function cll(){
  this.head = new node('head');
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.append = append;
  this.display = display;
  this.remove = remove;
  this.findPrev = findPrev;

  //  Inserting new nodes

  function find(item){
    let curr = this.head;
    while(curr.next !== this.head){
      if(curr.data === item ){
        return curr
      }
      curr = curr.next;
    }
    return -1;
  }

  
  function insert(element,item){
    let target = this.find(item);
    let newNode = new node(element)
    if(target !== -1){
      newNode.next = target.next;
      target.next = newNode;
    }
    else{
      this.head.next = newNode;
    }
  }

  function append(element){
    let newNode = new node(element);
    let curr = this.head;

    while(curr.next != this.head){
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  // Removing a particular item from cll

  function findPrev(item){
    let curr = this.head;
    while(curr.next.data !== item){
      curr = curr.next;
    }
    return curr;
  }

  function remove(item){
    let prev = this.findPrev(item);
    let target = this.find(item);
    prev.next = prev.next.next;
    target.next = null; // For garbage collection
  }

  // Dispaly elements of cll
  function display(){
    let curr = this.head;
    while(curr.next !== this.head){
      console.log(`${curr.data} ->`)
      curr = curr.next;
    }
  }
}

let list = new cll();

for(let i = 1; i <= 10; i++){
  list.append(i);
}
list.remove(5);
list.display();
