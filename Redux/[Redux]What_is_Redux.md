# What is Redux

> React에서 데이터는 한 방향으로만 흐른다. 즉 단방향 데이터 흐름을 가지고 있다. 자식 컴포넌트는 부모컴포넌트에게 props를 넘겨받아 데이터를 처리한다. 자식 컴포넌트 끼리의 데이터 교류는 없고, 항상 부모 컴포넌트를 거쳐가야 한다. 
>
> 이러한 트리 구조에서 depth가 작을때는 큰 문제가 없지만 프로그램이 복잡해질수록 문제는 커진다. 한 컴포넌트의 변화가 같은 레벨에 있는 컴포넌트에 영향을 주려면 부모 컴포넌트 까지 따라 올라갔다 내려와야한다.
>
> Redux는 이러한 복잡한 데이터의 흐름을 해결해준다. 컴포넌트 밖에서 모든 데이터를 가지고 있고, 각각의 컴포넌트에서 데이터가 필요하면 부모 컴포넌트에서 내려주는것이 아니라 store라는 저장공간에서 가지고 오는 방식으로 동작한다.



![redux](./redux.png)



> Redux는 리액트와 합이 잘 맞지만 독립적인 라이브러리이므로, 리액트 없이 사용할 수 있다.



## Feature

- #### Action

  : 어떤 일이 일어날지만 정의

  ```javascript
  const ACTION_NAME_1 = 'action_1';
  const ACTION_NAME_2 = 'action_2';
  const ACTION_NAME_3 = 'action_3';
  
  const action_func_1 = (param) => ({
      type : ACTION_NAME_1,
      param
  })
  
  const action_func_2 = (param) => ({
      type : ACTION_NAME_2,
      param
  })
  
  const action_func_3 = (param) => ({
      type : ACTION_NAME_3,
      param
  })
  
  export { ACTION_NAME_1, ACTION_NAME_2, .. all }
  ```

  

- #### Reducer

  : 액션이 일어났을 때 실제 어떤 일이 일어날지를 기술. reducer가 한개 일수도 있고, 여러개일 수 도 있다.

  ```javascript
  import { action_name ... } from '...';
  
  const initState = {
      ...
  };
    
  const Reducer = (state=initState, action) => {
  	switch(action.type){
          case ACTION_1 : 
              ...
              return ...
  
          case ACTION_2 : 
              ...
              return ...
  
          default : 
              return ...
      }
  }
      
  export default Reducer;
     
  ```

  

- #### Dispatcher

  : 액션은 반드시 dispatcher가 실행시켜야 한다.

- #### Connect

  : state가 변경되면 자동으로 변경된 상태를 props로 넘겨주도록 연결하거나, 컴포넌트에서 state를 변경하고자 할때 dispatch를 연결시켜 액션을 날리도록 연결시킨다.

  ```javascript
  import {connect} from 'react-redux';
  
  /*... YOUR COMPONENT Here...*/
  
  mapStateToProps = (state) => ({
      props_name : state.diff,
      ...
  });
      
  mapDispatchToProps = (dispatch) => ({
  	props_method_name : () => dispatch(execute_action()),
      ...
  })
  
  connect(mapStateToProps, mapDispatchToProps)(YOUR_COMPONENT);
  ```

  

- #### Store

  : 모든 state 와 reducer를 가지고 있다.

  ```javascript
  import { createStore } from 'redux';
  
  const store = createStore(Reducer);
  ```

  