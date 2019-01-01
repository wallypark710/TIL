# Graph

> 그래프는 노드( Node )와 그 노드를 연결하는 선( edge )을 하나로 모아놓은 자료 구조이다. 즉, 연결되어 있는 노드간의 관계를 표현할 수 있는 자료구조 이다.
>
> 트리구조와 비슷하게 생각할 수 있지만, 다른 부분이 있다.
>
> - 그래프는 루트 노드의 개념이 없다.
> - 그래프는 방향성이 존재하기도 하지만, 방향성이 존재하지 않는 그래프로 존재한다.
> - 트리는 계층 모델, 그래프는 네트워크 모델이다.

``` javascript
// Instantiate a new graph
const Graph = function () {
  this.masterNode = new Node([])
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (nodeId) {
  const edgeNode = [nodeId]; 
  const baseNode = new Node(edgeNode);
  baseNode.next = this.masterNode.next;
  this.masterNode.next = baseNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (nodeId) {
  function isContain (node, nodeId){
    if(node.id[0] === nodeId) {
      return true;
    } else {
      if(node.next !== null){
        if(isContain(node.next, nodeId)){
          return true
        }
      } else {
        return false;
      }
    }
  }

  return isContain(this.masterNode, nodeId);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (nodeId) {

  function _removeNode(node, nodeId) {
    if(node === null) return;
    const targetIndex = node.id.indexOf(nodeId);
    if(targetIndex !== -1){
      node.id.splice(targetIndex, 1);
    }
  
    if(node.next === null) {
      return;
    } else {
      if(node.next.id[0] === nodeId){
        node.next = node.next.next;
      }
      
      _removeNode(node.next, nodeId);
    }
  }

  _removeNode(this.masterNode, nodeId);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {

  function _hasEdge(fromNode, toNode, node) {
    if(node.id[0] === fromNode){
      return node.id.indexOf(toNode) !== -1 ? true : false;
    }
  
    if(node.next === null){
      return false;
    } else {
      return _hasEdge(fromNode, toNode, node.next);
    }
  }

  return _hasEdge(fromNode, toNode, this.masterNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {

  function _addEdge(fromNode, toNode, node){
    if(node.id[0] === fromNode || node.id[0] === toNode){
      node.id[0] === fromNode ? node.id.push(toNode) : node.id.push(fromNode);
    }
  
    if(node.next === null){
      return;
    }
  
    _addEdge(fromNode, toNode, node.next);
  }

  _addEdge(fromNode, toNode, this.masterNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {

  function _removeEdge(fromNode, toNode, node) {
    if(node.id[0] === fromNode || node.id[0] === toNode){
      let targetIndex;
      if(node.id[0] === fromNode) {
        targetIndex = node.id.indexOf(toNode);
        node.id.splice(targetIndex, 1);
      }
      else {
        targetIndex = node.id.indexOf(fromNode);
        node.id.splice(targetIndex, 1);
      }
    }
  
    if(node.next === null){
      return;
    }
  
    _removeEdge(fromNode, toNode, node.next);
  }

  _removeEdge(fromNode, toNode, this.masterNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (func) {

  function _forEachNode(func, node){
    func(node.id[0]);
  
    if(node.next === null){
      return;
    }
  
    _forEachNode(func, node.next);
  }

  _forEachNode(func, this.masterNode);
};

function Node(id){
  this.id = id;
  this.next = null;
}

```

