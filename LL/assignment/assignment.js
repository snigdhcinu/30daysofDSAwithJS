/*

Ques1. Write Algorithm and programme in javascript for Creating a
 Doubly Circular Linked List which can contain duplicate values. 

Ques 2. Write a programme to insert all values from 
Doubly Circular Linked List to an array. The output array 
should contain unique values.
*/

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
  this.set = set;
  this.findLast = findLast;
  this.dispRev_dll = dispRev_dll;


  // To find a specific item
  function find(element){
    let curr = this.head;
    while(curr.element !== element){
      if(curr.next === this.head){
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
    newNode.next = this.head;

    if(curr.next == null){
      curr.next = newNode;
      newNode.next = this.head;
      newNode.prev = curr;
    }
    else{
      while(curr.next !== this.head){
        curr = curr.next;
      }
    curr.next = newNode;
    newNode.prev = curr;
    }
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
      console.log(` <- ${curr.element} -> `)
      curr = curr.next;
    }while(curr !== this.head);
    console.log(`<- ${curr.element}`)
  }


  function set(){

    let arr = [];
    let curr = this.head.next;
    while(curr.next !== this.head){
      if(arr.indexOf(curr.element) === -1){
        arr.push(curr.element);
      }
      curr = curr.next
    }
    return arr;
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
    if(element.next !== this.prev){
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

  // Display items of the list in reverse.
  function findLast(){
    let curr = this.head;
    while(curr.next !== this.head){
      curr = curr.next;
    }
    return curr;
  }  
  function dispRev_dll(){
    let tail = this.findLast();
    let curr = tail;
    while(curr.prev.element !== 'head'){
      console.log(`${curr.element} ->`)
      curr = curr.prev;
    }
    console.log('head')
  }
}

let list = new dll();

let items_to_insert = [1,2,3,3,4,1,8,5,10,32,26,54,33,87,32,22,33,67,98,54,32,12,43,56,7,6,32]
for( let x of items_to_insert){
  list.append(x)
}

// Displaying the contents of circular DLL
console.log('displaying the contents of the circular DLL');
list.display();
console.log('------------')

// Flexing the doubly nature of our circular DLL by using Dll  nature.

console.log('displaying the content of the circular DLL in reverse order using DLL approach')
list.dispRev_dll();
console.log('------------')

// Displaying the unique array items
console.log('displating the unique items in the our circular doubly linkedlist')
let unique_items = list.set();
console.log(unique_items);