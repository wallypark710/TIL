# Tree

>비선형 자료구조로 상황에 따라 효율적인 데이터 관리가 가능하다. 
>
>...
>
> `모든 왼쪽 자식들 <= n < 모든 오른쪽 자식들` 이와같은 속성을 가진 트리를 이진 탐색 트리라고 하고, 이를 구현해 본다.



```javascript
var Tree = (function(){
    function Tree(){
        this.count = 0;
        this.root = null;
    }
    
    function Node(data){
        this.data = data;
        this.left;
        this.right;
    }
    
    Tree.prototype.findInsertPosition = function(rootNode, targetNode){
        
        if( rootNode.right === undefined && targetNode.data > rootNode.data ){
            rootNode.right = targetNode;
            return;
        }
        
        if( rootNode.left === undefined && targetNode.data <= rootNode.data){
            rootNode.left = targetNode;
            return;
        }
        
        if( targetNode.data > rootNode.data ){
            this.findInsertPosition(rootNode.right, targetNode);
        } else {
            this.findInsertPosition(rootNode.left, targetNode);
        }
    };
    
    Tree.prototype.insert = function(data){
        var newNode = new Node(data);
        
        if( this.root === null){
            this.root = newNode;
        } else {
            this.findInsertPosition(this.root, newNode);
        }
        this.count++;
    };
    
    Tree.prototype.search = function(targetData, rootNode = this.root){
        
        if(rootNode.data === targetData){
            return rootNode;
        }
        
        if( targetData > rootNode.data ){
            return this.search( targetData, rootNode.right);
        } else {
            return this.search( targetData, rootNode.left);
        }
    };
    
    return Tree;
    
})();
```

