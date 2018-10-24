# JSX

> JSX는 기존 자바스크립트의 확장 문법이다. 자바스크립트 내부에 마크업 코드를 작성할 수 있게 해준다. JSX로 작성한 코드는 바벨에서 컴파일이 끝나면 일반 자바스크립트 객체로 변환된다.

```javascript
const element = (
    <h1 className="hello"> Hello, walli! </h1>
);
```

위 코드는 컴파일 되면 아래와 같이 변환된다.

```javascript
const element = React.createElement(
    'h1',
    {className: 'hello'},
    'hello, walli!'
);
```



### Rule

> JSX를 사용하기 위해 몇가지 규칙을 지켜야 한다.

#### 1. 태그 닫기

html을 작성할 때 `<div>...</div>` 와 같이 태그는 쌍으로 작성하곤 했다. 하지만  ` input` 태그나 `br` 태그는 작성시 태그를 닫지 않고도 사용 가능했는데 리액트에서는 모든 태그를 반드시 닫아야 하고, 닫지 않을 경우 오류가 발생한다.

#### 2. Element wrapping

두개 이상의 element는 무조건 하나의 엘리먼트로 감싸져있어야 한다.

```JSX
class App extends Component {
    render(){
        return(
            <div> hello </div>
            <div> walli </div>
        );
    }
}
export default App;
```

위와 같이 작성하면 오류가 발생한다. 따라서 아래와 같이 작성해야 한다.

```JSX
class App extends Component {
    render(){
        return(
            <div>
            	<div> hello </div>
            	<div> walli </div>
            </div>
        )
    }
}
export default App;
```

```JSX
class App extends Component {
    render(){
        return (
            <Fragment>
            	<div> hello </div>
            	<div> walli </div>
            </Fragment>
        )
    }
}
export default App;
```



#### 3. Javascript in JSX

JSX 안에서 자바스크립트 값을 사용하려면 `{ ... }` 를 사용한다.

```JSX
class App extends Component {
    render(){
        const name = 'walli';
        return (
            <div>
                hello {name}!
            </div>
        );
    }
}
export default App;
```



#### 4. 조건부 렌더링

JSX 내부에서 조건부 렌더링을 할 때는 삼항 연산자를 사용하거나, AND 연산자를 사용한다. if 문을 사용할 수 없다. if문을 사용하려면 IIFE(즉시실행함수)로 작성하여 사용하여야 한다.

```JSX
class App extends Component {
    render(){
        return(
          <div>
                {
                    1+1 === 2 ? (<div>TRUE</div>) : (<div>FLASE</div>)
                }
          </div>  
        );
    }
}
export default App;
```

```JSX
class App extends Component {
    render(){
        return(
          <div>
                {
                    1+1 === 2 && (<div>TRUE</div>);
                }
          </div>  
        );
    }
}
export default App;
```

```JSX
class App extends Component {
    render(){
        const value = 1;
        return(
          <div>
                {
                    (() => {
                        if(value === 1) return (<div>True</div>);
                    })()
                }
          </div>  
        );
    }
}
export default App;
```



#### 5. Style 과 className

스타일 적용은 다음과 같이 할 수 있다. 객체 형태로 작성해 주어야 한다.

```JSX
class App extends Component {
    render(){
        const style = {
            color : 'white',
            fontSize : '12px'
        };
        
        return (
            <div style = {style} >
                hello, walli
            </div>
        );
    }
}
export default App;
```

html 에서의 class는 리액트에서 className이다.

```react
<div className='App'> React </div>
```







