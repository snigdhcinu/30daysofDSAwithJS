/* 
        PROBLEM STATEMENT

According to legend, the first-century Jewish historian Flavius Josephus was about
to be captured along with a band of 40 compatriots by Roman soldiers during the
Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being
captured and devised a plan for their demise. They were to form a circle and kill
every third soldier until they were all dead. Josephus and one other decided they
wanted no part of this and quickly calculated where they needed to place themselves
so they would be the last survivors. Write a program that allows you to place n
people in a circle and specify that every mth person will be killed. The program
should determine the number of the last two people left in the circle.


*/


// n people, mth killed, till 2 left

function node(element){
  this.data = element;
  this.next = null;
}

function cll(){
  this.head = new node('head');
  this.head.next = this.head;
  this.remove = remove;
  this.length = length;
  this.append = append;
  this.display = display;
  this.safe = safe;

  this.safePos = [];
  
  
  function append(item){
    let newNode = new node(item);
    let curr = this.head;

    while(curr.next !== this.head){
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

  }
  function remove(item){
    let curr = this.head;
    while(curr.next.data !== item){
      curr = curr.next;
    }
    console.log(`Kill ${curr.next.data}`)
    curr.next = curr.next.next;
  }
  function length(){
    let count = 0;
    let curr = this.head;
    while(curr.next !== this.head){
      curr = curr.next;
      count += 1 ;
    }
    return count;
  }

  function display(){
    let curr = this.head;
    while(curr.next !== this.head){
      console.log(`Alive positions are ${curr.data}`)
      curr = curr.next;
    }
  }

  function safe(n,m,left){
    let count = 0;
    let ptr = this.head;
    let pivot;
    while( this.length() !== left){
      count += 1;
      pivot = ptr;
      if(count === m){
        this.remove(ptr.data);
        count = 0;
      }
    }
  }

}

let arrangement = new cll();
let n = 40;
let m = 3;
let left = 2;


for(let i = 0; i < n; i++){
  arrangement.append(i);
}

// arrangement.display()

console.log(arrangement.safe(n,m,left));



