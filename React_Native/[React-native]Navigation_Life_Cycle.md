# Navigation Life Cycle

> 리액트의 컴포넌트 라이프 사이클과 같이 리액트 네비게이션에도 스크린 라이브 사이클이 있다. 사이프 사이클의 이해는 필수적이라 생각한다.

- **willFocus**

   : 스크린이 나타났을때 실행.

- **didFocus**

  : 스크린이 나타난 다음에 실행.

- **willBlur**

  : 스크린이 사라지기 직전에 실행.

- **didBlur**

  : 스크린이 사라진 다음에 실행.



### example

```js
componentDidMount(){
    this.props.navigation.addListener('willFocus', callback);
}
```





