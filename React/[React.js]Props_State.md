# Props

> 리액트 컴포넌트에서 다루는 데이터이다. props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값이다. 자식 컴포넌트에서는 props를 받아오기만하고, 받아온 props를 직접 수정 할 수 는 없다.

```jsx
import React, { Component } from 'react';

class MyName extends Component {
    render(){
        return (
            <div>
                hello! my name is {this.props.name}.
            </div>
        );
    }
}
export default MyName;
```

```jsx
import MyName from './MyName';

class App extends Component {
    render(){
        return (
            < MyName name='walli' />
        );
    }
}
export default App;
```

위 예제와 같이 props값은 `name='walli'`와 같이 태그의 속성을 설정해주는 것 처럼 전달한다.



### default Props

```jsx
import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name : 'default name'
    };

	render(){
        return (
            <div>
                hello! my name is { this.props.name }.
            </div>
        )
	}
}
export default MyName;
```

```jsx
import React, { Component } from 'react';

class MyName extends Component {
	render(){
        return (
            <div>
                hello! my name is { this.props.name }.
            </div>
        )
	}
}

MyName.defaultProps = {
    name : 'default name'
}

export default MyName;
```





# State

> 리액트 컴포넌트에서 다루는 데이터이다. state는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다. 즉, 동적인 데이터를 다룰 때 사용한다. 
>
> state가 변경될 때 마다 render()함수가 호출 된다.
>
> state값은 절대 직접적으로 변경하지 않는다. 반드시 `this.setState`를 이용해야한다.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
	//class fields
    state = {
        number : 0;
    }

    handleIncrease = ()=>{
        this.setState({
            number : this.state.number + 1
        });
    }

    handleDecrease = ()=>{
        this.setState({
          number : this.state.number - 1
        });
    }

    render(){
        return (
            <div>
                <h1>Counter</h1>
                <div> value : { this.state.number }</div>
                <button onClick={this.handleIncrese}>+</button>
                <button onClick={this.handleDecrese}>-</button>
            </div>
        )
    }
}

export default Counter;
```

- state 값을 바꾸기 위해서는 `this.setState` 를 무조건 거쳐야 한다. 리액트에서는 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계되어있다.

- Counter 클래스의 메서드들은 다음과 같이 쓸 수도 있다.

  ```javascript
  handleIncrease = () => {
      this.setState(
          (state)=>({
              number : state.number + 1
          })
      );
  }
  ```

  ```javascript
  handleIncrease = () => {
      const {number} = this.state;
      this.setState({
         number : number + 1 
      });
  }
  ```

  ```javascript
  handleIncrease = () => {
      this.setState(
          ({number}) => ({
              number : number + 1
          });
      )
  }
  ```

- 이벤트에 전달하는 값은 함수 여야 한다. 절대 실행 시키지 않는다.

  ```jsx
  <button onClick = { this.handleIncrease }> + </button>
  
  //아래와 같이 하면 안됨!!!!
  <button onClick = { this.handleIncrease() }> + </button>
  ```

