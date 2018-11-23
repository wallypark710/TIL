# Dynamic Programming

### 1. Bottom-Up

> 어떤 순환식의 값을 계산할 때, 제일 아래 항 부터 순차적으로 계산하는 방식.

```javascript
//Fibonacci
let fibo = function(n){
	let fibo_num = [];
    fibo_num[1] = 1;
    fibo_num[2] = 1;
    
    for( let i = 3; i <= n; i++ ){
        fibo_num[i] = fibo_num[i-1] + fibo_num[i-2];
    }
    
    return fibo_num[n];
}
```

