# Linked List

> 연결리스트란 여러개의 노드들이 연결되어있는 형태로 다양한 자료구조의 기반이 되는 자료구조이다.



```javascript
var LinkedList = (function(){
    
    function LinkedList(){
        this.cnt = 0;
        this.head = null;
    }
    
    function Node(data){
        this.data = data;
        this.next = null;
    }
    
    LinkedList.prototype.add = function(data){
        var newNode = new Node(data);
        if( this.head ){
            newNode.next = this.head;
        } 
        this.head = newNode;
        this.cnt++;
        
        return newNode.data;
    };
    
    // n번째 node에 있는 데이터를 찾는다.
    LinkedList.prototype.search = function(position){
        var current = this.head;
        
        while(position > 0){
            if( current === undefined ){
                return false;
            }
            
            current = current.next;
            position--;
        }
        
        return current.data;
    };
    
    //n번째 node를 삭제.
    LinkedList.prototype.remove = function(position){
        var befor;
        var current = this.head;
        
        if( position === 0 ){
            target = this.head;
            this.head = this.head.next;
            this.cnt--;
            
            return target.data;
        } else {
            while( position > 0){
                befor = current;
                current = current.next;
                position--;
            }
            
            befor.next = current.next;
            this.cnt--;
            return current.data;
        }
    };
    
    return LinkedList;
})();
```



