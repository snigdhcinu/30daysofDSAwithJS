// We are given 2 sorted LLs, we need to merge them to form a new sorted LL

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
let result = new SinglyLinkedList();

let ptr1 = head1;
let ptr2 = head2;


while( ptr1 !== null || ptr2 !== null ){
  if( ptr1 === null && ptr2 !== null ){
    result.insertNode(ptr2.data);
    ptr2 = ptr2.next;
  }
  if( ptr2 === null && ptr1 !== null ){
    result.insertNode(ptr1.data);
    ptr1 = ptr1.next;
  }
  if( ptr1 !== null && ptr2 !== null ){
    if ( ptr1.data < ptr2.data ){
      result.insertNode(ptr1.data);
      ptr1 = ptr1.next;
    }
    else{
      result.insertNode(ptr2.data);
      ptr2 = ptr2.next;
    }
  }
}
  console.log(ptr1);
  console.log(ptr2);
  // console.log(ptr1 === null)
  return result.head;
}