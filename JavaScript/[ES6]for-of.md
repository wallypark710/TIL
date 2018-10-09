# for-of

> for - of 문은 iterable object를 반복하여 처리한다. for - in 문과 대상과 방법에서 차이가 있다.

```javascript
for ( var value of [10, 20, 30] ){
    console.log(value);
}
// 10
// 20
// 30
```

- for - in 문의 경우 key를 가져와서 접근하는 방식이라면, for - of 문의 경우 value를 바로 가져오는 방식이다. 

- for - in 문의 대상은 Object 이며 열거 가능한 프로퍼티가 대상이다. for - in문의 경우 연결된 prototype 프로퍼티를 모두 열거한다. 반면 for - of 문의 대상은 iterable object이며, prototype에 연결된 프로퍼티는 대상이 아니다.

  ```javascript
  let temp = [1, 2, 3, 4];
  
  Array.prototype.say = function(){
      console.log("This is array");
  }
  
  for( var key in temp ){
  	console.log( temp[key] );
  }
  
  // 1
  // 2
  // 3
  // 4
  // function(){ console.log("This is array") };
  
  for( var values of temp ){
      console.log(values);
  }
  
  // 1
  // 2
  // 3
  // 4
  
  ```

- 일반 객체를 for-of 로 이터레이션 할 경우 객체를 유사배열이나, 배열형태로 바꿔주어야 한다.