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
httpRequest.onreadystatechange = runFunction;
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

    - POST 방식으로 데이터를 전송할 경우.

      ```javascript
      //서버로 전송할 데이터 타입의 형식을 지정한다.
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
      //서버로 전송할 데이터를 형식에 맞게 만든다. 이름=값&이름=값&이름=값... 형식을 지켜야 한다.
      
      var data = '';
      data += 'year=2018';
      data += '&time=12';
      
      //서버로 전송
      httpRequest.send(data);
      ```

  - 두번째 파라미터 : 요구하고자 하는 URL.

  - 세번째 파라미터(생략가능) : 동기적으로 수행할지 비동기식으로 수행할 지를 결정. true 는 비동기 실행이고, false는 동기실행이다. 기본값은 true. 



#### Step.02 : 서버 응답에 대한 처리

step.01에서 서버에 요청을 보내기 전에, 응답을 받았을 때 어떤 동작을 할 것인지 함수를 지정했다.

```javascript
httpRequest.onreadystatechange = function(){ ... };
```

이 함수 내부에 구현되야할 것들이 있다. 먼저 해당 함수에서는 요구의 상태값을 검사해야 한다. 예를 들어, 상태값이 `XMLHttpRequest.DONE`(상수 4로 정의되어 있음) 이라면, 서버로부터 모든 응답을 받았으며 이를 처리할 준비가 되었다는 것을 뜻한다.

```javascript
if(httpRequest.readState ===XMLHttpRequest.DONE){
    // 이상없음, 응답 받았음.
} else {
    // 아직 준비되지 않음.
}
```

- readyState가 가질수 있는 값의 목록
  - 0 ( uninitialized ) : request가 초기화되지 않음.
  - 1 ( loading ) : 서버와의 연결이 성사됨.
  - 2 ( loaded ) : 서버가 request를 받음.
  - 3 ( interactive ) : request를 처리하는 중.
  - 4 ( complete ) : request에 대한 처리가 끝났으며 응답할 준비가 완료됨.



그 다음에는 HTTP 응답 상태 코드를 검사해야 한다. 

```javascript
if(httpRequest.status === 200){
    //이상 없음
} else {
    // 요구를 처리하는 과정에서 문제가 발생되었음.
    // 응답상태 코드에 따라 처리.
}
```



여기까지 서버에 요구와 그에 대한 응답(상태 코드)를 검사했으므로, 서버에서 받은 데이터를 통해 원하는 작업을 수행한다.

```javascript
httpRequest.responseText : 서버의 응답을 텍스트 문자열로 반환.
httpRequest.responseXML : 서버의 응답을 XMLDocument 객체로 반환.
```



#### Step.03 : 전체 사용 예제

```javascript
var httpRequest;

function makeRequest(){
    httpRequest = new XMLHttpRequest();
    
	if( !httpRequest ){
    	alert("XMLHttp 인스턴스가 없다");
    	return false;
	}
    
    httpRequest.onreadstatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.state === 200){
                console.log(httpRequest.responseText);
            } else {
                alert("request error");
            }
        }
    }
    httpRequest.open('GET','URL');
    httpRequest.send();
}
```

