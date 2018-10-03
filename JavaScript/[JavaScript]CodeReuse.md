# Recursion

#### 1. define


> 함수가 내부에서 자기 자신을 호출하는 것을 의미한다.


 - 코드를 재사용 함으로써 코드의 가독성과 직관성을 높여준다.
 - iteration을 하는것보다 내부적으로 많은 양의 함수 콜이 일어나므로 성능적으로 유리하지 않다.
 - 이러한 재귀의 단점을 보완하기 위해 메모이제이션과 같은 기법을 사용한다.

#### 2. example

 ```javascript
 /* factorial */
 var factorial = function(number){
     if(number < 1){
         return 1;
     } else {
         return number * factorial(number-1);
     }
 };
 
 /* fibonacci */
 var fibonacci = function(n){
     if( n < 2 ){
         return n;
     } else {
         return fibonacci(n-1) + fibonacci(n-2);
     }
 };
 ```

#### 3. memoization


> memoization은 반복되는 결과를 저장해 두었다가 다음에 같은 결과가 나올 때 저장해둔 결과를 사용하여 실행속도를 높이는 기법을 말한다.

 - 메모이제이션은 반복되는 계산이 많을수록 효과가 높아진다.

 - example

   ```javascript
   /* factorial */
   var factorial = (function(){
       var cache = {};
       
       var fact = function(number){
           if( number < 1 ){
               return 1;
           } else {
               var saved = cache[number-1] || fact(number-1);
               var result = number * saved;
               cache[number] = result;
               return result;
           }
       };
       return fact;
   })();
   
   
   /* fibonacci */
   var fibonacci = (function(){
       var cache = {};
       
       var fibo = function(n){
           if( n < 2 ){
               return n;
           } else {
               var temp_n1 = cache[n-1] || fibo(n-1);
               var temp_n2 = cache[n-2] || fibo(n-2);
               var result = temp_n1 + temp_n2;
               cache[n] = result;
               return result;
           }
       };
       return fibo;
   })();
   ```




# Inheritance & Prototype Chain

### Prototype

>프로토타입이란 인스턴스가 생성(instantiation)될 때 원형(original form)으로 프로토타입의 모양대로 인스턴스가 생성된다. 같은 생성자를 통해 만들어진 객체들은 모두 이 프로토타입을 공유한다. 즉, 객체를 만들때마다 prototype의 속성이 그대로 다 넘어오는 것이 아니라 한번 만들어진 prototype에 연결만 된다.

- example 1

  ```javascript
  function Car(model, brand) {
      this.model = model;
      this.brand = brand;
  }
  
  Car.prototype.ride = function(){
      console.log("vrooooooom! " + this.model)
  };
  
  var spark = new Car("spark", "chevorlet");
  spark.ride(); // "vroooooom! spark"
  ```

  - javascript에서 기본적으로 제공되는 객체에 사용자 정의 메소드를 직접 추가할 수 있음. 그러나 사용자 정의 메소드 확장은 다른 코드와 충돌을 일으킬 수 있으므로 추천하지 않는다.
  - 직접 객체를 작성하여 사용할 때 프로토타입 메소드 확장을 사용하자.

- example 2

  ```javascript
  // 첫번째 방법
  function Person(name, age){
     this.name = name;
     this.age = age;
     
      this.greeting = function(){
          console.log(this.name + ' hello');
      }
  }
  
  // 두번째 방법
  function Person(name, age){
     this.name = name;
     this.age = age;
  }
  
  Person.prototype.greeting = function(){
      console.log(this.name + ' hello');
  }
  ```

  - 위 예제처럼 메서드를 만들땐 두번째 방법으로 하는것이 효율적이다. 프로토타입은 모든 객체들이 공유하고 있어 한 번만 만들어지지만, 생성자 함수 속의 메서드는 객체를 생성할 때 마다 메서드도 하나씩 만들어지기 때문에 불필요한 메모리낭비가 발생한다.
  - 프로토타입을 사용하지 않고 메서드를 외부에 따로 정의해주고, 그 함수의 참조값만 전달하는 방법도 있다.



### Inheritance

>상속이란 어떤 객체의 로직을 그대로 물려 받은 또 다른 객체를 만들 수 있는 기능을 의미한다. 즉, 물려받은 객체( 자식객체 )는 물려준 객체( 부모객체 ) 의 기능을 베이스로 하면서도 새로운 기능을 추가하는 것을 의미한다. 자바스크립트에서는 상속을 위한 문법은 없고, prototype을 이용하여 상속을 구현한다.



- example

  ```javascript
  1    function Person (firstName){
  2        this.firstName = firstName;
  3    }
  4
  5    Person.prototype.geeting = function(){
  6        console.log("hello, I'm" + this.firstName);
  7    };
  8
  9
  10    //Person을 상속하여 Student를 만들어 보자.
  11
  12    function Student(firstName, subject){
  13        Person.call(this,firstName);
  14        this.subject = subject;
  15    }
  16
  17    Student.prototype = Object.create(Person.prototype);
  18    Student.prototype.constructor = Student;
  19
  20    Student.prototype.sayGoodBye = function(){
  21        console.log("Goodbye!");
  22    }
  
  ```

  - *1 - 7 line*

    : 새로운 생성자 함수를 정의하고 정의한 객체 프로토타입에 함수를 하나 추가한다. 프로토타입에 추가한 함수이므로 Person객체를 기반으로하는 모든 객체가 접근 가능하다.

  - *12 - 15 line*

    : Student라는 객체 생성자 함수를 정의한다. 이때 내부에서 Person 객체의 생성자 함수를 Student 객체를 바인딩하여 호출한다. 이렇게 함으로써 Student객체 요소는 Person객체 요소를 기본으로하고 Student객체에만 존재하는 요소로 이루어진다. 

  - *17 - 18 line*

    : Person객체의 프로토타입을 상속받기 위해 Student 프로토타입을 업데이트 한다. 이때 `Object.create( 프로토타입이될 객체 )`메소드를 사용하는데 이 메소드는 파라미터로 전달한 프로토타입 객체 및 속성을 갖는 새로운 개체를 반환한다. 즉, 17라인의 코드는 Student의 프로토타입에 Person의 프로토타입 객체를 복사함으로써 프로토타입을 서로 연결시킨 것이다.(객체를 새로 만든것이 아니라 연결시킨 것이다.) 

    이렇게 프로토타입을 업데이트하면 프로토타입의 요소로 들어가있는 생성자 함수까지 업데이트된다. 17번 라인까지 실행되면 Student의 생성자함수는 Person이 되어있다. 따라서, 생성자 함수는 본래 객체의 생성자함수로 재조정해준다. 이렇게 함으로써 상속이 완성된다.

    - *20 - 22 line*

      : Student의 프로토타입에 새로운 메소드를 하나 추가한다.

