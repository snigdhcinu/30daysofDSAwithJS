// Implementing BST


function node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;

  function show(){
    return this.data;
  }
}

function BST(){
  this.root = null;
  this.insert = insert;
  // this.inOrder = inOrder;

  function insert(data){

    let newNode = new node(data);
    if(this.root == null ){
      this.root = newNode;
    }else{
      while(1){
        let curr = newNode
        let parent = curr;
        if(data < curr.data){
          // goto left child
          curr = curr.left;
          if(parent.left == null){
            parent.left = newNode;
            break;
          }
        }
        else{
          // goto right child
          curr = curr.right;
          if(parent.right == null){
            parent.right = newNode;
            break;
          }
        }
      }
    }
    console.log(`inserting ${data} into the tree as child node `)
  }
}

let tree = new BST();

for (let i = 0; i< 10 ; i++){
  tree.insert(i);
}