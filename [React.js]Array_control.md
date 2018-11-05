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

