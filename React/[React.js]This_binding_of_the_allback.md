# "This" binding of the callback function

리액트에서는 props 와 state라는 속성이 있다. props는 부모 컴포넌트로 부터 받아오는 값이며, 이 값을 직접 수정할 수 없다. 리액트의 `state` 일반 자바스크립트의 객체와 동일하게 다뤄서는 안된다. state는 독립적인 컴포넌트의 상태이며 state 값을 바꿀때는 절대로 직접 수정해서는 안되고, `setState` 메서드를 이용해야 한다. 

리액트을 이용해 개발을 하다보면 자식 컴포넌트에서 어떤 이벤트가 발생했을때 부모 컴포넌트의 state를 바꿔야하는 상황이 온다. 가장 먼저 드는 생각은 함수를 하나 만들어 그 안에 `setState` 메서드를 실행시키는 함수를 props로 넘기면 될 것 같은 생각이 든다. 

`handleEvent` 메서드를 작성하고 그안에 `setState` 를 작성하고 이를 자식 컴포넌트의 props 로 전달한다.

```javascript
class Parent extends Component{
    ...
    handleEvent(){
        this.setState({ ... });
    }
                      
    render(){
		return <ChildComponent handleClick={this.handleEvent} />            
    }
}
```

언듯 보기엔 잘 동작할 것 처럼 보이지만, 확인해 보면 의도한데로 동작하지 않는다. 유심히 코드를 따라가보면 이유를 알 수 있다. 바로 this 바인딩 문제이다.

`handleEvent` 메소드를 보면 내부에서 `this.setState` 를 호출하고 있는데, 의도한데로라면 this가 Parent 컴포넌트를 가리켜야 하지만 이벤드 핸들러가 실행되는 시점에서의 `this` 는 Parent 컴포넌트가 아니다. 

따라서 `this` 를 Parent로 직접 바인딩하여 넘겨주어야 한다.

```javascript
<ChildComponent handleClick={this.handleEvent.bind(this)} />   
```



또는 arrow funcition을 이용하는 방법도 있다. arrow function의 this는 해당 arrow function을 감싸고 있는 인스턴스를 가리킨다. 이렇게 하면 따로 바인딩을 안해도 된다.

```javascript
handleEvent = () => {
    this.setState({ ... })
}
```