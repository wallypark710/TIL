# Dynamic Programming

> 동적 계획법은 크게 두 부분으로 나눌수 있는데, 해결하고자 하는 문제의 순환식을 세우는 부분과 세운 순환식을 계산하는 부분이다. 계산하는 부분의 경우 메모이제이션 기법(top-down) 이나, botton-up 방식을 통해 계산할 수 있다.
>
> 중요한 부분은 순환식을 세우는 부분인데, 이때 general case 와 base case를 분명히 세우는것이 중요하다.



#### example

> 행렬 경로 문제:
>
> 정수들이 저장된 n x n 행렬의 좌상단에서 우하단까지 이동한다. 단 오른쪽이나 아래쪽 방향으로만 이동할 수 있다.
>
> 방문한 칸에 있는. 정수들의 합이 최소화 되도록 하라.
>
> ex)	6->7->3->11->3->14->9 와 같은 경로로 이동.
>
> 6…….7…….12…….5
>
> 5…….3…….11…….18
>
> 7…….17…….3…….3
>
> 8…….10…..14…….9



- 순환식 세우기

  1. 행렬상의 임의의 점 (i, j)에 도달하기 위해서는 (i, j-1) 또는 (i-1, j)를 거쳐야 한다. 
     이때, (i, j-1) 또는 (i-1, j) 까지는 최선의 방법으로 이동해야 한다. 즉 그곳까지의 합이 최소가 되어야 한다.

  2. L[i, j] : (1, 1)에서 (i, j)까지 이르는 최소 합 이라고 정의하면,

     M(i,j)							if( i =1, j =1)
     L[i-1, j] + M(i,j)					if( j=1 )

     L[i, j-1] + M(i,j)					if( i=1 )

     min( L[i-1,  j] , L[i,  j-1] ) + M(i,j)		otherwise.


     위와같이 순환식을 정의할 수 있다.

- 계산하기

  1. memoization

     ```javascript
     let m = [
         [6, 7, 12, 5],
         [5, 3, 11, 18],
         [7, 17, 3, 3],
         [8, 10, 14, 9]
     ];
     
     let cache = [
         [-1, -1, -1, -1],
         [-1, -1, -1, -1],
         ...
         [-1, -1, -1, -1]
     ];
     
     let L_way = function(row, col){
         if( cacahe[row][col] !== -1 ){
             return cache[row][col];
         }
         if(row === 1 && col === 1){
             cache[row][col] = m[row][col];
         } else if(row === 1){
             cache[row][col] = L_way(row, col-1) + m[row][col];
         } else if(col === 1){
             cache[row][col] = L_way(row-1, col) + m[row][col];
         } else {
             cache[row][col]=Math.min(L_way(row-1,col), L_way(row,col-1))+m[row][col];
         }
         
         return cache[row][col];
     }
     ```

  2. bottom up



### 1. Bottom-Up

> 어떤 순환식의 값을 계산할 때, 제일 아래 항 부터 순차적으로 계산하는 방식. 즉, 왼쪽항보다 오른쪽항이 항상 먼저 계산되어지는 방식.

```javascript
//Fibonacci
let fibo = function(n){
	let fibo_num = [];
    fibo_num[1] = 1;
    fibo_num[2] = 1;
    
    for( let i = 2; i <= n; i++ ){
        fibo_num[i] = fibo_num[i-1] + fibo_num[i-2];
    }
    
    return fibo_num[n];
}
```

