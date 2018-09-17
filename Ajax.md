# AJAX

### What is Ajax

> Ajax는 Asynchronous JavaScript and XML의 약자로, 자바스크립트를 이용해서 비동기적으로 서버와 브라우저가 데이터를 주고 받는 방식을 의미한다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 '비동기성'이다. 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해준다.



#### Step.01 : HTTP request 만드는 방법

자바스크립트를 이용하여 서버로 보내는 HTTP request를 만들기 위해서는 이런 기능을 제공하는 Object의 인스턴스가 필요한데, 그 중 하나가 `XMLHttpRequest`이다.

```javascript
var httpRequest = new XMLHttpRequest();
```



서버에 요청을 하기에 앞서, 서버로 보낸 요청에 대한 응답을 받았을 때 어떤 동작을 할 것인지를 정해야 한다. 위에서 생성한 httpRequest의 `onreadystatechange` 속성에 특정 함수를 할당하면, 요청에 대한 상태가 변화할 때 특정 함수가 불린다.

```javascript
httpRequest.onreadystatechange = testFunction;
//여기서는 어떤 함수가 불릴 것인지만 지정하는 것이므로, 함수를 실행시키지 않는다.

httpRequest.onreadystatechange = function(){ ... };
```



이제 서버에 요청을 한다. httpRequest 객체의 `open()`과 `send()`메서드를 사용하여 요청한다.

```javascript
httpRequest.open('GET', 'target URL', true);
httpRequest.send(null);
```

- open()
  - 첫번째 파라미터 : GET, POST, HEAD 중의 하나.
  - 두번째 파라미터 : 요구하고자 하는 URL.
  - 세번째 파라미터(생략가능) : 비동기식으로 수행될 지를 결정. 기본값은 true. 

