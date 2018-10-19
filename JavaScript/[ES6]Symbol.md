# Symbol

> 자바스크립트에서는 primitive 개념이 있다. string, number, boolean 등이 있으며, 이는 객체가 아닌 값이다. Symbol 역시 primitive 값 이다. 이러한 primitive값들은 wrapper 객체가 있고, 이 wrapper 객체에 primitive값을 처리하기 위한 메서드와 프로퍼티가 있다.
>
> ##### *Symbol()로 생성된 값은 프로그램 전체에서 유일하며, 값을 변경할 수 없다.*

```javascript
let sym = Symbol();
```

- new 연산자는 사용할 수 없다.

- Symbol()과 같이 함수로 호출해야 값을 생성하여 반환한다.

- Symbol()의 파라미터는 옵션으로, 생성한 값의 설명이나 주석을 문자열로 작성한다.

  ```javascript
  let symParam = Symbol("설명");
  ```

  - 파라미터는 Symbol 값을 생성하는데 영향을 미치지 않는다.

