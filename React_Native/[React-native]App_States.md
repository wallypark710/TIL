# App States

> App State는 현재 어플리케이션의 상태를 나타낸다. 앱이 메인에서 실행중인지, 백그라운드에서 실행중인지, 멀티태스킹 상태인지등과 같은 앱의 상태를 나타낸다.

- **active**

  : The app is running in the foreground

- **background**

  : The app is running in the background( on the home screen or in another app )

- **inactive**

  : This is a state that occurs when transitioning between foreground & background



### example

```js
import React, {Component} from 'react';
import {AppState, Text} from 'react-native';

class AppStateExample extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  };

  render() {
    return <Text>Current state is: {this.state.appState}</Text>;
  }
}
```

