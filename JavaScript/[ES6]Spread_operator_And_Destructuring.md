# Spread Operator

> spread operator는 iterable( 속성을 하나씩 차례로 반환 가능한) 객체의 요소를 하나씩 분리하여 전개한다.

```javascript
[...iterableObject]
function(...iterableObject)
```



- Array

  ```javascript
  let one = [11, 12];
  let two = [21, 22];
  
  let spreadObj = [1, 2, ...one, 3, 4, ...two];
  
  console.log(spreadObj); // [1, 2, 11, 12, 3, 4, 21, 22];
  console.log(spreadObj.length); // 8
  ```



- String

  ```javascript
  let spreadObj = [..."hello"];
  
  console.log(spreadObj); // ["h", "e", "l", "l", "o"]
  ```



- Function parameter

  ```javascript
  let values = [10, 20, 30];
  
  let get = (one, two, three) => {
      console.log(one + two + three);
  }
  
  get(...values); // 60;
  ```



- ( ...rest ) VS ( arguments )

  > arguments의 경우 Array-like( 유사배열, 사실은 객체 ) 이므로 Array객체의 메서드를 사용할 수없다. 반면에 ...rest 경우 배열이므로 Array 객체의 메서드를 사용할 수 있다.





# Destructuring

```javascript
let one, two, three, four;
[one, two] = [1, 2];

console.log(one);	// 1
console.log(two);	// 2

[one, , , four] = [1, 2, 3, 4];
console.log(one, four); // 1, 4
```

```javascript
let {one, two} = {one: 1, nine: 9};
console.log(one, two); // 1, undefined

( {three, four} ) = {three: 3, four: 4};
console.log(three, four); // 3, 4
```

> 객체의 경우 오른쪽이 객체이면 왼쪽도 객체여야 한다. 또한 대입하려는 객체의 요소가 대상 객체에 없다면 할당되지 않는다.