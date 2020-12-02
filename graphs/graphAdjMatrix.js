// Reference material :- https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
// Adjacency Matrix implementation

class Graph{
  constructor(){
    this.AdjacencyMatrix = [];
  }
  addVertex(v){
    if(this.AdjacencyMatrix.indexOf(v) == undefined ){
      this.AdjacencyMatrix[v] = []
    }
  }
  addEdge(src,destn){
    if(this.AdjacencyMatrix.indexOf(src) == undefined){
      this.AdjacencyMatrix[src] = []
    }
    if(this.AdjacencyMatrix.indexOf(destn) == undefined){
      this.AdjacencyMatrix[destn] = []
    }
    this.AdjacencyMatrix[src][destn] = 1
    this.AdjacencyMatrix[destn][src] = 1

    this.AdjacencyMatrix.forEach((item) => {
      item.forEach((element) =>{
        if(element == undefined){
          element = 0;
        }
      })
    })
  }
  removeVertex(v){

  }
  removeEdge(src,destn){
    
  }
}

