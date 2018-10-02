# Stack

> 스택은 FILO (First In, Last Out)으로, 처음 들어간 데이터가 가장 나중에 빠지게 되는 자료구조이다. 



```javascript
var Stack = (function(){
    
    function Stack(){
        this.top = null;
        this.cnt = 0;
    }
    
    function Node(data){
        this.data = data;
        this.next = null;
    }
    
    Stack.prototype.push = function(data){
        var node = new Node(data);
        node.next = this.top;
        this.top = node;
        
        return ++this.cnt;
    };
    
    Stack.prototype.pop = function(){
        if( !this.top ){
            return false;
        }
        
        var data = this.top.data;
        this.top = this.top.next;
        
       	--this.cnt;
        return data;
    };
    
   	return Stack;
})();
```

```javascript
var stack = new Stack();

stack.push(1); //1
stack.push(2); //2
stack.push(3); //3
stack.pop(); //3
stack.pop(); //2 
```

