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
  function Person (firstName){
      this.firstName = firstName;
  }
  
  Person.prototype.geeting = function(){
      console.log("hello, I'm" + this.firstName);
  };
  
  
  //Person을 상속하여 Student를 만들어 보자.
  
  function Student(firstName. subject){
      Person.call(this,firstName);
      this.subject = subject;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.sayGoodBye = function(){
      console.log("Goodbye!");
  }
  
  ```




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






# Decorator Pattern

#### 1. define


> 객체의 추가적인 요건을 동적으로 추가한다. 서브 클래스를 만드는 것을 통해 기능을 유연하게 확장할 수 있는 방법을 제공한다.


 - 다른 객체에 영향을 주지 않고 요건을 추가할 수 있게 된다. 또한 상속을 통해 구현 시, 너무 많은 서브 클래스들이 만들어질 것이 우려될 때나 동일한 기능을 반복해 수행하고 싶을 때 유용하다.

 - 일반적인 상속 관계보다 유연하게 기능을 확장할 수 있지만 잡다한 클래스가 많아지거나 겹겹이 애워싼 구조 때문에 디버깅이 어려워 질수 있다.


#### 2. example

 ```javascript
 function Espresso(){
     this.cost = 2500;
 }
 
 function Water(espresso){
     espresso.cost = espresso.cost + 500;
     espresso.water = 250;
     return espresso;
 }
 
 function Milk(espresso){
     espresso.cost = espresso.cost + 500;
     espresso.milk = 100;
     return espresso;
 }
 
 /****** use ******/
 var espresso = new Espresso();
 //{ cost: 2500 }
 var americano = Water(new Espresso());
 //{ cost: 3000, water: 250}
 var latte = Milk(Water(new Espresso()));
 //{ cost: 3500, water: 250, milk: 100}
 ```



# Singleton Pattern

#### 1. define


> 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.


 - 공통된 객체를 여러개 생성해서 사용하는 상황에 많이 사용된다.

 - 클로저를 이용하여 모든 속성은 private이다.


#### 2. example

 ```javascript
 var singleton = (function(){
     var instance;
     var owner = 'walli';
     function init(){
         return {
             owner : owner
         };
     }
     
     return {
         getInstance: function(){
             if(!instance){
                 instance = init();
             }
             return instance;
         }
     }
 })();
 
 /****** use ******/
 var first = singleton.getInstance();
 var second = singleton.getInstance();
 console.log(first === second); //true
 ```




