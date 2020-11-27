// Implementing BST Search


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
  // Traversal methods
  this.inorder = inorder;
  this.preorder = preorder;
  this.postorder = postorder;

  function insert(data){

    let newNode = new node(data);
    if(this.root == null ){
      this.root = newNode;
    }else{
        let curr = this.root
        let parent;
        while(1){
          parent = curr;
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
    // console.log(`inserting ${data} into the tree as child node `)
  }

  // Traversal method definitions
  function inorder(node){
    if(node != null){
      inorder(node.left);
      console.log(node.show());
      inorder(node.right);
    }
    else{
      return ;
    }
  }
  function preorder(node){
    if(node != null){
      console.log(node.show());
      preorder(node.left);
      preorder(node.right);
    }
    else{
      return ;
    }
  }
  function postorder(node){
    if(node != null){
      postorder(node.left);
      postorder(node.right);
      console.log(node.show());
    }
    else{
      return ;
    }
    
  }
}

let tree = new BST();

for (let i = 0; i< 10 ; i++){
  tree.insert(i);
}
// console.log(tree.root)

    // Uncomment below lines of codes to see the traversal methods.

// console.log('inorder traversal -- ')
// tree.inorder(tree.root)

// console.log('--preorder traversal--')
// tree.preorder(tree.root);

// console.log('--postorder traversal--');
// tree.postorder(this.root);