# Node.js

### What is Node.js

> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적이다.
>
> 위에서 말한 런타임이란 프로그래밍 언어가 구동되는 환경이다. 예전에 자바스크립트는 런타임이 브러우저 밖에 없었다. 하지만 그러한 한계를 극복하고 Node.js가 나왔다. 



- Node.js는 REPL( Read, Eval, Print, Loop)을 통해서 런타임을 제공한다.
  - Read : 유저의 입력 값을 받아서 메모리에 저장.
  - Eval : 입력 값의 평가, 실행.
  - Print : Eval로 인해 반환된 값을 출력.
  - Loop : 위의 세가지를 반복.



### HTTP service using Node.js

- #### 요청, 응답, 서버 객체

  - ##### http.ClientRequest

    ClientRequest 객체는 HTTP 클라이언트 구성을 위해 `http.request()`  호출 시 내부적으로 생성된다.

    ```javascript
    //ClientRequest 객체구현
    http.request(options, callback);
    ```

    `options` 인자는 클라이언트 HTTP 요청을 열고 서베에 전송하는 벙법에 대한 속성을 지정한다.

    `callback` 인자는 서버에 요청이 보내진 후 불리게 되는데, 서버로부터 받은 응답을 처리한다.


    ```javascript
    var http = require('http');
    var options = {
        host: '127.0.0.1',
        path: '/',
        port: '3000',
        method: 'POST'
    };
    
    var req = http.request(options, functiono(response){
        	var str = '';
            response.on('data', function(chunk){
        			str += chunk;
    		});
    		response.on('end', function(){
        			console.log(str);
    		})
    });
    
    req.end();
    ```

    ClientRequest 객체는 서버의 응답을 받았을 때 발생하는 `response` 이벤트를 처리하는 리스너를 추가할 수 있다.

  - ##### http.ServerResponse

    HTTP서버는 `request` 이벤트 수신 시 내부적으로 ServerResponse 객체를 생성한다. 이 객체는 `request` 이벤트 핸들러를 두 번째 전달인자로 받는다. ServerResponse객체를 사용해 클라이언트 요청에 대한 응답을 정형화해 보낸다.

  - ##### http.IncomingMessage

    HTTP서버나 HTTP클라이언트는 IncomingMessage객체를 생성한다. 서버 단에서는 클라이언트 요청이 IncomingMessage 객체가 되고, 클라이언트 단에서는 서버의 응답이 IncomingMessage 객체가 된다.

  - ##### Http Server

    Node.js의 HTTP Server객체는 HTTP 서버를 구현하는데 기초가 되는 프레임워크를 제공한다. Server객체는 EventEmitter를 구현해 이벤트를 방출한다.

    HTTP 서버를 시작하려면 `createServer()` 를 사용해 서버 객체를 생성한다. 이 함수는 객체를 반환한다.

    ```javascript
    http.createServer([requestListener])
    ```

    `requestListener` 요청 이벤트 발생시 수행될 콜백을 지정한다. 콜백은 두 개의 전달 인자를 받는데, 첫번째는 IncomingMessage객체이고 두번째는 ServerResponse객체를 지정한다.

    서버 객체를 생성한 경우 `listen()`함수를 호출해 요청을 수신산다.

    ```javascript
    listen(port, [hostname], [backlog], [callback])
    ```

    ```javascript
    var http = require('http');
    http.createServer(function(req, res){
        ...
    }).listen(3000);
    ```


