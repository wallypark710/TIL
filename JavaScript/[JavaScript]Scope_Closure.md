# Scope

> - javascript의 변수 관리는 블록범위가 아닌 함수 단위로 유효범위가 설정.
> - 변수명을 중복하여 사용 가능하며 변수를 사용하는 곳에서 가장 가까운 변수를 참조.
> - 변수생성 키워드(var)가 없는 경우에는 전역 변수로 설정.
> - 실행시 변수 검색은 렉시컬 영역 기준으로 한다.
> - 변수가 선언되는 시점에서 스코프가 형성된다.
>   - 렉시컬 스코핑 : 스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다. 정적 스코프라고도 불린다.

```javascript
//for loop 내의 함수선언과 실행

var arr = [];

for(var i = 0; i < 10; i++){
    var temp = function(){
        console.log(i); // i가 전달되지만 i가 정해지지는 않음.
    }
    arr.push(temp);
}

for(var k = 0; k < arr.length; k++){
    arr[k]();
}
// 실행결과
// 10 10 10 10 10 10 10 10 10 10

--------------solution---------------
var arr = [];

// let
for(let i = 0; i < 10; i++){
    var temp = function(){
        console.log(i);
    }
    arr.push(temp);
}

//IIFE
for(var i = 0; i < 10; i++){
    (function(i){
    	var temp = function(){
        	console.log(i);
    	}    
        arr.push(temp);
    })(i);
}

//closure
function pass(i){
    return function(){
        console.log(i);
    }
}

for(let i = 0; i < 10; i++){
    var temp = pass(i);
    arr.push(temp);
}


---------------------------------------
for(var k = 0; k < arr.length; k++){
    arr[k]();
}
//실행결과
//0 1 2 3 4 5 6 7 8 9

```



# Execution Contexts

> - 함수가 실행될 때 컨텍스트가 생성됨.
>
> - 컨텍스트 생성시 컨텍스트 안에 변수객체( arguments, variable ), scope chain, this가 생성됨.
>
> - 호이스팅
>
>   ```text
>   변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상. 즉, 선언과 할당이 분리되는 것.
>   ```
>
>   - 대입 부분은 그대로 그 자리에 남아있다.
>
>   - 함수 선언식은 호이스팅 되고, 함수 표현식은 호이스팅되지 않는다. 
>
>     - 함수 표현식의 경우, 변수가 선언되고 그 변수에 함수가 할당되는 것이기 때문에, 선언된 변수는 호이스팅되어 끌어올려지고, 선언된 변수에 할당은 그 자리에서 이루어진다.
>
>   - 변수의 경우 선언과 동시에 할당이 되어있으면 선언식만 가장 위로 올라간다.
>
>     ```javascript
>     var a = 2; // 이 경우
>     
>     1. var a;	// a 선언이 가장 위로 올라간다.
>     2. a = 2;	// 대입연산은 원래 위치에 도달했을때 이루어진다.
>     ```



# This

