# Object

- 객체 내의 함수(메서드)를 작성할 때 function 키워드를 사용하지 않아도 된다.

  ```javascript
  //ES5
  let obj = {
      sayName : function(name){
          console.log(name);
      }
  }
  
  //ES6
  let obj = {
      sayName(name){
          console.log(name);
      }
  }
  ```



- Object.is() 로 값과 값 타입을 비교할 수 있다.

  ```javascript
  Object.is(1, "1"); // false
  
  Object.is(NaN, NaN); // true
  NaN === NaN // false;
  
  Object.is(0, -0); // false;
  0 === -0 // true;
  
  Object.is(null, null); //true;
  ```
