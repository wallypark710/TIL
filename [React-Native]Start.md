# React-Native

### What is React-Native

```
$ brew install watchman
$ npm install -g react-native-cli
```



### Start

```
$ react-native init <project_name>
```

```js
//move your project directory
$ react-native run-ios
```



### Module

- react-native-maps

  ```js
  $ npm install --save react-native-maps --save
  $ react-native link react-native-maps
  ```

  ```js
  $ cd ios
  $ vi Podfile
  ```

  ```js
  /* 아래 코드 입력 */
  platform :ios, '8.0'
  target 'MapExample' do
  
  pod 'GoogleMaps'
  end
  ```

  ```
  $ gem install cocoapods
  $ pod install
  ```

  https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14

  

- react-native-navigation

  ```
  $ npm install --save react-native-navigation
  ```

  https://wix.github.io/react-native-navigation/#/docs/Installing 

