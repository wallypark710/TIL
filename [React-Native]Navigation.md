# Navigation

> 리액트 네이티브 개발시 navigation의 사용은 거의 필수적이다. 리액트 네이티브에서 사용할 수 있는 네비게이션의 옵션은 다양한데 그중 react-navigation(RN) 과 react-native-navigation(RNN)을 가장 많이 사용한다. 여기서는 React-navigation의 사용법을 알아본다. 조만간 react-native에서 네비게이션 부분을 보완해줄거라는 이야기가 있다.
>
> React-navigation의 초기 환경설정부터 사용법까지를 간략하게 알아본다. 



### Setting

```js
$ npm install --save react-navigation  //expo를 사용할경우 여기까지만 하면 된다.

$ npm install --save react-native-gesture-handler
$ react-native link react-native-gesture-handler
```

- link의 경우 직접 환경설정을 해주는것이 좋다.

  1. 프로젝트 디렉토리에서 ios 디렉토리에 `projectName.xcodeproj` 파일을 연다.
  2. xcode가 실행되고, 하위 폴더중 Libraris 폴더에 `RNGestureHandler.xcodeproj` 파일을 추가한다. ( 위 파일은 프로젝트 디렉토리의 node_module에 해당 패키지 디렉토리, ios 폴더에 들어있다. )
  3. Build Phases의 Link Binary With Libraries에 `libRNGestureHandler.a` 를 추가한다.

  

- 위 패키지가 아니더라도 패키지를 추가할때 위와 같은 방법으로 추가한다.

  

### Start React-Navigation

> 네비게이션을 구성할 때, 크게 두가지 구조가 있다. Stack 구조와 Tab 구조이다. 
>
> Stack 구조는 각각의 스크린이 쌓여가며 뷰를 보여준다. 가장 위의 스크린에서 뒤로가기를 누르면 바로 아래 스크린으로 이동할 수 있는 구조이다. 모바일 환경을 생각해보면 무슨구조인지 직관적으로 이해가 될 것이다. 
>
> Tab 구조는 스크린 아래나 위쪽에 여러개의 Tab을 만들어 탭을통해 스크린간 이동을 구성하는 것이다.
>
> 보통 이 두가지 구조를 적절히 섞어서 사용한다.

```js
//TabBar
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Root = createBottomTabNavigatior({
    <Screen_name> : {
      screen : <Component_name>  
    },
                                       
    <Screen_name> : {
      screen : <Component_name>  
    },
    
    <Screen_name> : {
      screen : <Component_name>  
    },
});

const AppContainer = createAppContainer(Root); // 이 작업은 가장 상위에서만 해준다.
```

```js
//Stack
import { createStackNavigator } from 'react-navigation';

export default createStacknavigator({
     <Screen_name> : {
     	screen : <Component_name>  
    },
                                    
      <Screen_name> : {
      	screen : <Component_name>  
    },
    
     <Screen_name> : {
     	screen : <Component_name>  
    },
},
{
	initialRouteName: <Screen_name>
}); 
```



>React-navigation 은 간편하고 직관적인 사용법과 풍부한 레퍼런스를 제공하여 사용하기에 매우 편하지만, 역시 모든것엔 장단이 있듯이 React-naviation이 가지는 한계가 몇가지 있다.
>
>- Dynamic Routes
>
>  : 리액트 네비게이션에서는 동적 라우팅을 할 수 없다. 동적으로 라우팅이 되는것처럼 흉내낼순 있지만 그작업이 매우 번거롭고 코드역시 복잡해 진다.
>
>  사실 개발할때 가장 어려움을 겪은 부분이 바로 이부분이다. 생각보다 동적 라우팅이 필요한 경우가 많아 구현함에 어려움이 있었다.
>
>- Perfomance
>
>  : 리액트 네비게이션은 네이티브가 아닌 일반 자바스크립트로 작성되어 있다. 때문에 모바일 환경에서 모바일 만의 기능들 ( 제스처 핸들링 )을 구현할 때 별도의 라이브러리를 설치해야한다. 이러한 부분들은 많은 리소스 사용으로 연결되고 이는 퍼포먼스를 저하시킬 수 있는 원인을 제공한다.





https://reactnavigation.org/docs/en/hello-react-navigation.html

