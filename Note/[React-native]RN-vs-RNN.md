## React-Navigation vs React-Native-Navigation

리액트 네이티브를 다루면서 가장 고민이 됬던 부분중에 하나가 바로 네비게이션 선택이었다. 리액트 네이티브에서 사용할 수 있는 네비게이션은 정말 다양하다. 그 중 react-navigation 과 react-native-navigation의 선택에서 고민을 많이했다. 

react-navigation은 js기반으로 작성되어있고,  react-native-navigation은 native기반으로 작성되어 있다. 처음시작은 react-native-navigation으로 시작했다. 차근차근 공부해 가면서 구현을 하는데, 나의 이해가 부족한것이겠지만, 코드가 복잡하다는 생각이 끊이질 않았다. native가 익숙해 지면 좀 달라질지 몰라도 native설정 부분이 너무 길어지고 가독성이 떨어지는 느낌을 지울 수가 없었다. 

아직 개발초기 단계이니 다른것도 한번 써보자는 마음에 react-navigation을 적용해봤다. js기반이어서인지 코드가 훨신 익숙하고 간결한 느낌이 들었다. 하지만 개발이 진행될 수록 몇가지 아쉬움이 뒤따랐다. 먼저는 좀 느리다라는 느낌을 받았다. 뭔가 버벅이는 느낌이었다. 두번째는 컴포넌트를 하나 구성하려면 해줄게 많았다. 뭔가 js ES5에서 prototype을 이용해 상속을 흉내내는 것 같은 느낌을 받았다.

사실 아직 두 네이게이션중 무엇을 사용해야할지 모르겠다. react-native에서 navigation 부분을 보완해줄거라는 이야기가 있던데. 공부해야할 거리로 남겨놓고 지속적으로 지켜봐야겠다.