- #### HTTP 서버 와 HTTP 클라이언트 구현

  - ##### 정적 파일 제공

    정적 파일을 제공하려면 우선 HTTP 서버를 시작하고 포트를 수신한다. 요청 핸들러에서 fs모듈(파일 처리와 관련된 모듈)을 통해 파일을 지역적으로 열고 응답에 파일 내용을 쓴다.

    ```javascript
    var fs = require('fs');
    var http = require('http');
    var url = require('url');
    var root_dir = 'html/';
    
    http.createServer(function(req, res){
        var urlObj = url.parse(req.url, true, false);
        fs.readFile(root_dir + urlObj.pathname, function(err, data){
            if(err){
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            
            res.writeHead(200);
            res.end(data);
        });
    }).listen(3000);
    ```

    정적 파일은 `fs.readFile()` 을 사용해 열기와 읽기가 가능하다. `readFile()` 의 콜백에서는 `res.end(data)` 를 사용하여 파일 내용을 응답 개체에 쓴다.



    다음은 서버에 GET 요청을 보내고 파일 내용을 가져오는 기본 HTTP 클라이언트의 구현이다.

    ```javascript
    var http = require('http');
    var options = {
        hots: '127.0.0.1',
        port: '3000',
        path: '/index.html',
        method: 'GET'
    };
    
    function handleResponse( response ){
        var serverData = '';
        response.on('data', function( chunk ){
            serverData += chunk;
        });
        
        response.on('end', function(){
            console.log(serverData);
        });
    }
    
    http.request(options, function(response){
        handleResponse(response);
    }).end();
    ```



  - ##### 동적 GET 서버 구현

    동적으로 GET 요청을 처리하려면 클라이언트의 요청에 대한 요청 핸들러(동적 데이터 구성에 필요한)를 구현하고 응답 데이터를 작성한다. 그리고 `end()` 함수를 호출해 요청을 마무리하고 writable 스크림을 비운다.



    다음은 HTTP 파일을 동적으로 생성해 응답하는 기본적인 형태의 동적 웹 서버의 구현 내용이다.

    ```javascript
    var http = require('http');
    var massage = [
        'hello walli',
        'From Node.js server',
        'Good morning'
    ];
    
    http.createServer(function( req, res ){
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        
        res.write('<html><head><title>Simple HTTP Server</title></head>');
      	res.write('<body>');
      	
        for (var idx in  messages){
        	res.write('\n<h1>' + messages[idx] + '</h1>');
      	}
      	
        res.end('\n</body></html>');
    }).listen(8080);
    ```



    다음은 위에서 작성한 서버의 응답을 읽기위한 HTTP 클라이언트 구현 이다.

    ```javascript
    var options = {
        hostname : '127.0.0.1',
        port: '3000'
    };
    
    function handleResponse(response){
        var serverData = '';
        
        response.on('data',function(chunk){
            serverData += chunk;
        });
        
        response.on('end', function(){
            console.log("Response Status:", response.statusCode);
        	console.log("Response Headers:", response.headers);
        	console.log(serverData);
        });
    }
    
    http.request(options, function(response){
        handleResponse(response);
    }).end();
    ```

  - ##### POST 서버 구현

    POST 요청을 처리하려면 POST 본문 내용을 읽고 내용을 처리하는 요청 핸들러 코드를 구현해야 한다. 데이터 처리를 마치면 클라이어트에 보낼 데이터를 동적으로 만들어 응답으로 작성한 후 `call()` 을 호출해 응답을 마무리하고 writable 스트림을 비운다.




    아래는 POST 요청을 처리하는 기본 HTTP 서버의 구현이다.

    ```javascript
    var http = require('http');
    
    http.createServer(function( req, res ){
        var jsonData = '';
        req.on('data', function(chunk){
            jsonData += chunk;
        });
        
        req.on('end', function(){
            var reqObj = JSON.parse(jsonData);
            var resObj = {
                message: reqObj.name,
                questioin : reqObj.occupation
            };
            
            res.writeHead(200);
            res.end(JSON.stringify(resObj));
        });
    }).listen(3000);
    ```



    아래는 POST 방식으로 JSON데이터를 서버에 보내고 JSON응답을 처리하는 HTTP 클라이언트 구현이다.

    ```javascript
    var http = require('http');
    var options = {
        host: '127.0.0.1',
        path: '/',
        port: '3000',
        method: 'POST'
    };
    
    function readJSONResponse( response ){
        var responseData = '';
        
        response.on('data', function(chunk){
            responseData += chunk;
        });
        
        response.on('end', function(){
            var dataObj = JSON.parse(responseData);
            console.log(dataObj);
        });
    }
    
    var req = http.request(options, readJSONResponse);
    req.write('{"name":"Bilbo", "occupation":"Burglar"}');
    req.end();
    ```

- #### HTTPS 서버와 HTTPS 클라이언트 구현

  - ##### HTTPS

    >HTTPS는 Hypertext Transfer Protocol Secure의 약자로, HTTP 클라이언트와 HTTP 서버 간에 안전한 통신을 제공하는 통신 프로토콜이다. HTTPS는 보안기능을 확보하기 위해  TLS/SSL(전송층 보안/보안 소켓층) 프로토콜 위에 HTTP를 구현한 것이다.
    >
    >
    >HTTPS는 두 가지 방식으로 보안 기능을 제공한다. 첫번째로 단기간에 사용되는 세션 키 교환을 위해 장기간 사용되는 공개 키와 비밀 키를 사용해 클라이언트와 서버간 데이터 암호화를 진행한다. 또한 인증 기능을 통해 접속하려는 웹 서버가 의도한 서버가 맞는지 확인해 중간자 공격을 방지할 수 있다.

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


