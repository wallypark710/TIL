# Inheritance & Prototype Chain

> ### Prototype Chain을 이용한 상속
>
> - 속성 상속
>
>   ```text
>   javascript 객체는 속성을 저장하는 동적인 "가방"(자기만의 속성)과 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 prototype, 그 prototype의 prototype 등 prototype chain의 종단에 이를 때 까지 그 속성을 탐색한다.
>   ```
>   - 객체의 어떤 속성에 접근할때, 접근하려는 속성이 객체 첫 단 과 prototype에 모두 존재할 경우 prototype의 속성은 가려진다. 즉 앞 단의 속성이 우선적으로 불린다.
>
> - 메소드 상속
>
>   ```text
>   속성 값으로 지정한 함수, 즉 메소드 역시 위에서 본 속성의 상속과 동일하다. 단 위에서 언급한 속성의 가려짐은 method overriding이라 불린다.
>   ```
>
>   - 상속된 함수가 실행 될 때, this는 상속된 오브젝트를 가리킨다.
>
>
>
> ### Prototype 상속의 종류
>
> - 위임형 상속
>
>   ```text
>   위임형 상속에서 프로토타입 객체는 다른 객체의 기반이 된다. 위임 프로토타입을 상속받는 경우 새 객체는 해당 프로토타입에 대한 참조를 가지고 있다.
>   ```
>
>   - 새 객체의 속성에 접근할 때, 해당 객체가 직접적으로 속성을 소유하고 있는지 먼제 체크한다. 없다면 다음 순서로 prototype을 체크한다. 이 과정은 프로토타입 체인을 따라서 종단에 이를 때 까지 진행된다.
>
>
> - 연결형 상속
>
>   ```text
>   연결형 상속은 한 객체의 속성을 다른 객체에 모두 복사함으로써 상속을 구현하는 방법이다.
>   ```
>
>   - 이 방법은 객체의 동적 확장성을 이용한 방법이다. 객체 복사는 속성의 초기값을 저장하기 위한 좋은 방법이다.
>
>   - Object.assign()을 통해 구현하는 것이 보통이다.
>
>
> - 함수형 상속
>
>   ```text
>   함수형 상속은 새 속성들을 연결형 상속으로 쌓되 상속 기능을 Factory 함수로 만들어 사용하는 방식이다.
>   ```
>
>   - 객체 확장에 함수를 사용하는 가장 큰 이점은 private data를 클로저를 통해 캡슐화 시킬 수 있다는 점이다.
>





# Decorator Pattern

> #### 1. define
>
> ``` text
> 객체의 추가적인 요건을 동적으로 추가한다. 서브 클래스를 만드는 것을 통해 기능을 유연하게 확장할 수 있는 방법을 제공한다.
> ```
>
> - 다른 객체에 영향을 주지 않고 요건을 추가할 수 있게 된다. 또한 상속을 통해 구현 시, 너무 많은 서브 클래스들이 만들어질 것이 우려될 때나 동일한 기능을 반복해 수행하고 싶을 때 유용하다.
>
> - 일반적인 상속 관계보다 유연하게 기능을 확장할 수 있지만 잡다한 클래스가 많아지거나 겹겹이 애워싼 구조 때문에 디버깅이 어려워 질수 있다.
>
>
>
> #### 2. example
>
> ```javascript
> function Espresso(){
>     this.cost = 2500;
> }
> 
> function Water(espresso){
>     espresso.cost = espresso.cost + 500;
>     espresso.water = 250;
>     return espresso;
> }
> 
> function Milk(espresso){
>     espresso.cost = espresso.cost + 500;
>     espresso.milk = 100;
>     return espresso;
> }
> 
> /****** use ******/
> var espresso = new Espresso();
> //{ cost: 2500 }
> var americano = Water(new Espresso());
> //{ cost: 3000, water: 250}
> var latte = Milk(Water(new Espresso()));
> //{ cost: 3500, water: 250, milk: 100}
> ```



# Singleton Pattern

> #### 1. define
>
> ```text
> 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.
> ```
>
> - 공통된 객체를 여러개 생성해서 사용하는 상황에 많이 사용된다.
>
> - 클로저를 이용하여 모든 속성은 private이다.
>
>
> #### 2. example
>
> ```javascript
> var singleton = (function(){
>     var instance;
>     var owner = 'walli';
>     function init(){
>         return {
>             owner : owner
>         };
>     }
>     
>     return {
>         getInstance: function(){
>             if(!instance){
>                 instance = init();
>             }
>             return instance;
>         }
>     }
> })();
> 
> /****** use ******/
> var first = singleton.getInstance();
> var second = singleton.getInstance();
> console.log(first === second); //true
> ```
>
>
>
>