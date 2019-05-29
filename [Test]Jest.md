# Jest

> Jest는 facebook에서 만든 testing framework 이다. 리액트에서 공식지원하고 있는 testing framwork 이기도 하다.



## Usage

```js
// 모든 테스트의 시작 전에 fn을 실행
beforeEach(fn)	
```

```js
// 테스트 블록 형성
describe(name, fn)

// 테스트 블록에 속한 모든 테스트를 검사하지 않고 넘어감
describe.skip(name, fn)
```

```js
// 테스트 항목 만들기. fn은 나중에 실행됨
test(name, fn, timeout);
it(name, fn, timeout);
```

```js
// 테스트 항목 건너뛰기
test.skip(name, fn);
it.skip(name, fn);
xit(name, fn);
xtest(name, fn);
```

