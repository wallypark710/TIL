# Class

> ES6에 등장한 키워드로 클래스를 정의한다.  또한 상속을 구현할 때, ES5까지는 자바스크립트에서 직접적으로 상속을 지원하지 않아 prototype을 이용해야 했지만 ES6 부터는 이 Class를 이용해 상속을 직접적으로 구현할 수 있다. 
>
> 클래스는 호이스팅이 되지 않으며, 일반적으로 클래스 이름 첫글자는 대문자로 작성한다.

```javascript
//클래스 선언 방법
class name {};
class name extends super_name {};
```



- #### 클래스에 메서드 작성 방법

  ```javascript
  class Member{
      setName(name){
          this.name = name;
      }
      
      getName(){
      return this.name;
  	}
  }
  ```

  - 클래스 내부에서 메서드를 작성할때 function키워드를 사용하지 않는다.

  - 클래서 안에 작성된 메서드는 자동으로 prototype에 연결된다. 예를들어 getName() 메서드는 Member.prototype.getName() 과 같은 형태이다.

  - 클래서 밖에서 클래스에 메서드를 추가하려면 prototype에 메서드를 연결한.

    ```javascript
    Member.prototype.say = function(){ ... };
    ```

- #### constructor

  > 생성자는 클래스 인스턴스를 생성하고 생성한 인스턴스를 초기화하는 역할을 한다. 생성자가 없으면 인스턴스를 생성할 수 없다. ES5까지는 함수를 이용해서 생성자를 구현하였지만 ES6부터는 constructor 키워드를 이용해 구현한다. 

  ```javascript
  class Member{
      constructor(name){
          this.name = name;
      }
      
      getName(){
      	return this.name;
  	}
  }
  
  let memberObj = new Member('walli');
  console.log(memberObj.getName()); // 'walli'
  ```

  - constructor안에서 this는 생성하는 인스턴스를 참조한다.



- #### Inheritance

  > ES5에서는 상속을 prototype을 이용해서 구현해야했지만, ES6에서는 extends키워드를 이용하여 좀더 직관적인 상속을 구현한다.
  >
  > ```javascript
  > class subClass extends superClass{ ... }
  > ```
  >
  > 위와같이 작성한다.

  ```javascript
  class Sports{
      constructor(member){
          this.member = member;
      }
      
      getMember(){
          return this.member;
      }
  };
  
  //상속
  class Soccer extends Sports{
      constructor(member, fee){
          super(member);
          this.fee = fee;
      }
      
      getAllMember(){
          console.log("member : " + this.member);
          console.log("fee : " + this.fee);
      }
  }
  
  let soccer = new Soccer('walli', 1000);
  soccer.getAllMember();
  // member : walli
  // fee : 1000
  ```

  - super 키워드를 통해 슈퍼클래스(부모클래스)의 메서드를 호출할 수 있다.

    ```javascript
    super.method_name(...);
    ```



- #### static

  >클래스에 static(정적) 메서드를 정의할때 사용한다. static 메서드는 클래스의 prototype에 연결되지 않고 클래스에 직접 연결된다. 따라서 인스턴스를 생성하지 않고 호출한다. 다른말로 인스턴스에서 호출할 수 없다. 클래스 이름을 통해 호출해야 한다.

  ```javascript
  class Coffee{
      constructor(cups){
          this.cups = cups;
      }
      
      static menu(){
          return "only espresso";
      }
  }
  
  let person = new Coffee(4);
  console.log(person.menu());
  // TypeError: person.menu is not a function
  console.log(Coffee.menu()); 
  // "only espresso"
  ```

  - 정적 메서드에서 this는 클래스 객체를 참조한다.

