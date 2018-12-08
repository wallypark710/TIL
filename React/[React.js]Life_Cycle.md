# LifeCycle API

> Life Cycle은 컴포넌트가 브라우저에 나타날때, 사라질때, 업데이트될때 호출되는 API이다. 이는 각각의 이벤트가 발생할때 항상 실행된다.

###  

## Component 생성

##### *1. constructor()*

##### *2. componentWillMount()*

##### *3. render()*

##### *4. componentDidMount()*

```javascript
componentDidMount(){
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```





## Component 업데이트

##### *1. componentWillReceiveProps()*

```javascript
//컴포넌트가 새로운 props를 받게됐을 때 호출한다. 새로 받게될 props는 nextProps로 조회할 수 있다.
componentWillReceiveProps(nextProps){
	//this.props는 아직 바뀌지 않은 상태이다.
}
```

##### *2. shouldComponentUpdate()*

```javascript
//컴포넌트가 변화가 있는지 없는지를 판단. 변화가 없다면 render()함수를 호출하지 않는다.
shouldComponentUpdate(nextProps, nextState){
    //return false를 하면 업데이트를 하지 않음.
    //기본적으로 true를 반환함.
    return true;
}
```

##### *3. componentWillUpdate()*

```javascript
//이 함수는 shouldComponentUpdate가 true일때만 호출된다.
componentWillUpdate(nextProps, nextState){
    ...
}
```

##### *4. render()*

##### *5. componentDidUpdate()*

```javascript
componentDidUpdate(prevProps, prevState, snapShot){
//이 시점에서 this.props 와 this.state가 바뀌어있다. 그리고 파라미터를 통해 이전 props와 state를 조회할 수 있다.
}
```





## Component 제거

##### *1. componentWillUnmount*

```javascript
// 컴포넌트가 더 이상 필요하지 않게 되면 이 함수가 호출된다.
componentWillUnmount(){
    //이벤트, setTimeOut, 외부 라이브러리 인스턴스 제거
}
```



