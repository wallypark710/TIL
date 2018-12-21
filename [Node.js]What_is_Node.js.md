# What is Node.js

> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적이다.
>
> 위에서 말한 런타임이란 프로그래밍 언어가 구동되는 환경이다. 예전에 자바스크립트는 런타임이 브러우저 밖에 없었다. 하지만 그러한 한계를 극복하고 Node.js가 나왔다. 



- Node.js는 REPL( Read, Eval, Print, Loop)을 통해서 런타임을 제공한다.
  - Read : 유저의 입력 값을 받아서 메모리에 저장.
  - Eval : 입력 값의 평가, 실행.
  - Print : Eval로 인해 반환된 값을 출력.
  - Loop : 위의 세가지를 반복.





# Start Node.js

노드 기반의 프로젝트는 NPM을 이용해서 개발한다.

```text
$ npm init
```



- Test code 작성

노드에서 테스트 환경을 만들땐, 외부 프레임워크의 도움을 받아야 한다. 대표적으로 모카(Mocha)와 슈드(Should)가 있다.

```text
$ npm install --save-dev mocha should
```

모카 테스트를 실행하기 위해 다음과 같이 실행한다.

```text
$ node_modules/.bin/mocha server.spec.js
```

자주 사용하는 명령어라면 NPM script에 등록해 두면 편리하다. `package.json` 파일에 등록한다.

```javascript
// spec.js로 끝나는 파일을 모두 모카 테스트로 실행하도록 등록.
"test" : "mocha $(find ./ -name \"*.spec.js\")"
```



- Code 구조


