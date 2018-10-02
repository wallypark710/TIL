# Queue

>큐는 FIFO( First In First Out )으로, 먼저 들어간 데이터가 먼저 나오는 자료구조이다. 큐의 종류에는 순환 큐, 우선순위 큐등 다양한 형태가 존재한다.



```javascript
var Queue = (function(){
    
    function Queue() {
        this.cnt = 0;
        this.front = null;
        this.rear = null;
    }
    
    function Node(data){
        this.data = data;
        this.next = null;
    }
    
    Queue.prototype.enqueue = function(data){
        var newNode = new Node(data);
        if( !this.front ){
            this.front = newNode;
        }else{
            this.rear.next = newNode;
        }
        this.rear = newNode;
        ++this.cnt;
        
        return newNode.data;
    }
    
    Queue.prototype.dequeue = function(){
        if( !this.front ){
            return false;
        }
        
        var data = this.front.data;
        this.front = this.front.next;
        --this.cnt;
        
        return data;
    }
    
    return Queue;
})();
```

```javascript
var queue = new Queue();

queue.enqueue(3); //3
queue.enqueue(4); //4
queue.enqueue(5); //5
queue.dequeue(); //3
queue.dequeue(); //4
```