- prototype 연결에 대한 추가 설명

  : 위의 상속에대한 코드 설명중 17-18 line 설명에서 Object.create() 함수 사용에 대해 언급했는데, 이 함수의 실행결과가 반환되어 대입되는 과정이 조금 특이하여 좀더 자세히 살펴보고자 한다.



  위 코드에서 프로토타입을 연결하는 방법은 다음과 같이 두가지 방법을 생각할 수 있다.

  ```javascript
  // 방법 1.
  Student.prototype = Person.prototype;
  
  // 방법 2.
  Student.prototype = Object.create(Person.prototype);
  ```

  이 두 방법의 차이를 자세하게 살펴보면

  - 방법 1

    : 이 방법의 경우 Student prototype객체 자체가 Person prototype객체로 대치된다. 객체의 단순 대입연산의 경우 reference copy(얕은복사)가 일어나므로 Student prototype에는 Person prototype객체의 주소값이 들어가게 된다. 즉, Person prototype 객체와 Student prototype 객체 모두 Person prototype객체에 연결되어 있는 것이다. 

    하지만 이 방법의 경우 상속을 받은 자식 객체의 prototype이 곧 부모 객체의 prototype 이므로 한 자식 객체의 prototype 변화가 부모 객체의 prototype에 영향을 주게 되고, 이로인해 이 부모로 부터 파생된 모든 객체에 영향을 주게 된다. 이러한 영향을 피하기 위해 방법 2를 사용한다.

  - 방법 2

    : 이 방법의 경우, `Object.create(프로토타입으로 지정할 객체)` 함수의 실행 결과로 지정된 프로토타입 객체의 속성을 가진 새 객체를 만들어 반환한다. 이 경우 언듯 보기에 deep copy가 된것처럼 보이지만 이 역시 reference copy가 일어난다. 

    `Object.create()` 함수의 실행 결과는 *\__proto__* 를 key로 하고, 아규먼트로 넘긴 지정할 객체의 주소를 value로 하는 key-value 쌍을 대상 객체에 추가한다.

    이렇게 할 경우 Student prototype 객체가 Person prototype객체로 대치되는 것이 아니라, Person prototype 객체가 링크로 연결되어 Student prototype 객체의 한 요소로 들어가게 된다. 

    이렇게 함으로써 자식 객체에서의 prototype 변동이 부모 객체의 prototype객체에 영향을 주지 않으면서, 동시에 부모 객체의 prototype 변동은 자식 객체에 적용되는 효과를 볼 수 있다.



### Prototype Chain을 이용한 상속

#### 1. 속성 상속


> javascript 객체는 속성을 저장하는 동적인 "가방"(자기만의 속성)과 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 prototype, 그 prototype의 prototype 등 prototype chain의 종단에 이를 때 까지 그 속성을 탐색한다.

- 객체의 어떤 속성에 접근할때, 접근하려는 속성이 객체 첫 단 과 prototype에 모두 존재할 경우 prototype의 속성은 가려진다. 즉 앞 단의 속성이 우선적으로 불린다.


#### 2. 메소드 상속


> 속성 값으로 지정한 함수, 즉 메소드 역시 위에서 본 속성의 상속과 동일하다. 단 위에서 언급한 속성의 가려짐은 method overriding이라 불린다.


   - 상속된 함수가 실행 될 때, this는 상속된 오브젝트를 가리킨다.



### Prototype 상속의 종류

#### 1. 위임형 상속


> 위임형 상속에서 프로토타입 객체는 다른 객체의 기반이 된다. 위임 프로토타입을 상속받는 경우 새 객체는 해당 프로토타입에 대한 참조를 가지고 있다.


   - 새 객체의 속성에 접근할 때, 해당 객체가 직접적으로 속성을 소유하고 있는지 먼제 체크한다. 없다면 다음 순서로 prototype을 체크한다. 이 과정은 프로토타입 체인을 따라서 종단에 이를 때 까지 진행된다.


#### 2. 연결형 상속


> 연결형 상속은 한 객체의 속성을 다른 객체에 모두 복사함으로써 상속을 구현하는 방법이다.


   - 이 방법은 객체의 동적 확장성을 이용한 방법이다. 객체 복사는 속성의 초기값을 저장하기 위한 좋은 방법이다.

   - Object.assign()을 통해 구현하는 것이 보통이다.


#### 3. 함수형 상속


> 함수형 상속은 새 속성들을 연결형 상속으로 쌓되 상속 기능을 Factory 함수로 만들어 사용하는 방식이다.


   - 객체 확장에 함수를 사용하는 가장 큰 이점은 private data를 클로저를 통해 캡슐화 시킬 수 있다는 점이다.



### Pseudo Class

