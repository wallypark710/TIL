# Array Control

> React에서는 state 내부의 값을 직접적으로 수정하면 절대로 안된다.(불변성 유지) 기존 배열의 내장함수인 push, splice, unshift, pop과 같은 함수는 배열자체를 직접 수정하게 되므로 적합하지 않다. 기존 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter와 같은 함수를 사용해야 한다.



### Add Data

```jsx
import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
    );
	// PhoneInfo 컴포넌트의 실행 결과로 데이터를 jsx로 반환한다.
      
    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;
```

- map 함수를 통해 PhoneInfo 가 반환한 jsx를 배열로 저장한다.
- 배열을 렌더링 할 땐, 반드시 key값을 설정해 주어야 한다.