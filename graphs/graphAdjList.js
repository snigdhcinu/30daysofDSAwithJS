// Graph implementation using adjacency list 
// reference material :- https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/

// class Vertex{
//   constructor(label){
//     this.label = label;
//     // for unweighted edge, 0 and 1, 
//     // for weighted edge, 0 and weight-of-edge
//     this.visited = 0;
//   }
// }


// Let undirected graph, for derected ones, take care of not entering vice-versa thing.
class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(v){
    
    if(this.adjacencyList[v] === undefined){
      this.adjacencyList[v] = []; 
    }
  }
  addEdge(src,destn){
    if(this.adjacencyList[src] === undefined){
      this.adjacencyList[src] = [];
    }
    if(this.adjacencyList[destn] === undefined){
      this.adjacencyList[destn] = [];
    }
    this.adjacencyList[src].push(destn);
    // vice-versa thing for undirected graph
    this.adjacencyList[destn].push(src);

  }
  removeVertex(v){
    let i =0;
    while(i < this.adjacencyList[v].length){
      let tempVertex = this.adjacencyList[v].pop();
      this.removeEdge(v,tempVertex);
      i++;
    }
  }
  removeEdge(src,destn){
    this.adjacencyList[src] = this.adjacencyList[src].filter(vertex => vertex !== destn);
    this.adjacencyList[destn] = this.adjacencyList[destn].filter(vertex => vertex !== src);
  }
  showGraph(){
    for (let i in this.adjacencyList){
      console.log(`${i}-> ${this.adjacencyList[i]}`)
    }
  }
}

let g = new Graph();

// adding vertices
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);

// adding undirected edges
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,3);

g.showGraph();