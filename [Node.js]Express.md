# Express.js

### what is Express

> Express는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크이다. Express는 웹 앱의 MVC 형태의 구조를 제공한다.



### How it works?

> Express에는 메인 파일이라고 하는 진입점이 있다. 메인 파일에서는 다음과 같은 단계를 밟는다.

1.  컨트롤러, 유틸리티, 모델과 같은 자체적인 모듈을 비롯한 서드파티 의존 모듈을 include한다.
2.  템플릿 엔진과 해당 템플릿 엔진의 파일 확장자와 같은 Express 앱 설정을 구성한다.
3.  오류 핸들러, 정적 파일 폴터와 같은 미들웨어를 정의한다.
4.  라우팅을 정의한다.
5.  MongoDB, MySQL과 같은 데이터베이스에 연결한다.
6.  앱을 구동한다.



```js
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('connection server');
})

app.use(/... 3rd party module.../);

//route
app.get('/', (req, res) => {
    res.status(200).send('success');
})
```

