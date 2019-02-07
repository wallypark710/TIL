# Cocoapods 

CocoaPods 는 Xcode dependency manager 이다. npm 과 같은 역할을 하는 녀석이다. npm 을 사용할 때 `package.json` 파일을 만들어 사용하는 것 처럼, Cocoapods을 사용할 땐 `Podfile` 파일을 만들어 사용한다. `Podfile` 안에는 설치할 라이브러리와 버전등을 기입하고 ` pod install` 을 통해 설치한다.

하지만 이 너무 나도 편리한 이 dependency manager때문에 혼돈에 빠질 수 있으니 조심하자. react-native를 셋팅할 때 라이브러리를 설치하고, pod install을 진행했더니 다음과 같은 에러가 날 반겨주었다.

```
clang: error: no such file or directory: '/Users/<user>/Library/Developer/Xcode/DerivedData/test-fohpnlfelwvgtiaczpjponpxpgyd/Build/Products/Debug-iphonesimulator/<lib_name>.a'
```

라이브러리를 설치하고 xcode에서 `Link Binary with Libraries` 에 연결해 주는데, 분명 추가가 되어있지만 위와같은 에러가 발생한다. 

`pod install` 을 하게되면,  `Link Binary with Libraries` 에 추가할 때, 같은 라이브러리에 대해 같은 이름으로된 두개의 파일이 나타난다. 여기서 반드시 `target in 'Pods' project` 을 선택해야 한다.

