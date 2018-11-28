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



### 부모 컴포넌트에게 Data 전달

![input_flow](./input_flow.png)

> 위 그림과 같이 부모 컴포넌트에서 메서드를 만들고, 이 메서드를 자식 컴포넌트에게 전달한 다음 자식 컴포넌트 내부에서 호출하는 방식을 사용한다. props를 통해 데이터를 전달한다.

```jsx
//부모 컴포넌트
import React, { Component } from 'react';
import PhoneForm from './PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
```

```jsx
//자식 컴포넌트
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    // 페이지 리로딩 방지, form 에서 submit이 발생하면 페이지를 reloading하기 때문에
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
            
        <input
          placeholder="number"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
            
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default PhoneForm;
```

