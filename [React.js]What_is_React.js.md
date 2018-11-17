# What is React.js

> React는 컴포넌트라는 개념에 집중이 되어있는 자바스크립트 라이브러리이다. MVC 패턴에서 View 부분을 컴포넌트로 만들기 위한 라이브러리이다.



## Feature

### 1. UI

> React는  UI 컴포넌트를 만들기 위한 라이브러리이다.

### 2. Virtual DOM

> React는 자바스크립트 내에  DOM Tree와 같은 구조체를 virtual DOM으로 가지고 있다. 데이터가 바뀌었을 때, 일단 바뀐 데이터로 뷰를 그려 virtual DOM에 렌더링후 , virtual DOM 구조체의 전후 상태를 비교하여 변경이 필요한 최소한의 요소만 실제 DOM에 반영한다. 따라서 최소한의 DOM만 갱신되기 때문에 빠르게 처리할 수 있다.

### 3. Data Flow

> React는 단방향 데이터 흐름을 지향한다. 



## Ready

페이스북에서 제공해주는 `create-react-app`을 통하여 간단하게 프로젝트를 생성할 수 있다.

```terminal
npm install -g create-react-app
```

설치가 완료되었으면 다음과 같이 명령어를 실행시킨다.

```terminal
create-react-app [project_name]
```

성공적으로 설치가 완료되었으면

```terminal
Success! ...어쩌구저쩌구...
...
Happy hacking!
```

위와같은 결과가 출력된다.

```terminal
cd [project_name] //프로젝트 폴더로 이동후
npm start
```

위 명령어를 실행하면 브라우저에 페이지가 로딩된다.



## Start React

- Component를 구현할 때는 다음과 같은 흐름으로 진행한다.

  1. 컴포넌트 생김새 정의( DOM태그 작성, CSS 스타일 작성 )
  2. 상태 관리 및 props값 전달.

- 기능별로 컴포넌트를 분리하여 작성한다.

- 컴포넌트간의 데이터 이동은 부모 컴포넌트를 통해서 진행한다. 컴포넌트끼리 직접 데이터이동은 삼가한다.

- Component 불러오기

  ```javascript
  import React, { Component } from 'react';
  import './App.css'
  ```

  - 파일에서 JSX를 사용하려면, 꼭 React를 import 해야한다.

- Component 만들기

  ```javascript
  class App extends Component {
      rander(){
          return (
              ...JSX code...
          );
      }
  }
  
  export default App;
  ```

  - 컴포넌트에서 LifeCycleAPI를 사용하거나, state를 사용하는 경우에는 반드시 클래스 형태로 컴포넌트를 만들어야한다.

  - 컴포넌트를 만들때는 Component를 상속 받아 생성한다. 클래스 형태로 만들어진 컴포넌트에는 꼭 `render` 메서드가 있어야하고, `render` 메서드는 JSX 코드를 return 해주어야 한다.

  - 컴포넌트에서 LifeCycleAPI도 사용하지않고, state도 사용하지 않고, 단순히 props만 전달해주면 view를 렌더링하는 역할만 한다면 함수형 컴포넌트 형식으로 컴포넌트를 만들수있다.

    ```jsx
    const Hello = (props)=>{
        return(
            <div> Hello {props.name} </div>
        );
    }
    
    //비구조화 할당
    const Bye = ({name})=>{
        return(
            <div> Bye {name} </div>
        );
    }
    
    export default App; 
    ```

  - `export default` 를 통해 작서한 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 한다.

    ```javascript
    import App from './App'
    ```

- Component 출력

  ```javascript
  ReactDOM.render( <App />, document.getElementById('root') );
  ```

  - 브라우저 상에 작성한 컴포턴트를 보여주기 위해서는 `ReactDOM.render` 함수를 사용한다.
  - 첫 번째 파라미터는 렌더링 할 결과물
  - 두 번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지를 지정한다.