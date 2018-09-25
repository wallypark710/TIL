# HTTPS 서버와 HTTPS 클라이언트 구현

- ##### HTTPS

  > HTTPS는 Hypertext Transfer Protocol Secure의 약자로, HTTP 클라이언트와 HTTP 서버 간에 안전한 통신을 제공하는 통신 프로토콜이다. HTTPS는 보안기능을 확보하기 위해  TLS/SSL(전송층 보안/보안 소켓층) 프로토콜 위에 HTTP를 구현한 것이다.
  >
  > HTTPS는 두 가지 방식으로 보안 기능을 제공한다. 첫번째로 단기간에 사용되는 세션 키 교환을 위해 장기간 사용되는 공개 키와 비밀 키를 사용해 클라이언트와 서버간 데이터 암호화를 진행한다. 또한 인증 기능을 통해 접속하려는 웹 서버가 의도한 서버가 맞는지 확인해 중간자 공격을 방지할 수 있다.

- ##### HTTPS 클라이언트

  HTTPS 클라이언트 생성은 HTTP 클라이언트 생성과 거의 동일하며 아래와 같은 추가 옵션이 필요하다.

  ```javascript
  var options = {
      key : fs.readFileSync('test/keys/client.pem'),
      cert : fs.readFileSync('test/keys/client.crt'),
      agent : false
  };
  ```

  `key` 옵션은 SSL을 위한 개인 키를 지정한다. `cert` 값은 사용할 x509 공개키를 지정한다. 전역 에이전트는 HTTPS에서 지원하지 않는 옵션이기 때문에 `agent` 설정에 `null` 값을 지정해 해당 옵션을 비활성화한다.



  ```javascript
  options.agent = new https.Agent(options);
  ```
