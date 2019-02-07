# Handle Touches

React Native에서 touch event ( click evet )는 React DOM에서와 다소 다른 점이 있다. React DOM에서는 모든 태그에 onClick event를 걸어줄 수 있지만, React Native에서는 모든 태그에 onPress event를 걸어줄 수 없다.

React Native에서 touch event를 걸어줄 수 있는 컴포넌트는 다음과 같다.

- Button
- TouchableHighlight
- TouchableNativeFeedback
- TouchableOpacity
- TouchableWithoutFeedback



touch event를 걸어주고 싶은 component를 위 컴포넌트중 하나로 감싸서 사용해야 한다.