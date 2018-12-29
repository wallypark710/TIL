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
    
	function findInsertPosition(rootNode, targetNode){
        
        if( rootNode.right === undefined && targetNode.data > rootNode.data ){
            rootNode.right = targetNode;
            return;
        }
        
        if( rootNode.left === undefined && targetNode.data <= rootNode.data){
            rootNode.left = targetNode;
            return;
        }
        
        if( targetNode.data > rootNode.data ){
            findInsertPosition(rootNode.right, targetNode);
        } else {
            findInsertPosition(rootNode.left, targetNode);
        }
    };
    
    function findMaxRight(rootNode){
        if( rootNode.right === undefined && rootNode.left === undefined ){
            return rootNode;
        } else {
            return findMaxRigth(rootNode.left);
        }
    };
    
    function inOrderTravel(rootNode){
        if( rootNode === undefined ){
            return;
        }
        
        inOrderTravel(rootNode.left);
    }
    
    Tree.prototype.insert = function(data){
        var newNode = new Node(data);
        
        if( this.root === null){
            this.root = newNode;
        } else {
           findInsertPosition(this.root, newNode);
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
    
    Tree.prototype.delete = function(targetData, rootNode = this.root){
        var deleteData;
        var newRootNode;
        var temp;
        
        if( rootNode.data === targetData ){
            deleteData = rootNode.data;
            
            temp = findMaxRight(rootNode.right);
            temp.left = rootNode.left;
            temp.right = rootNode.right;
            rootNode = temp;
            temp = undefined;
            
            return deleteData;
        }
    };
    
    return Tree;
    
})();
```

