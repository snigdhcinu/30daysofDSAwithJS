// Keeping track of occurence of data in a dataset using BST.

function node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.count = 1;
  this.show = show;

  function show(){
    return this.data;
  }
}

function bst(){
  this.root = null;
  this.insert = insert;
  this.occurence = occurence;

  function insert(data){
    let newNode = new node(data,null,null);
    let curr = this.root;
    if(curr == null){
      this.root = newNode;
      return ;
    }
    else{

      while(1){
        if(curr.data < newNode.data){
          if(curr.right == null){
            curr.right = newNode
            return ;
          }
          curr = curr.right;

        }
        if(curr.data > newNode.data){
          if(curr.left == null){
            curr.left = newNode;
            return ;
          }
          curr = curr.left;

        }
        if(curr.data == newNode.data){
          curr.count += 1;
          return;
        }
      }
    }
  }

  // Helper function for occurence method of class bst .
  function traverse(node){
    // Use post order traversal
    // The reason being because of the implementation, program will end once root
    //    node is printed, so we want root node to be printed in the last.
    let curr = node;
    if(curr == null){
      return;
    }
    else{
      traverse(curr.left);
      traverse(curr.right);
      console.log(`${curr.data} -> ${curr.count}`)
    }
  }

  function occurence(){
    let curr = this.root;
    if(curr == null){
      console.log('There is no occurence of any item in the tree !!')
    }
    else{
      console.log('The display format is as under :- ')
      console.log('Data -> No. of Occurences')
      console.log('____________________________')
      while(curr != null){
        traverse(curr);
        break;
      }
    }
  }
}

let tree = new bst();

// for (let i = 0; i< 10 ; i++){
    // console.log(`Inserting ${i}`)
//   tree.insert(i);
// }

let arr = [12,221,23,32,34,23,54,32,12,23,43,45,32,12,23]

for (let i = 0; i< arr.length ; i++){
    console.log(`Inserting ${arr[i]}`)
    tree.insert(arr[i]);
  }

tree.occurence()