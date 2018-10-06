# Arrow Function

> arrow function은 기존의 function( param ){ code } 형태를 축약한 것으로 function 키워드를 사용하지 않고 ( param ) => { code } 형태로 작성한다.



```javascript
(param) => { code };
param => { code };
() => { code };
(param1, param2, param3) => { code };
param => ( {key : value} );
(param1, param2, ...arg) => { code };
( [one, two] = [1, 2] ) => one + two;
```



-  arrow function은 익형 함수이므로, 함수 표현식과 같이 변수에 할당하여 사용한다.

  ```javascript
  let fn = ( param ) => { code };
  ```



- arrow function에서 객체를 반환하려면 소괄호() 안에 객체를 넣어주어야 한다.

  ```javascript
  let objReturn = () => ( {...} );
  ```



- arrow function은 new 연산자로 인스턴스를 생성할 수 없다.

  > new 연산자를 사용하려면 함수 내부에 prototype이 연결되어 있어야 하고, 여기에 생성자가 연결되어 있어야한다. 하지만 arrow function에는 생성자 함수가 연결되어있지 않다.



- arrow function에서는 arguments 키워드를 사용할 수 없다.

  > 대신 (...arg) 라는 키워드를 사용한다.

  ```javascript
  let rest = (...arg) => { console.log(arg) };
  
  rest(1,2,3); // [1, 2, 3];
  ```



- prototype에 arrow function을 연결하면 함수 내에서 this는 해당 인스턴스를 참조하지 않고 window를 참조한다.

  ```javascript
  let Person = function(){
      this.age = 27;
  }
  
  Person.prototype.add = () => { this.age++; };
  
  let walli = new Person();
  walli.add();
  
  console.log(walli.age); // 27;
  console.log(window.age); // NaN
  ```

  따라서 this가 해당 인스턴스를 참조하게 하려면 function 키워드를 사용해야 한다.



- arrow function을 객체 내부의 메소드를 정의할땐 주의해야 한다. this가 객체에 바인딩 되지 않고, 전역 객체에 바인딩 된다.

  ```javascript
  let obj = {
      name : 'walli',
      say : () => { console.log(this.name) };
  }
  
  obj.say();	// 전역에 바인딩되어 아무것도 출력되지 않음.
  ```

  객체의 메소드를 정의할땐 아래와 같이 정의한다.

  ```javascript
  let obj = {
      name : 'walli',
      say(){ console.log( this.name ) };
  }
  
  obj.say(); // walli;
  ```


