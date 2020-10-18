function node(element){
  this.element = element;
  this.next = null;
  this.prev = null;
}

function dll(){
  this.head = new node('head');
  this.find = find;
  this.insert = insert;
  this.findPrev = findPrev;
  this.remove = remove;
  this.display = display;
  this.append = append;
  this.findLast = findLast;
  this.dispRev = dispRev;


  // To find a specific item
  function find(element){
    let curr = this.head;
    while(curr.element !== element){
      if(curr.next == null){
        return -1;
      }
      else{
        curr = curr.next;
      }
    }
    return curr;
  }

  // Inserting an element in the end of the list
  function append(element){
    let curr = this.head;
    let newNode = new node(element);
    while(curr.next != null){
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
    console.log(`adding ${element} to the list`)
  }

  // Inserting an element after an item
  function insert(element,item){
    let newNode = new node(element);
    let target = find(item);
    
    if(target !== -1){
      newNode.next = target.next;
      target.next = newNode;
      newNode.prev = target;
    }
    else{
      return `${item} was not found in the list, please re-check your input`
    }
  }

  // Display the items of doubly linked list
  function display(){
    let curr = this.head;
    do{
      console.log(`${curr.element} -> `)
      curr = curr.next;
    }while(curr != null);
  }

   //  Display the linked list in reverse
  
   function findLast(){
    let curr = this.head;
    while(curr.next != null){
      curr = curr.next;
    }
    return curr;
  }

  function dispRev(){
    let tail = this.findLast();
    let curr = tail;
    while(curr.prev.element !== 'head'){
      console.log(`${curr.element} ->`)
      curr = curr.prev;
    }
    console.log('head')
  }

  // Delete a particular item
  function findPrev(item){
    let curr = this.head;
    while(curr.next !== item){
      curr = curr.next;
    }
    return curr;
  }
  function remove(item){
    let element = this.findPrev(item);
    if(element.next != null){
      let item = element.next;
      element.next = element.next.next;
      element.next.next.prev = element.next;
      item.next = null;
      item.prev = null;
    }
    else{
      return `${item} was not found in the list, please re-check your input`
    }
  }
 
}

let list = new dll();
for(let i = 0; i < 10; i++){
  list.append(i)
}
list.display();

console.log('hello world')

list.dispRev();

