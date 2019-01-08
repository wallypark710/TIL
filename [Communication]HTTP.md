# HTTP

> HTTP ( Hyper Text Transfer Prototcol )은 서버와 클라이언트 사이에 이루어지는 요청/응답을 주고 받을 수 있는 프로토콜이다. 
>
> 요즘은 전통적인 서버의 역할인 file servering외에 비지니스 로직도 처리한다.



![http](https://s3.ap-northeast-2.amazonaws.com/learn.codestate.com/w2d5/img/dns-explained.png)

### Features

1. HTTP는 특정 상태를 담고 있지 않는다. 이전 요청이나 다음 요청을 기억하지 않는다. ( Stateless )

2. 연결 상태를 유지시키지 않음 ( Connectionless )

3. Request - Response Cycle

4. HTTP 요청은 URI를 통해 할 수 있다.

   > URI : Uniform Resource Identifier 로 인터넷에 있는 자원을 나타내는 유일한 주소이다.
   >
   > URL : Uniform Resource Locator 로 인터넷상에서 자원이 어디 있는지를 알려주기 위한 규약이다.
   >
   > 이 두가지는 비슷해 보이지만 다르다. URI가 더 큰 개념이고 URL은 그 하위에 있는 개념이다. 인터넷 상의 모든 자원은 URL 이면서 URI 이지만, 반대로 모든 것이 URI 이면서 URL은 아니다.



### Method

- GET : server에 자원을 요청 하는 것.
- POST : server에 자원을 생성 하는 것.
- DELETE : server에 자원을 제거하는 것.
- PUT : server에 자원을 수정하는 것.

>클라이언트는 server에 요청만 할 뿐, 요청에 대한 응답을 어떻게 주는지는 서버쪽의 몫이다. 
>클라이언트에서 POST라는 요청을 하면 실제로 서버에서 POST가 되게 끔 설계하는것이 얼마나 RESTful하게 설계하느냐 하는 이슈이다.

### HTTP Response Status Code

- 200 : 요청 성공
- 304 : 요청에 대한 응답이 수정되지 않음(cache)
- 403 : 컨텐츠에 접근할 권한이 없음
- 404 : 요청받은 리소스를 사용할 수 없음
- 500 : 서버가 처리할 수 없는 요청

> 400번대 에러는 클라이언트에서 요청을 잘못해서 생기고, 500번대 에러는 서버에서 처리를 못해서 생긴다.

