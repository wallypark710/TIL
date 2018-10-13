# Sieve of Eratosthenes

### Prime Number

>  소수란 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수이다. 소수는 다음과 같은 특징을 갖는다.
>
> - 소수는 1보다 큰 자연수이다. 1은 소수가 아니다.
>
> - 소수는 자기자신과 1만을 약수로 갖는다. 역도 성립한다.
>
> - 2,3을 제외한 모든 소수는 자연수 `n`에 대하여 `6n-1` 또는 `6n+1` 꼴이다.



### Sieve of Eratosthenes

>에라토스테네스의 체는 소수를 찾는 방법이다. 방법은 간단하다. 
>
>##### N이하의 소수를 구할때, √N 보다 작은 소수의 배수를 모두 지우면 남아있는 수가 소수이다.
>
>-  `N`보다 작은 소수 `P` 의 배수들은 약수로 소수 `P` 를 가지므로 소수가 아니다. 
>
>- `N`보다 작은 소수가 아니라 `√N` 보다 작은 소수로 한정하는 이유는;  `N`을 어떤수 a로 나누면, 몫이 `b`이고 나머지가 `c` 라고 하자. 이때 다음과 같은 식이 성립한다. `ab+c = N`  이 때, `a`와`b`의 곱이 가장 큰 경우는 나누어 떨어질때, 즉 `c = 0` 일때 이다. 그때 `a*b = N` 이 되고, `a`와`b`중 하나는 항상 `√N` 보다 작다.  



### Sieve of Eratosthenes in Javascript

```javascript
function isPrime(n){
    for( let i = 2; i <= Math.sqrt(n) ; i++ ){
        if( n%i === 0 ){
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    let arr = Array(n+1);
    arr.fill(1);
    
    for( let k = 2; k <= Math.sqrt(n) ; k++ ){
        //어떤 수가 소수라면, 그 소수의 배수를 지운다.
        if( isPrime(k) ){
            for( let i = k*2 ; i <= n; i += k ){
                arr[i] = 0;
            }
        }
    }
 
    answer = arr.reduce( (acc, ele) => (acc+ele), 0) - 2;
    return answer;
}
```

위 코드에서는 길이가 N+1인 배열을 만들고 그 배열에 1을 채운다. N+1로 하는 이유는 수를  인덱스에 바로 매칭시켜 직관적으로 보기위해서이다.  이후에 소수가 아닌 수(인덱스)의 자리를 0으로 바꾼다. 마지막으로 배열의 모든 수를 더해 결과를 얻는다.



