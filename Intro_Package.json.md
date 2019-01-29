# Package.json

> npm을 활용 하기 위한 정보들이 모여있는 설정 파일이다. package.json은 다음과 아래와 같은 부분으로 구성되어 있다.



#### 1. scripts

```js
"scripts" : {
    "start" : "node app.js",
    "build" : "webpack --mode production",
    "test" 	: "jest"
}
```



#### 2. dev - dependency

: production과 관계없는 개발만을 위한 dependency

```js
"devDependencies" : {
    ...list...
}
```

- 설치할 때는 다음과 같은 옵션으로 설치한다.

  ```
  $ npm install --save-dev "package_name"
  ```



#### 3. dependencies

: production과 관계있는 dependency

```
"dependencies" : {
    ...list...
}
```

- 설치할 때는 다음과 같은 옵션으로 설치한다.

  ```
  $ npm install --save "package_name"
  ```

  