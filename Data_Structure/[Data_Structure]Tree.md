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
        this.root;
    }
    
    function Node(data){
        this.data = data;
        this.left;
        this.right;
    }
    
    function _insert(root, node){
        if(!root){
            return node;
        }
        if(node.data < root.data){
            root.left = _insert(root.left, node);
            return root;
        }else{
            root.right = _insert(root.right, node);
            return root;
        }
        
        Tree.prototype.add = function(data){
            var node = new Node(data);
            if(this.count === 0){
                this.root = node;
            }else{
                _insert(this.root, node);
            }
            return ++this.count;
        }
    }
})
```