>- 함수가 어떻게 불리는지에 따라 결정된다. 호출시점에 따라 달라진다. 함수 선언 위치와는 아무런 상관이 없다.
>
>- Call site : 함수가 호출된 지점을 의미. javascript에서는 함수가 호출되는 지점에서의 포함된 객체를 찾아 해당 객체와 this를 바인딩한다.
>
>- this의 4가지 바인딩 패턴
>
> 1. 글로벌 레퍼런스 or 일반함수 호출시
>
>:  this는 전역(window)를 가리킨다.
>
> 2. 메소드 호출시( 객체를 포함하는 형태로 호출 ex| foo.add() )
>
>: this는 부모 객체를 가리킨다.
>
> 3. 생성자에 의한 호출시
>
>: this는 새로 생성된 객체를 가리킨다.
>
> 4. call or apply에 의한 호출시
>
>: this는 첫번째 argument가 지칭하는 것. ( null or undefined를 넘기면 기본 바인딩이 적용 : window or global )
>
>```js
>//null or undefined를 사용하는것은 안전하지 않다. 내부적으로 this가 가리키는 곳이 달라질 수 있기 때문이다. 이때 어디에도 영향을 끼치지 않는 객체를 만들어 바인딩하면 좋다.
>
>const ø = Object.create(null);   //완전히 비어있는 객체, {}의 경우 object를 상속받고 있다.
>
>exFunc.call( ø, 2);
>
>```
>
>: 명시적 바인딩을 했을경우 변경할 수 없다. 한번 지정한 this는 변경 불가
>
>
>- example
>
>```javascript
>function Espresso(){
> this.cost = 2500;
>}
>
>function Americano() {
> Esspresso.call(this);
> this.cost = (new Esspresso()).cost + 500;
> this.water = 250;
>}
>
>console.log(new Americano());
>```
>
> - new Americano() 가 실행됬을때 동작은 다음과 같다.
>   1. new 키워드에 의해 Americano 객체가 생성되어 Americano 생성자 함수 내부의 this는 Americano 로 바인딩 된다.
>   2. Esspresso.call(this) 에서 this는 Americano 이므로 Espresso 생성자 함수 내의 this는 Americano이다. 즉 Americano 객체 내부의 cost라는 속성이 생성되고 그 값은 2500 으로 할당된다.
>   3. this.cost = (new Esspresso()).cost + 500; 에서 this.cost 의 this는 Americano를 가리키므로, Americano의 cost속성에 Espresso.cost 값에 500 이 더해진 값이 할당 된다.
>   4. this.water = 250; 에서 this는 Americano이므로 Americano 객체 내부의 water라는 속성이 추가되고, 값은 250 으로 할당된다.
>      
>
>- 간접 레퍼런스 참조 : `대입 연산에서의 this 바인딩 주의`
>
>  ```js
>  function foo(){
>    console.log(this.a);
>  }
>  
>  var a = 2;
>  var o = { a: 3, foo: foo };
>  var p = { a: 4 };
>  
>  o.foo(); //3
>  (p.foo = o.foo)(); //2
>  ```
>
>  - 대입 연산의 결과는 대입하려는 값이다.
>    p.foo = o.foo 의 결과는 o.foo 이다. 따라서 (p.foo = o.foo) 의 실행 결과는 foo라는 함수가 되고, 이를 실행하기때문에 일반함수 호출이 된다. this 바인딩은 전역!
>



# Closure

> ```text
> 외부함수에서 내부함수를 반환할 때, 반환된 내부함수를 클로저라 지칭함.
> 
> 반환된 함수는 외부 함수를 참조하고 있어야 한다.
> ```
>
> - closure가 가지는 세가지 scope chain
>
>   1. closure 자신에 대한 접근( closure function 내에 정의된 변수 )
>   2. 외부 함수의 변수에 대한 접근.
>   3. 전역 변수에 대한 접근.
>
> - 함수가 선언되는 순간, 스코프 밖의 외부변수를 참조하고 있다면, 함수가 실행 될 때를 대비해 외부변수를 참조할 수 있게 해준다.
>
> - 반환된 함수는 실행될때 읽어온다. 컴파일 할때는 '아~ 함수구나' 정도만 체크
>
> - 함수 내부의 변수를 프라이빗하게 관리하고 싶을때 사용.
>
> - 반환되는 함수를 묶어서 객체로 반환하기도 한다.
>
> - example
>
>   ```javascript
>   /* Memoize */
>   var _memoize = function(func){
>       var cache = {};
>       
>       return function(){
>           var arg = Object.values(arguments);
>           var key = JSON.stringify(arg);
>           
>           if( !key in cache){
>               cache[key] = func.apply(this, arg);
>           }
>               return cache[key];
>           }
>       }
>   };
>   
>   
>   /* private variable */
>   function makeCounter(){
>       var privateCounter = 0;
>       
>       return {
>           increment: function(){
>               privateCounter++;
>           },
>           decrement: function(){
>               privateCounter--;
>           },
>           getValue: function(){
>               return privateCounter;
>           }
>       }
>   }
>   
>   var counter = makeCounter();
>   counter.increment(); // privateCounter : 1
>   counter.increment(); // privateCounter : 2
>   counter.getValue(); // 2
>   counter.decrement(); // privateCounter : 1
>   counter.getValue(); // 1
>   ```
>





