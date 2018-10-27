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