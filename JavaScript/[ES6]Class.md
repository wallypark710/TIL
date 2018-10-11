# Class

> ES6에 등장한 키워드로 클래스를 정의한다.  또한 상속을 구현할 때, ES5까지는 자바스크립트에서 직접적으로 상속을 지원하지 않아 prototype을 이용해야 했지만 ES6 부터는 이 Class를 이용해 상속을 직접적으로 구현할 수 있다. 
>
> ...일반적으로 클래스 이름 첫글자는 대문자로 작성한다.

```javascript
//클래스 선언 방법
class name {};
class name extends super_name {};
```



- #### 클래스에 메서드 작성 방법

  ```javascript
  class Member = {
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


