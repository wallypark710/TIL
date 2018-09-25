# Object

 ### Create Object

 1. 객체 리터럴을 이용

    ```javascript
    var obj = {
        name : "walli",
        age : 200,
        favorite : "coffee"
    };
    ```

 2. 생성자 함수를 이용

    ```javascript
    function Person(name, age, favorite){
        this.name = name;
        this.age = age;
        this.favorite = favorite;
    };
    
    var student_One = new Person("walli", 200, "coffee"); 
    ```

    - 생성자 함수의 경우 통상적으로 함수명의 첫 글자를 대문자로 쓴다.

    - 생성자 함수 내의 변수는 private하다. 

      ```javascript
      function Person() {
        //생성자 함수 내의 변수는 immutable 즉 private 하다.
        var name = "Lee";
        this.getName = function() {
          return name;
        };
      }
      
      var p = new Person();
      p.name = "kim"; //name이라는 다른 프로퍼티가 추가된것이다.
      console.log(p.name); //kim 출력된다.
      console.log(p.getName()); //lee가 출력된다.
      ```



### Object Handling

 - 객체 요소에 접근하는 방법

   1. obj.key;
   2. obj[key];
      :이때 key가 변수명이 아니라 실제 객체의 key 이름값이라면 따옴표를 붙여주어야 한다.

 - 객체 요소를 삭제하는 방법

   - *delete* 키워드 사용.



### Feature

   1. 객체의 단순 대입 연산을 진행하면, 얕은복사를 진행한다. 즉 레퍼런스 카피가 진행된다. 메모리가 새로 할당되어 객체가 복사되는것이 아니라 주소값만 연결된다. 같은 곳을 바라보고있다.

      ```javascript
      var obj_1 = {
          name : "walli",
          age : 27
      }
      
      var obj_2 = obj_1;
      console.log(obj_2.name); // "walli"
      
      obj_1.from = "Korea";
      
      console.log(obj_2.from); // "Korea"
      ```








# Function

### Create Function

1. 함수 선언식

   ```javascript
   function name ( param ){
       ...code...
   }
   ```

2. 함수 표현식

   ```javascript
   var name = function( param ){
       ...code...
   }
   ```



### Feature

 - *arguments* 키워드

   :함수에 전달된 파라미터를 유사 배열로 저장. 실제론 객체이다.

 - 함수를 호출(실행)하는 4가지 방법

   1. 일반 함수로의 호출

      ```javascript
      function say ( message ){
          console.log(message);
      }
      
      say("hello");
      ```

   2. 멤머 함수로의 호출

      ```javascript
      var greeting = {
          say : function( message ){
              console.log(message);
          }
      }
      
      greeting.say("hello");
      ```

   3. call, apply 함수를 이용한 호출

      ```javascript
      function identify(){
          return this.name.toUpperCase();
      }
      
      var me = { name : "Walli" };
      var you = { name : "Park" };
      
      identify.call(me); // WALLI
      identify.call(you); // PARK
      
      identify.apply(me);	//WALLI
      identify.apply(you); // PARK
      ```

      : call, apply의 경우 첫번째 인자는 this, 두번째 인자는 함수에 넘길 인자. 인자가 배열일땐 apply, 낱개일땐 call

   4. bind를 이용하여 호출

      : 인자로 넘겨준 객체와 this를 연결하여 새로운 함수를 반환한다. 함수를 반환하기 때문에 실행되지는 않는다.

      ```javascript
      function identify(){
          return this.name;
      }
      
      var me = { name : "walli" };
      var you = { name : "park" };
      
      identify.bind(me); // function identify(){ return this.name };
      identify.bind(me)(); // "walli"
      
      identify.bind(you)(); // "park"
      ```

 - Callback function

   - 인수로서 넘겨주는 함수

