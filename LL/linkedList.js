function node(element){
  this.element = element;
  this.next = null;
}

function ll(){
  this.head = new node('head');
  this.find = find;
  this.insert = insert;
  this.findPrev = findPrev;
  this.remove = remove;
  this.display = display;
  this.append = append;


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
    console.log(`adding ${element} to the list`)
  }

  // Inserting an element after an item
  function insert(element,item){
    let newNode = new node(element);
    let target = find(item);
    
    if(target > -1){
      newNode.next = target.next;
      target.next = newNode;
    }
    else{
      return `${item} was not found in the list, please re-check your input`
    }
  }

  // Display the linked list
  function display(){
    let curr = this.head;
    do{
      console.log(`${curr.element} -> `)
      curr = curr.next;
    }while(curr != null);
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
      element.next = element.next.next;
    }
    else{
      return `${item} was not found in the list, please re-check your input`
    }
  }
}

let list = new ll();
for(let i = 0; i < 10; i++){
  list.append(i)
}
list.display();

