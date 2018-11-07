# Array Control

> React에서는 state 내부의 값을 직접적으로 수정하면 절대로 안된다.(불변성 유지) 기존 배열의 내장함수인 push, splice, unshift, pop과 같은 함수는 배열자체를 직접 수정하게 되므로 적합하지 않다. 기존 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter와 같은 함수를 사용해야 한다.



### Add Data

```jsx
import React, {Component} from 'react';
import PhoneForm from './PhoneForm';

class App extends Component{
    id = 1
	state = {
        information : [
            {
                id:0,
                name:'walli',
                phone:'010-1111-2222'
            }
        ]
	}

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({id this.id++, ...data})
        })
    }
    
    render(){
        const { information } = this.state;
        return(
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                {JSON.stringify(information)}
            </div>
        );
    }
}

export default App;
```

- 컴포넌트 내부에서 필요한 값 중에서, 렌더링 되는것과 상관 없는것은 state에 넣어줄 필요가 없다.
- event에 함수를 전달할때는 함수를 전달한다. 함수의 실행결과를 넘기면 안된다.
- render 함수 내부에 const 변수를 선언하여 결과를 출력한다.