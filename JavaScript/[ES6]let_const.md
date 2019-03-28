# let & const

> 기존의 변수 키워드였던 var는 let으로 대체되었다. 또한 const라는 키워드가 추가되었는데 const는 한번 할당하면 변경할 수 없는, 즉 상수화 시키는 키워드이다.

### 1. scope

> 기존 변수 선언 키워드였던 var와 가장 큰 차이점은 스코프이다. var키워드는 함수 스코프였다. 즉 스코프가 함수단위로 이루어졌다. 하지만 let과 const의 경우 블록단위 스코프이다.
>
> let과 const 모두 같은 스코프 내에서 재선언 할 수 없다. 

```javascript
//ES5
if(true){
    var temp = 7;
}
console.log(temp); // 7

//ES6
if(ture){
    let temp = 7;
}
console.log(temp); // reference Error
```



### 2. hoisting

> 사실 호이스팅이라는것은 정의가 다소 불분명하다. 스펙에는 없지만 자바스크립트 동작을 설명하기 위해 만들어진 용어이다. 일반적으로 생각하는 호이스팅이 let 과 const에서는 일어나지 않는다.



### 3. const

> 앞서 설명한 const 키워드는 변수를 한번 할당하면 변경할수 없다. 즉, 변수를 상수화하는 키워드이다. 하지만 조심해야 할 점은, const는 재할당만 막는 것이고 const에 할당된 객체나 배열의 요소를 바꾸는것까지 막지는 않는다. 즉 데이터의 주소값만 고정하는 것이다.  

```javascript
const arr = [1, 2, 3, 4];
arr = [7,8]; // TypeError.

arr[0] = 7;
console.log(arr); // [7,2,3,4];
```