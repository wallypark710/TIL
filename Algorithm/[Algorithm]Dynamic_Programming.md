# Dynamic Programming

> 동적 계획법은 순환식을 효과적으로, 계산의 중복없이 풀 수 있는 방법이다. 순환식이란 subProblem을 풀어서 originalProblem을 풀 수 있는 문제의 수학적 표현이다. 일반적으로 최적화 문제나 카운팅 문제에 적용된다.
>
> 동적 계획법은 크게 두 부분으로 나눌수 있는데, 해결하고자 하는 문제의 순환식을 세우는 부분과 세운 순환식을 계산하는 부분이다. 계산하는 부분의 경우 메모이제이션 기법(top-down) 이나, botton-up 방식을 통해 계산할 수 있다.
>
> 동적 계획법의 핵심은 순환식을 세우는 것이다. 이때 general case 와 base case를 분명히 세우는것이 중요하다.



### Example_1

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



- #### 순환식 세우기

  1. 행렬상의 임의의 점 (i, j)에 도달하기 위해서는 (i, j-1) 또는 (i-1, j)를 거쳐야 한다. 
     이때, (i, j-1) 또는 (i-1, j) 까지는 최선의 방법으로 이동해야 한다. 즉 그곳까지의 합이 최소가 되어야 한다.

  2. L[i, j] : (1, 1)에서 (i, j)까지 이르는 최소 합 이라고 정의하면,

     M(i,j)……………………………………………….if( i =1, j =1)

     L[i-1, j] + M(i,j)………………………………...if( j=1 )

     L[i, j-1] + M(i,j)………………………………...if( i=1 )

     min( L[i-1,  j] , L[i,  j-1] ) + M(i,j)…….....otherwise


     위와같이 순환식을 정의할 수 있다.

- #### 계산하기

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
         if(row === 0 && col === 0){
             cache[row][col] = m[row][col];
         } else if(row === 0){
             cache[row][col] = L_way(row, col-1) + m[row][col];
         } else if(col === 0){
             cache[row][col] = L_way(row-1, col) + m[row][col];
         } else {
             cache[row][col] = Math.min(L_way(row-1,col), L_way(row,col-1))+m[row][col];
         }
         
         return cache[row][col];
     }
     ```

  2. bottom-up

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
     
     //이때 n은 행렬의 크기.
     let L_way = function(){
         for(let row = 0; row < n; row++ ){
             for(let col = 0; col < n; col++){
                 if( row === 0 && col === 0){
                 	cache[row][col] = m[row][col];    
                 } else if(row === 0){
                     cache[row][col] = m[row][col] + cache[row][col-1];
                 } else if(cole === 0){
                     cache[row][col] = m[row][col] + cache[row-1][col];
                 } else{
                     cache[row][col] = m[row][col] + Math.min( cache[row-1][col], cache[row][col-1]);
                 }
             }
             
             return cache[n-1][n-1]
         }
     }
     ```



### Example_2

> Matrix-Chain 곱하기 : 
>
> n개의 행렬의 곱 A1A2A3...An을 계산하는 최적의 순서는?
>
> 예를들어, A는 10x100, B는 100x5, C는 5x50 이라고 할 때, 세 행렬의 곱 ABC는 두 가지 방법으로 계산 할 수 있다.
>
> 이때, pxq 행렬과 qxr행렬의 곱셈 연산 횟수는 pqr 이다.
>
> 1. (AB)C :  10x100x5 + 10x5x50 = 7500번의 곱셈이 필요.
> 2. A(BC) :  100x5x50 + 10x100x50 = 75000번의 곱셈이 필요.
>
> 이처럼 곱하는 순서에 따라 연산량이 다르다.



- #### 순환식 세우기

  1. A(1) A(2) A(3) ... A(k) A(k+1) ... A(n) 일때, 결과는 X = A(1)A(2)...A(k) 와 Y = A(k+1)...A(n)까지의 곱 XY이다.

  2. m[i, j] : A(i)A(i+1)...A(j)를 곱하는 최소 곱셈 횟수라고 정의하면,

     0…………………………………………………………......if( i = j )

     min( m[i, k] + m[k+1, j] + p(i-1)p(k)p(j) )…….if( i < j )

- #### 계산하기








### *Bottom-Up

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

