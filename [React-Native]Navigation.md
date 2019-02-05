# Navigation

> React-navigation의 초기 환경설정부터 사용법까지를 간략하게 알아본다.



### Setting

```
$ npm install --save react-navigation

$ npm install --save react-native-gesture-handler
$ react-native link react-native-gesture-handler
```

- link의 경우 직접 환경설정을 해주는것이 좋다.

  1. 프로젝트 디렉토리에서 ios 디렉토리에 `projectName.xcodeproj` 파일을 연다.
  2. xcode가 실행되고, 하위 폴더중 Libraris 폴더에 `RNGestureHandler.xcodeproj` 파일을 추가한다. ( 위 파일은 프로젝트 디렉토리의 node_module에 해당 패키지 디렉토리, ios 폴더에 들어있다. )
  3. Build Phases의 Link Binary With Libraries에 `libRNGestureHandler.a` 를 추가한다.

  

- 위 패키지가 아니더라도 패키지를 추가할때 위와 같은 방법으로 추가한다.

  

  

### Start React-Navigation

https://reactnavigation.org/docs/en/hello-react-navigation.html

