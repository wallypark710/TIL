# Local Storage & Session Storage

> HTML5에서는 localStorage 와 sessionStorage API를 제공한다. 이 두 저장소는 거의 비슷하지만 sessionStorage의 경우 세션이 종료되면 저장된 데이터도 함께 사라진다.
>
> 이 브라우저에서 로그인이 되어있는지, 토큰을 저장할 때와 같은 임시적인 용도로 사용한다.



### Local Storage

#### 1. 데이터 저장

```
localStorage.setItem('key', 'value');
```



#### 2. 데이터 불러오기

```js
localStorage.getItem('key');

//매개변수를 넘기지 않으면 모든 정보를 가져온다.
localStorage.getItem();
```



#### 3. 데이터 삭제

```js
localStorage.removeItem('key');

//모든 정보 삭제
localStorage.clear();
```





### Session Storage

#### 1. 데이터 저장

```
sessionStorage.setItem('key', 'value');
```



#### 2. 데이터 불러오기

```js
sessionStorage.getItem('key');

//매개변수를 넘기지 않으면 모든 정보를 가져온다.
sessionStorage.getItem();
```



#### 3. 데이터 삭제

```js
sessionStorage.removeItem('key');

//모든 정보 삭제
sessionStorage.clear();
```

