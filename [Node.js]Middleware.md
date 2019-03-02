# Middle ware

> Node 서버를 구축할 때 다양한 미들웨어를 사용하여 서버를 좀 더 효율적으로 구축할 수 있다.



### 1. log4js

> 미들웨어의 이름에서도 알 수 있듯이 로그를 찍어주는 미들웨어이다. 물론 console.log를 이용할 수 있지만, 좀더 나은 가독성과 다양한 export 기능을 제공한다. 개발을 할수록 로그의 가독성은 로거에서 가장 중요한 부분이란 생각이 든다.

```
$ npm install log4js
```

```js
//config
const log4js = require('log4js');

const conf = {
  "appenders": {
    "console": {
      "type": "stdout"
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": { "appenders": ["console", "errors"], "level": "TRACE" }
  }
}

log4js.configure(conf);
const { getLogger } = log4js;

const config = {
    getLogger,
};

module.exports = config;
```

```js
//app.js

const express = require('express');
const logger = requrie('./config').getLogger('Server');

const app = express();
```



### 2. Helmet

> helmet은 HTTP 헤더를 적절히 설정하여 많이 알려진 http의 웹 취약성으로부터 앱을 보호할 수 있다. helmet은 보완 관련 http 헤더를 설정하는 다음과 같은 미들웨어 함수 9개의 모음이다.
>
> csp, hidePoweredBy, hpkp, hsts, ieNoOpen, noCache, noSniff, frameguard, xssFliter

```bash
$ npm install --save helmet
```

