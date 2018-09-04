# Scope

> - javascript의 변수 관리는 블록범위가 아닌 함수 단위로 유효범위가 설정.
> - 변수명을 중복하여 사용 가능하며 변수를 사용하는 곳에서 가장 가까운 변수를 참조.
> - 변수생성 키워드(var)가 없는 경우에는 전역 변수로 설정.
> - 실행시 변수 검색은 렉시컬 영역 기준으로 한다.
> - 변수가 정의되는 시점에서 스코프가 형성된다.
>   - 렉시컬 스코핑 : 스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다. 정적 스코프라고도 불린다.



# Execution Contexts

> - 함수가 실행될 때 컨텍스트가 생성됨.
>
> - 컨텍스트 생성시 컨텍스트 안에 변수객체( arguments, variable ), scope chain, this가 생성됨.
>
> - 호이스팅
>
>   - 변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상( 대입 부분은 그대로 남아있다. )
>
>   - 선언식을 가장 위로 끌어 올린다.
>
>   - 변수의 경우 선언과 동시에 할당이 되어있으면 선언식만 가장 위로 올라간다.
>
>     ```javascript
>     var a = 2; // 일경우
>     
>     1. var a;	// a 선언이 가장 위로 올라간다.
>     2. a = 2;	// 대입연산은 원래 위치에 도달했을때 이루어진다.
>     ```



# This

>- 함수가 어떻게 불리는지에 따라 결정된다.
>
>- Call site : 함수가 호출된 지점을 의미. javascript에서는 함수가 호출되는 지점에서의 포함된 객체를 찾아 해당 객체와 this를 바인딩한다.
>
>- this의 4가지 바인딩 패턴
>
>  1. 글로벌 레퍼런스 or 일반함수 호출시
>
>     :  this는 전역(window)를 가리킨다.
>
>  2. 메소드 호출시
>
>     : this는 부모 객체를 가리킨다.
>
>  3. 생성자에 의한 호출시
>
>     : this는 새로 생성된 객체를 가리킨다.
>
>  4. call or apply에 의한 호출시
>
>     : this는 첫번째 argument가 지칭하는 것.
>
>- example
>
>  ```javascript
>  function Espresso(){
>      this.cost = 2500;
>  }
>  
>  function Americano() {
>      Esspresso.call(this);
>      this.cost = (new Esspresso()).cost + 500;
>      this.water = 250;
>  }
>  
>  console.log(new Americano());
>  ```
>
>  - new Americano() 가 실행됬을때 동작은 다음과 같다.
>    1. new 키워드에 의해 Americano 객체가 생성되어 Americano 생성자 함수 내부의 this는 Americano 로 바인딩 된다.
>    2. Esspresso.call(this) 에서 this는 Americano 이므로 Espresso 생성자 함수 내의 this는 Americano이다. 즉 Americano 객체 내부의 cost라는 속성이 생성되고 그 값은 2500 으로 할당된다.
>    3.  this.cost = (new Esspresso()).cost + 500; 에서 this.cost 의 this는 Americano를 가리키므로, Americano의 cost속성에 Espresso.cost 값에 500 이 더해진 값이 할당 된다.
>    4. this.water = 250; 에서 this는 Americano이므로 Americano 객체 내부의 water라는 속성이 추가되고, 값은 250 으로 할당된다.
>



# Closure

> - 함수가 선언되는 순간, 스코프 밖의 외부변수를 참조하고 있다면, 함수가 실행 될 때를 대비해 외부변수를 참조할 수 있게 해준다.
>
> - 외부함수에서 내부함수를 반환하는 것을 말함.
>
> - 함수는 실행될때 읽어온다. 컴파일 할때는 '아~ 함수구나' 정도만 체크
>
> - 변수를 프라이빗하게 관리하고 싶을때 사용.
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
>   ```
>





