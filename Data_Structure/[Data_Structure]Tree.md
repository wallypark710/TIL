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
    
    
    
    return Tree;
    
})();
```

