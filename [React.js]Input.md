# Input State

> input 컴포넌트의 입력을 state에 담는 방법.

```jsx
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name='name'
        />
            
        <input
          placeholder="번호"
          value = {this.state.phone}
          onChange={this.handleChange}
          name='phone'
        />
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    );
  }
}

export default PhoneForm;
```

- <input> 태그안에 다양한 속성을 부여할 수 있다.
  - 이벤트 생성시 반드시 camelCase로 작성해야 한다.
  - name 속성은 여러 input 태그에 식별자를 부여한다. 이 속성은 `event.target.name` 을 통해 접근 할 수있다. ( handleChange 메서드에서 사용 )
- 