# Socket.io

###  WebSocket

> WebSocket은 사용자의 브라우저와 서버 사이의 동적인 양방향 연결 채널을 구성하는 HTML5 프로토콜이다. 기존에는 클라이언트의 요청이 있어야만 서버의 메세지를 클라이언트에게 전달할 수 있었는데, WebSocket을 사용하면 클라이언트의 요청 없이 메세지를 전달하는 것이 가능하다.
>
> 이런 특성으로 인해 WebSocket은 서버의 데이터를 클라이언트의 요청없이 즉시 전달할 수 있는 실시간 프로그램 작성에 매우 효과적이다.

- WebSocket 클라이언트

  ```javascript
  //웹소켓 전역 객체 생성
  let ws = new WebSocket("ws://localhost:3000");
  
  //연결이 되면 서버에 메세지를 전달
  ws.onopen = (event) => {
      ws.send("Client message : hello!");
  }
  
  //서버로부터 메세지를 수신
  ws.onmessage = (event) => {
      console.log("Server message : ", event.data);
  }
  
  //error 처리
  ws.onerror = (event) => {
      console.log("Error");
  }
  ```

- WebSocket 서버

  > **ws** 라는 WebSocket 라이브러리 모듈을 사용한다. 
  >
  > ```
  > $ npm install --save ws
  > ```

  ```javascript
  const WebSocketServer = require("ws").Server
  const wss = new WebSocketServer({port: 3000});
  
  //연결이 수립되면 클라이언트에 메세지를 전송하고 클라이언트로부터의 메세지를 수신.
  wss.on('connection', (ws) => {
      ws.send('Hello, I am walli');
      ws.on('message', (message) => {
          console.log(`Received : ${message}`);
      });
  });
  ```



### Socket.io

> WebSocket은 오래된 브라우저의 경우 지원하지 않는 경우가 있다. Socket.io는 node.js를 이용하여 브라우저 버전과 종류에 상관없이 실시간 웹을 구현할 수 있도록 한 기술이다. 즉 Cross-platform WebSocket API 라고 할 수 있다.
>
> ```
> $ npm install --save socket.io
> ```

- Socket.io 서버

  ```javascript
  var app = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  
  //localhost:3000으로 서버에 접속하면 클라이언트에 index.html파일을 넘겨준다.
  app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });
  
  //클라이언트와 connection이 되면 이벤트가 실행
  io.on('connection', function(socket){
    console.log('a user connected');
    //클라이언트로부터 메시지가 오면...
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      //접속된 모든 클라이언트에게 메시지 전송
      io.emit('chat message', msg);
    });
  
    //클라이언트 접속이 끊어지면... 'disconnect'는 정의된 이벤트인듯 하다.
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
  
   
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
  ```

  