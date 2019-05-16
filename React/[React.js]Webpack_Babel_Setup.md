# React(Webpack + Babel) Setup

1. npm 초기화

```bash
$ npm init -y
```

2. 의존성 모듈 설치

```json
{
  ...
  "devDependencies": {
    
    //babel setting
    "@babel/core": "^7.4.4",
    "@babel/preset-env": "^7.4.4",
    "@babel/preset-react": "^7.0.0",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.5",
    
    //lint setting
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.2",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-react": "^7.13.0",
    
    //html setting
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    
    //css setting
    "mini-css-extract-plugin": "^0.6.0",
    "css-loader": "^2.1.1",

    //webpack setting
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1"
  },
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}

```



3. babel setting

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```



4. webpack setting

```js
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunckFilename: '[id].css',
    }),
  ],
};

```



5. package.json Script setting

```json
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```



6. 기본 파일 생성

```js
# ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
```

```jsx
# ./src/App.js
import React from 'react';

const App = () => {
  return (
    <div>
      <p>Init React</p>
    </div>
  );
};

export default App;
```

```html
# ./public/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Initial Setting</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```



7. Build

```bash
$ npm run build

```



8. start script 추가

```json
"scripts": {
  ...,
  "start": "webpack-dev-server --mode development --open"
}

```

