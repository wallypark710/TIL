# RESTful API

### 1. REST 구성

- 자원 (Resource) - URI
- 행위 (Verb) - HTTP METHOD
- 표현 (Representations)



### 2. REST 특징

- **Uniform Interface**

  : URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하도록 함.

- **Stateless**

  : 작업을 위한 상태정보를 따로 저장하고 관리하지 않는다. 들어오는 요청만을 단순처리한다.

- **Self-descriptiveness**

  : REST API메시지만 보고도 쉽게 이해할 수 있는 표현 구조로 되어있다.

- **Client - Server structure**

  : 서버는 API를 제공, 클라이언트는 인증이나 컨텍스트등을 직접 관리하는 구조로 각각의 역할이 구분되어 서로간의 의존성이 줄어들게 된다.

- **계층구조**

  : REST 서버는 다중 계층으로 구성된다.



### 3. RESTful 규칙

##### 1. URI는 정보의 자원을 표현해야 한다.

##### 2. 자원에 대한 행위는 HTTP Method( GET, POST, PUT, DELETE)로 표현한다.

##### 3. 구분자(/)는 계층 관계를 나타내는데 사용

```text
//example

//URI에 행위에 대한 표현이 들어가면 안된다.
GET /members/delete/1		(X)
DELETE /members/1			(O)

//추가하는 행위는 GET요청과 맞지 않다.
GET /members/insert/2		(X)
POST /members/2				(O)

//계층관계를 나타내는 구분자
http://wallypark710.github.io/houses/apartments
```



* HTTP Method의 역할
  - POST : URI를 요청하면 리소스를 생성
  - GET : 해당 리소스를 조회
  - PUT : 해당 리소스를 수정
  - DELETE : 리소스를 삭제